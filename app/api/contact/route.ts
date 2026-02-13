import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/schemas/contactSchema';
import { sendContactEmail } from '@/lib/email/sendContactEmail';

// In-memory rate limiting storage
// Map<IP, timestamp[]>
const rateLimitStore = new Map<string, number[]>();

// Rate limit configuration
const RATE_LIMIT_MAX_REQUESTS = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

/**
 * Extract client IP from request
 * Handles both direct connections and proxies (Vercel, etc.)
 */
function getClientIP(request: NextRequest): string {
  // Check forwarded headers first (for proxies like Vercel)
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  const realIP = request.headers.get('x-real-ip');
  if (realIP) {
    return realIP;
  }

  // Fallback to a default IP (shouldn't happen in production)
  return 'unknown';
}

/**
 * Clean old entries from rate limiter (older than window)
 */
function cleanRateLimiter(ip: string) {
  const timestamps = rateLimitStore.get(ip);
  if (!timestamps) return;

  const now = Date.now();
  const validTimestamps = timestamps.filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (validTimestamps.length === 0) {
    rateLimitStore.delete(ip);
  } else {
    rateLimitStore.set(ip, validTimestamps);
  }
}

/**
 * Check if IP has exceeded rate limit
 */
function isRateLimited(ip: string): boolean {
  cleanRateLimiter(ip);

  const timestamps = rateLimitStore.get(ip) || [];
  return timestamps.length >= RATE_LIMIT_MAX_REQUESTS;
}

/**
 * Add request timestamp for IP
 */
function recordRequest(ip: string) {
  const timestamps = rateLimitStore.get(ip) || [];
  timestamps.push(Date.now());
  rateLimitStore.set(ip, timestamps);
}

/**
 * POST /api/contact
 * Handle contact form submissions
 */
export async function POST(request: NextRequest) {
  try {
    // Extract client IP
    const clientIP = getClientIP(request);

    // Check rate limit
    if (isRateLimited(clientIP)) {
      return NextResponse.json(
        { message: 'Trop de requêtes. Veuillez réessayer plus tard.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Validate with Zod schema
    const validation = contactSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          message: 'Données invalides',
          errors: validation.error.issues,
        },
        { status: 400 }
      );
    }

    const { name, email, phone, message, honeypot } = validation.data;

    // Check honeypot field (spam detection)
    if (honeypot) {
      // Return generic error without revealing spam detection
      return NextResponse.json(
        { message: 'Une erreur est survenue. Veuillez réessayer.' },
        { status: 400 }
      );
    }

    // Send email
    await sendContactEmail({ name, email, phone, message });

    // Record request for rate limiting
    recordRequest(clientIP);

    // Return success response
    return NextResponse.json(
      { message: 'Message envoyé avec succès !' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      { message: 'Erreur lors de l\'envoi. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}
