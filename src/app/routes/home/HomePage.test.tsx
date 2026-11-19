import { render } from '@testing-library/react'
import { App } from '@/app/App'

const SECTION_IDS = ['home', 'about', 'programs', 'events', 'facilities', 'athletes', 'news', 'gallery', 'resources', 'contact']

test('renders exactly one <h1>', () => {
  const { container } = render(<App />)
  expect(container.querySelectorAll('h1')).toHaveLength(1)
})

test('renders all 10 section anchors', () => {
  const { container } = render(<App />)
  for (const id of SECTION_IDS) expect(container.querySelector(`#${id}`), `#${id}`).not.toBeNull()
})
