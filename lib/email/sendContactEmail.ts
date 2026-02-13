import { Resend } from 'resend';

interface ContactEmailData {
  name: string;
  email: string;
  message: string;
}

/**
 * Create HTML email template
 */
function createEmailHTML({ name, email, message }: ContactEmailData): string {
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nouveau message de contact</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 20px;
      border-radius: 8px 8px 0 0;
      text-align: center;
    }
    .content {
      background: #f9fafb;
      padding: 30px;
      border-radius: 0 0 8px 8px;
      border: 1px solid #e5e7eb;
      border-top: none;
    }
    .field {
      margin-bottom: 20px;
    }
    .field-label {
      font-weight: 600;
      color: #4b5563;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 5px;
    }
    .field-value {
      background: white;
      padding: 12px;
      border-radius: 6px;
      border: 1px solid #e5e7eb;
    }
    .message-box {
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    .footer {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #e5e7eb;
      text-align: center;
      font-size: 12px;
      color: #6b7280;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1 style="margin: 0; font-size: 24px;">📬 Nouveau message de contact</h1>
  </div>

  <div class="content">
    <div class="field">
      <div class="field-label">Nom</div>
      <div class="field-value">${name}</div>
    </div>

    <div class="field">
      <div class="field-label">Email</div>
      <div class="field-value">
        <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
      </div>
    </div>

    <div class="field">
      <div class="field-label">Message</div>
      <div class="field-value message-box">${message}</div>
    </div>
  </div>

  <div class="footer">
    Message envoyé depuis le formulaire de contact du portfolio
  </div>
</body>
</html>
  `.trim();
}

/**
 * Send contact email via Resend
 */
export async function sendContactEmail(data: ContactEmailData): Promise<void> {
  // Validate environment variables at runtime
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not defined in environment variables');
  }

  if (!process.env.EMAIL_TO) {
    throw new Error('EMAIL_TO is not defined in environment variables');
  }

  if (!process.env.EMAIL_FROM) {
    throw new Error('EMAIL_FROM is not defined in environment variables');
  }

  // Initialize Resend client
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const emailHTML = createEmailHTML(data);

    const result = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      subject: 'Nouveau message de contact - Portfolio',
      html: emailHTML,
      // Optional: add reply-to for easy responses
      replyTo: data.email,
    });

    if (!result.data) {
      throw new Error('Failed to send email: No data returned from Resend');
    }

    console.log('Email sent successfully:', result.data.id);
  } catch (error) {
    console.error('Error sending email:', error);

    // Propagate error with clear message
    if (error instanceof Error) {
      throw new Error(`Failed to send email: ${error.message}`);
    }

    throw new Error('Failed to send email: Unknown error');
  }
}
