import { rmSync } from 'fs'

const dirs = ['.nuxt', 'node_modules/.cache']

for (const dir of dirs) {
  try {
    rmSync(dir, { recursive: true, force: true })
    console.log(`Removed ${dir}`)
  } catch (e) {
  }
}