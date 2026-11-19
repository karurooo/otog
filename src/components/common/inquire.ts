// Lets any section prefill the contact form (Programs "Ask about this program", Facilities "Request to use").
export interface InquiryPrefill {
  inquiry_type: 'program' | 'general' | 'event' | 'facility' | 'media'
  subject: string
}

const EVENT = 'bcsd:inquire'

export function requestInquiry(prefill: InquiryPrefill) {
  window.dispatchEvent(new CustomEvent<InquiryPrefill>(EVENT, { detail: prefill }))
  document.getElementById('contact')?.scrollIntoView()
}

export function onInquiryRequest(handler: (p: InquiryPrefill) => void) {
  const listener = (e: Event) => handler((e as CustomEvent<InquiryPrefill>).detail)
  window.addEventListener(EVENT, listener)
  return () => window.removeEventListener(EVENT, listener)
}
