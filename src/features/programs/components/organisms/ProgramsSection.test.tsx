import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProgramsSection } from './ProgramsSection'

test.each([
  ['Learn to Sabong', '/sabong/index.html'],
  ['Bahog-Bahog', '/bahog-bahog/index.html'],
])('%s card opens a details dialog with a link to its playable prototype', async (name, href) => {
  const user = userEvent.setup()
  render(<ProgramsSection />)

  const card = screen.getByRole('heading', { name }).closest('li')!
  await user.click(within(card).getByRole('button', { name: 'Details' }))

  expect(screen.getByRole('link', { name: 'Play demo' })).toHaveAttribute('href', href)
})
