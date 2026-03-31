import { z } from 'zod';

// ─── Contact Form ──────────────────────────────────────────────────────────────

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[\p{L}\s'\-\.]+$/u, 'Name contains invalid characters')
    .trim(),

  email: z
    .string()
    .email('Please enter a valid email address')
    .max(254, 'Email address is too long')
    .toLowerCase()
    .trim(),

  company: z
    .string()
    .max(150, 'Company name must be less than 150 characters')
    .trim()
    .optional()
    .transform((v) => v || undefined),

  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters')
    .trim()
    // Prevent basic script injection
    .refine(
      (v) => !/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi.test(v),
      'Message contains invalid content',
    ),

  budget: z
    .enum(['under-10k', '10k-50k', '50k-100k', 'over-100k', 'not-sure'])
    .optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// ─── AI Chat ───────────────────────────────────────────────────────────────────

const safeStringSchema = z
  .string()
  .max(2000, 'Too long')
  // No SQL-like injection patterns
  .refine(
    (v) => !/(\bDROP\s+TABLE\b|\bDELETE\s+FROM\b|\bUNION\s+SELECT\b)/i.test(v),
    'Message contains invalid content',
  )
  // No script tags
  .refine(
    (v) => !/<script/i.test(v),
    'Message contains invalid content',
  );

export const chatInputSchema = z.object({
  message: z
    .string()
    .min(1, 'Message cannot be empty')
    .max(1000, 'Message must be less than 1000 characters')
    .trim()
    .pipe(safeStringSchema),

  conversationHistory: z
    .array(
      z.object({
        role: z.enum(['user', 'assistant']),
        content: safeStringSchema,
      }),
    )
    .max(20, 'Conversation history is too long')
    .default([]),
});

export type ChatInputData = z.infer<typeof chatInputSchema>;
