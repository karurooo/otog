import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProgramsSection } from './ProgramsSection'

test('Learn to Sabong card opens a details dialog with a link to the playable prototype', async () => {
  const user = userEvent.setup()
  render(<ProgramsSection />)

  const card = screen.getByRole('heading', { name: 'Learn to Sabong' }).closest('li')!
  await user.click(within(card).getByRole('button', { name: 'Details' }))

  expect(screen.getByRole('link', { name: 'Play demo' })).toHaveAttribute('href', '/sabong/index.html')
})
