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

  phone: z
    .string()
    .trim()
    .optional()
    .refine(
      (val) => {
        // Si le champ est vide ou undefined, c'est valide (optionnel)
        if (!val || val === '') return true;
        // Sinon, on vérifie que c'est un numéro valide (format français flexible)
        // Accepte : 06 12 34 56 78, 0612345678, +33612345678, +33 6 12 34 56 78
        const phoneRegex = /^(?:(?:\+|00)33|0)\s?[1-9](?:[\s.-]?\d{2}){4}$/;
        return phoneRegex.test(val);
      },
      { message: 'Format invalide. Exemple : 06 12 34 56 78 ou +33 6 12 34 56 78' }
    ),

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
