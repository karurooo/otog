import { Section } from '@/components/common/Section'
import { ContactDetails } from '../molecules/ContactDetails'
import { InquiryForm } from '../molecules/InquiryForm'

export function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact us"
      title="Ask the department"
      intro="Questions about a program, an event or using a city facility? Send a message and we'll reply by email."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <ContactDetails />
        <InquiryForm />
      </div>
    </Section>
  )
}
