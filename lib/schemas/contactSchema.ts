import { z } from 'zod';

/**
 * Contact form validation schema
 * Used for both client-side and server-side validation
 */
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom ne peut pas dépasser 100 caractères'),

  email: z
    .string()
    .email('L\'email n\'est pas valide'),

  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(1000, 'Le message ne peut pas dépasser 1000 caractères'),

  // Honeypot field for spam protection
  // Should remain empty for legitimate users
  honeypot: z.string().optional(),
});

/**
 * TypeScript type inferred from the Zod schema
 */
export type ContactFormData = z.infer<typeof contactSchema>;
