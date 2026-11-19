import { AppShell } from '@/components/layout/AppShell/AppShell'
import { HomePage } from './routes/home/HomePage'

export function App() {
  return (
    <AppShell>
      <HomePage />
    </AppShell>
  )
}
