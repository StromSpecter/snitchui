import fs from 'node:fs'
import path from 'node:path'

const base = path.join(process.cwd(), 'src', 'components', 'ui', 'chart')
const target = path.join(process.cwd(), 'src', 'constants', 'components.js')
const files = [
  ['CHART_SOURCE', 'chart.jsx'],
  ['BAR_CHART_SOURCE', 'bar-chart.jsx'],
  ['LINE_CHART_SOURCE', 'line-chart.jsx'],
  ['PIE_CHART_SOURCE', 'pie-chart.jsx'],
  ['RADAR_CHART_SOURCE', 'radar-chart.jsx'],
  ['RADIAL_CHART_SOURCE', 'radial-chart.jsx'],
  ['SCATTER_CHART_SOURCE', 'scatter-chart.jsx'],
  ['CHART_HELPERS_SOURCE', 'helpers.js'],
]

const out = []
for (const [name, file] of files) {
  let src = fs.readFileSync(path.join(base, file), 'utf8')
  src = src.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')
  out.push(`export const ${name} = \`${src}\``)
}

const block = out.join('\n\n') + '\n'

const content = fs.readFileSync(target, 'utf8')
const start = '// BEGIN CHART_SOURCES'
const end = '// END CHART_SOURCES'
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
console.log(`synced chart sources into ${target}`)
