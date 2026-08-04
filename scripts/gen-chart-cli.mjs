import fs from 'node:fs'
import path from 'node:path'

const base = path.join(process.cwd(), 'src', 'components', 'ui', 'chart')
const target = path.join(process.cwd(), 'cli', 'templates.js')
const files = [
  'chart.jsx',
  'bar-chart.jsx',
  'line-chart.jsx',
  'pie-chart.jsx',
  'radar-chart.jsx',
  'radial-chart.jsx',
  'scatter-chart.jsx',
  'helpers.js',
]

function esc(src) {
  return src
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${')
}

const lines = []
lines.push('  chart: {')
lines.push("    name: 'chart',")
lines.push('    requires: [],')
lines.push("    deps: ['clsx', 'tailwind-merge'],")
lines.push('    files: [')
for (const f of files) {
  const src = fs.readFileSync(path.join(base, f), 'utf8')
  lines.push(`      {`)
  lines.push(`        path: 'components/ui/chart/${f}',`)
  lines.push(`        content: \`${esc(src)}\`,`)
  lines.push(`      },`)
}
lines.push('    ],')
lines.push('  },')
const block = lines.join('\n') + '\n'

const content = fs.readFileSync(target, 'utf8')
const start = '// BEGIN CHART_CLI'
const end = '// END CHART_CLI'
const startIdx = content.indexOf(start)
const endIdx = content.indexOf(end)
if (startIdx === -1 || endIdx === -1) {
  console.error(`markers not found in ${target}`)
  process.exit(1)
}
const patched =
  content.slice(0, startIdx) +
  start +
  '\n' +
  block +
  '\n' +
  content.slice(endIdx)
fs.writeFileSync(target, patched, 'utf8')
console.log(`synced chart CLI registry into ${target}`)
