import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { InquiryForm } from './InquiryForm'

test('shows inline errors on an empty submit, then confirms a valid one', async () => {
  const user = userEvent.setup()
  render(<InquiryForm />)

  await user.click(screen.getByRole('button', { name: 'Send inquiry' }))
  expect(screen.getByText('Enter a valid email')).toBeInTheDocument()
  expect(screen.getByText('You must agree to the privacy notice')).toBeInTheDocument()

  await user.type(screen.getByLabelText(/Full name/), 'Juan Dela Cruz')
  await user.type(screen.getByLabelText(/^Email/), 'juan@example.com')
  await user.type(screen.getByLabelText(/Subject/), 'Learn to Swim')
  await user.type(screen.getByLabelText(/Message/), 'When is the next batch?')
  await user.click(screen.getByRole('checkbox'))
  await user.click(screen.getByRole('button', { name: 'Send inquiry' }))

  expect(screen.getByRole('status')).toHaveTextContent('Your inquiry has been received')
})
