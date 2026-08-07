import { ChartDemo } from '../components/ui/chart/chart.demo.jsx'
import { CodeBlock } from '../components/ui/CodeBlock.jsx'
import { HighlightedCode } from '../components/ui/HighlightedCode.jsx'
import { CopyButton } from '../components/ui/CopyButton.jsx'
import { components, resolveDeps } from '../constants/components.js'
import { SourceSection } from '../components/ui/SourceSection.jsx'

export function ChartPage() {
  const meta = components.find((c) => c.id === 'chart')
  const deps = resolveDeps(meta.deps)

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Chart</h1>
        <p className="mt-2 text-muted-foreground">{meta.description}</p>
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Preview</h2>
        <div className="rounded-lg border border-border/50 bg-card/70 backdrop-blur-xl p-8">
          <ChartDemo />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Installation</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          First install the package: <code className="text-xs bg-muted px-1.5 py-0.5 rounded">npm install snitchui</code>. Then scaffold the component with the CLI below.
        </p>
        <div className="rounded-lg border border-border/50 bg-card/70 backdrop-blur-xl overflow-hidden">
          <div className="flex items-center justify-between bg-muted px-4 py-2.5 border-b border-border/50">
            <span className="text-sm font-medium">CLI</span>
            <CopyButton text={meta.installCmd} label="install-chart" />
          </div>
          <HighlightedCode code={meta.installCmd} language="bash" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Theme</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Add the chart color tokens (and optional entry animations) to your{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded">index.css</code>. Each chart
          series can either reference these variables or pass its own color in the config.
        </p>
        <CodeBlock
          code={`@theme {
  --color-chart-1: #2563eb;
  --color-chart-2: #16a34a;
  --color-chart-3: #d97706;
  --color-chart-4: #db2777;
  --color-chart-5: #7c3aed;
}

.dark {
  --color-chart-1: #60a5fa;
  --color-chart-2: #4ade80;
  --color-chart-3: #fbbf24;
  --color-chart-4: #f472b6;
  --color-chart-5: #a78bfa;
}

/* optional: entry animations */
@keyframes chart-tooltip-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes chart-bar-grow {
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
}
@keyframes chart-draw {
  to { stroke-dashoffset: 0; }
}

.chart-tooltip {
  animation: chart-tooltip-in 0.15s ease-out;
}
.chart-bar {
  transform-box: fill-box;
  transform-origin: bottom;
  animation: chart-bar-grow 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
}
.chart-line {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: chart-draw 0.9s ease-out forwards;
}`}
        />
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import {
  ChartContainer,
  BarChart,
  LineChart,
  AreaChart,
  PieChart,
  RadarChart,
  RadialChart,
  ScatterChart,
} from '@/components/ui/chart'

const config = {
  desktop: { label: 'Desktop', color: 'var(--color-chart-1)' },
  mobile: { label: 'Mobile', color: 'var(--color-chart-2)' },
}

const data = [
  { label: 'Jan', desktop: 186, mobile: 80 },
  { label: 'Feb', desktop: 305, mobile: 200 },
  { label: 'Mar', desktop: 237, mobile: 120 },
]

export function Example() {
  return (
    <ChartContainer config={config} formatValue={(v) => \`$\${v}\`}>
      <BarChart data={data} showLegend />
    </ChartContainer>
  )
}`}
        />
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Props</h2>
        <div className="rounded-lg border border-border/50 bg-card/70 backdrop-blur-xl overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-muted/50 backdrop-blur-sm">
                <th className="px-4 py-3 text-left font-medium">Prop</th>
                <th className="px-4 py-3 text-left font-medium">Type</th>
                <th className="px-4 py-3 text-left font-medium">Default</th>
                <th className="px-4 py-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              {meta.props.map((p, i) => (
                <tr key={p.prop} className={i < meta.props.length - 1 ? 'border-b border-border/50' : ''}>
                  <td className="px-4 py-3 font-mono text-xs">{p.prop}</td>
                  <td className="px-4 py-3 text-muted-foreground">{p.type}</td>
                  <td className="px-4 py-3 text-muted-foreground">{p.default}</td>
                  <td className="px-4 py-3 text-muted-foreground">{p.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>      {/* Source */}
      <SourceSection deps={deps} />
    </div>
  )
}
