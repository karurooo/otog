// Fails CI when the gzipped JS + CSS in dist/assets exceeds the 200 KB budget.
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { gzipSync } from 'node:zlib'

const BUDGET_KB = 200
const dir = 'dist/assets'
let files
try {
  files = readdirSync(dir).filter((f) => /\.(js|css)$/.test(f))
} catch {
  console.error('dist/assets not found. Run `npm run build` first.')
  process.exit(1)
}
const totalKb = files.reduce((sum, f) => sum + gzipSync(readFileSync(join(dir, f))).length, 0) / 1024
console.log(`Bundle: ${totalKb.toFixed(1)} KB gzipped (budget ${BUDGET_KB} KB)`)
if (totalKb > BUDGET_KB) process.exit(1)
