import { z } from "zod";

export const consultationSchema = z.object({
  first_name: z.string()
    .trim()
    .min(1, "First name is required")
    .max(100, "First name must be less than 100 characters"),
  last_name: z.string()
    .trim()
    .min(1, "Last name is required")
    .max(100, "Last name must be less than 100 characters"),
  email: z.string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z.string()
    .trim()
    .min(1, "Phone number is required")
    .max(20, "Phone number must be less than 20 characters"),
  company: z.string()
    .trim()
    .max(200, "Company name must be less than 200 characters")
    .optional(),
  service: z.string()
    .trim()
    .min(1, "Please select a service"),
  message: z.string()
    .trim()
    .min(1, "Message is required")
    .max(2000, "Message must be less than 2000 characters"),
});

export const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z.string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z.string()
    .trim()
    .max(20, "Phone number must be less than 20 characters"),
  subject: z.string()
    .trim()
    .min(1, "Subject is required")
    .max(200, "Subject must be less than 200 characters"),
  message: z.string()
    .trim()
    .min(1, "Message is required")
    .max(2000, "Message must be less than 2000 characters"),
});

export const newsletterSchema = z.object({
  email: z.string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
});

export type ConsultationFormData = z.infer<typeof consultationSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;
