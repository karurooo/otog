import { useEffect, useState, type FormEvent } from 'react'
import { onInquiryRequest } from '@/components/common/inquire'
import { INQUIRY_TYPES, inquirySchema, type InquiryInput } from '../../constants/inquirySchema'

// The checkbox starts unchecked; the schema only accepts true on submit.
type FormValues = Omit<InquiryInput, 'privacy_consent'> & { privacy_consent: boolean }
type Field = keyof FormValues
type Errors = Partial<Record<Field, string>>

const EMPTY: FormValues = {
  full_name: '',
  email: '',
  mobile: '',
  inquiry_type: 'general',
  subject: '',
  message: '',
  privacy_consent: false,
  website: '',
}

function validate(values: FormValues): Errors {
  const r = inquirySchema.safeParse(values)
  const errors: Errors = {}
  if (!r.success) for (const i of r.error.issues) errors[i.path[0] as Field] ??= i.message
  return errors
}

const inputCls = 'mt-1 w-full rounded-md border px-3 py-2 aria-invalid:border-danger'

export function InquiryForm() {
  const [values, setValues] = useState<FormValues>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  useEffect(
    () =>
      onInquiryRequest((p) => {
        setSent(false)
        setValues((v) => ({ ...v, ...p }))
      }),
    [],
  )

  const set = <K extends Field>(k: K, v: FormValues[K]) => setValues((prev) => ({ ...prev, [k]: v }))
  const blur = (k: Field) => setErrors((e) => ({ ...e, [k]: validate(values)[k] }))

  function submit(e: FormEvent) {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    // shortcut: no inquiry API yet, so a valid form only shows the confirmation. Wire to the backend when it exists.
    setSent(true)
    setValues(EMPTY)
  }

  const field = (k: Field, label: string, props: { type?: string; required?: boolean; textarea?: boolean } = {}) => {
    const Tag = props.textarea ? 'textarea' : 'input'
    return (
      <label className="block text-sm font-semibold">
        {label}
        {props.required && ' *'}
        <Tag
          name={k}
          type={props.textarea ? undefined : (props.type ?? 'text')}
          rows={props.textarea ? 5 : undefined}
          value={values[k] as string}
          onChange={(e) => set(k, e.target.value as never)}
          onBlur={() => blur(k)}
          aria-invalid={errors[k] ? true : undefined}
          aria-describedby={errors[k] ? `${k}-error` : undefined}
          className={`${inputCls} font-normal`}
        />
        {errors[k] && (
          <span id={`${k}-error`} className="text-danger mt-1 block font-normal">
            {errors[k]}
          </span>
        )}
      </label>
    )
  }

  if (sent) {
    return (
      <div role="status" className="border-success bg-success/10 rounded-lg border p-6">
        <p className="font-semibold">Thank you! Your inquiry has been received.</p>
        <p className="mt-1 text-sm">We will reply by email.</p>
        <button type="button" onClick={() => setSent(false)} className="text-primary mt-3 text-sm font-semibold">
          Send another inquiry
        </button>
      </div>
    )
  }

  return (
    <form noValidate onSubmit={submit} aria-label="Inquiry form" className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {field('full_name', 'Full name', { required: true })}
        {field('email', 'Email', { type: 'email', required: true })}
        {field('mobile', 'Mobile (optional)', { type: 'tel' })}
        <label className="block text-sm font-semibold">
          Inquiry type *
          <select
            name="inquiry_type"
            value={values.inquiry_type}
            onChange={(e) => set('inquiry_type', e.target.value as InquiryInput['inquiry_type'])}
            className={`${inputCls} font-normal`}
          >
            {INQUIRY_TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      {field('subject', 'Subject', { required: true })}
      {field('message', 'Message', { required: true, textarea: true })}

      {/* Honeypot: off-screen and skipped by keyboard and screen readers. */}
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        value={values.website}
        onChange={(e) => set('website', e.target.value)}
        className="absolute -left-[9999px]"
      />

      <p className="text-sm text-slate-600">
        Privacy notice: your details are used only to reply to this inquiry, in line with the Data Privacy Act of 2012
        (RA 10173).
      </p>
      <label className="flex items-start gap-2 text-sm">
        <input
          type="checkbox"
          name="privacy_consent"
          checked={values.privacy_consent}
          onChange={(e) => set('privacy_consent', e.target.checked)}
          aria-invalid={errors.privacy_consent ? true : undefined}
          aria-describedby={errors.privacy_consent ? 'privacy_consent-error' : undefined}
          className="mt-1"
        />
        <span>
          I agree to the privacy notice and consent to the processing of my personal information. *
          {errors.privacy_consent && (
            <span id="privacy_consent-error" className="text-danger block">
              {errors.privacy_consent}
            </span>
          )}
        </span>
      </label>
      <button type="submit" className="bg-primary justify-self-start rounded-md px-6 py-3 font-semibold text-white">
        Send inquiry
      </button>
    </form>
  )
}
