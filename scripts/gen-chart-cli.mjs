import fs from 'node:fs'
import path from 'node:path'

const base = path.join(process.cwd(), 'src', 'components', 'ui', 'chart')
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

fs.writeFileSync(path.join(process.cwd(), 'scripts', 'chart-cli.generated.js'), lines.join('\n') + '\n', 'utf8')
console.log('generated chart-cli.generated.js')
