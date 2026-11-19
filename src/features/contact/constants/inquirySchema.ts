import { z } from 'zod'

export const INQUIRY_TYPES = [
  { value: 'program', label: 'Program' },
  { value: 'general', label: 'General' },
  { value: 'event', label: 'Event' },
  { value: 'facility', label: 'Facility use' },
  { value: 'media', label: 'Media' },
] as const

export const inquirySchema = z.object({
  full_name: z.string().trim().min(2, 'Enter your full name'),
  email: z.email('Enter a valid email'),
  mobile: z
    .string()
    .trim()
    .regex(/^(\+63|0)9\d{9}$/, 'Enter a PH mobile number, e.g. 09171234567')
    .or(z.literal('')),
  inquiry_type: z.enum(['program', 'general', 'event', 'facility', 'media']),
  subject: z.string().trim().min(3, 'Enter a subject'),
  message: z.string().trim().min(10, 'Message must be at least 10 characters'),
  privacy_consent: z.literal(true, 'You must agree to the privacy notice'),
  /** Honeypot: hidden from people, bots fill it in. */
  website: z.string().max(0),
})

export type InquiryInput = z.infer<typeof inquirySchema>
