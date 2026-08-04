import fs from 'node:fs'
import path from 'node:path'


const base = path.join(process.cwd(), 'src', 'components', 'ui', 'chart')
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

fs.writeFileSync(path.join(process.cwd(), 'scripts', 'chart-sources.generated.js'), out.join('\n\n') + '\n', 'utf8')
console.log('generated chart-sources.generated.js')
