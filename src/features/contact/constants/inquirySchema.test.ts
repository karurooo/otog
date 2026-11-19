import { inquirySchema } from './inquirySchema'

const valid = {
  full_name: 'Juan Dela Cruz',
  email: 'juan@example.com',
  mobile: '',
  inquiry_type: 'program',
  subject: 'Learn to Swim',
  message: 'When is the next batch?',
  privacy_consent: true,
  website: '',
}

test('accepts a complete inquiry with optional mobile left blank', () => {
  expect(inquirySchema.safeParse(valid).success).toBe(true)
})

test('rejects bad email, bad mobile, missing consent and a filled honeypot', () => {
  const r = inquirySchema.safeParse({
    ...valid,
    email: 'nope',
    mobile: '12345',
    privacy_consent: false,
    website: 'spam',
  })
  expect(r.success).toBe(false)
  const fields = r.error?.issues.map((i) => i.path[0])
  expect(fields).toEqual(expect.arrayContaining(['email', 'mobile', 'privacy_consent', 'website']))
})
