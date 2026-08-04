import { BarChart } from './bar-chart.jsx'
import { LineChart, AreaChart } from './line-chart.jsx'
import { PieChart } from './pie-chart.jsx'
import { RadarChart } from './radar-chart.jsx'
import { RadialChart } from './radial-chart.jsx'
import { ScatterChart } from './scatter-chart.jsx'
import { ChartContainer } from './chart.jsx'

const formatValue = (value) => `$${value}`

function Section({ title, children }) {
  return (
    <div className="space-y-4">
      <h4 className="text-sm font-medium text-foreground">{title}</h4>
      {children}
    </div>
  )
}

export function ChartDemo() {
  const barData = [
    { label: 'Jan', desktop: 186, mobile: 80 },
    { label: 'Feb', desktop: 305, mobile: 200 },
    { label: 'Mar', desktop: 237, mobile: 120 },
    { label: 'Apr', desktop: 73, mobile: 190 },
    { label: 'May', desktop: 209, mobile: 130 },
    { label: 'Jun', desktop: 214, mobile: 140 },
  ]

  const barConfig = {
    desktop: { label: 'Desktop', color: 'var(--color-chart-1)' },
    mobile: { label: 'Mobile', color: 'var(--color-chart-2)' },
  }

  const lineData = [
    { label: 'Jan', revenue: 186, expenses: 80 },
    { label: 'Feb', revenue: 305, expenses: 200 },
    { label: 'Mar', revenue: 237, expenses: 120 },
    { label: 'Apr', revenue: 73, expenses: 190 },
    { label: 'May', revenue: 209, expenses: 130 },
    { label: 'Jun', revenue: 214, expenses: 140 },
  ]

  const lineConfig = {
    revenue: { label: 'Revenue', color: 'var(--color-chart-1)' },
    expenses: { label: 'Expenses', color: 'var(--color-chart-4)' },
  }

  const pieData = [
    { key: 'chrome', label: 'Chrome', value: 275 },
    { key: 'safari', label: 'Safari', value: 200 },
    { key: 'firefox', label: 'Firefox', value: 187 },
    { key: 'edge', label: 'Edge', value: 173 },
    { key: 'other', label: 'Other', value: 90 },
  ]

  const pieConfig = {
    chrome: { label: 'Chrome', color: 0 },
    safari: { label: 'Safari', color: 1 },
    firefox: { label: 'Firefox', color: 2 },
    edge: { label: 'Edge', color: 3 },
    other: { label: 'Other', color: 4 },
  }

  const radarData = [
    { label: 'Speed', design: 90, marketing: 60 },
    { label: 'Reliability', design: 80, marketing: 55 },
    { label: 'Usability', design: 70, marketing: 80 },
    { label: 'Security', design: 95, marketing: 40 },
    { label: 'Performance', design: 85, marketing: 70 },
    { label: 'Support', design: 60, marketing: 90 },
  ]

  const radarConfig = {
    design: { label: 'Design', color: 'var(--color-chart-1)' },
    marketing: { label: 'Marketing', color: 'var(--color-chart-3)' },
  }

  const scatterData = [
    { x: 10, y: 30, label: 'A' },
    { x: 20, y: 85, label: 'B' },
    { x: 30, y: 45, label: 'C' },
    { x: 40, y: 100, label: 'D' },
    { x: 50, y: 65, label: 'E' },
    { x: 60, y: 90, label: 'F' },
    { x: 70, y: 40, label: 'G' },
    { x: 80, y: 110, label: 'H' },
    { x: 90, y: 70, label: 'I' },
  ]

  const scatterConfig = {
    point: { label: 'Users', color: 'var(--color-chart-5)' },
  }

  return (
    <div className="w-full space-y-10">
      <Section title="Bar Chart">
        <ChartContainer config={barConfig} formatValue={formatValue}>
          <BarChart data={barData} showLegend />
        </ChartContainer>
      </Section>

      <div className="grid gap-10 md:grid-cols-2">
        <Section title="Stacked Bar Chart">
          <ChartContainer config={barConfig} formatValue={formatValue}>
            <BarChart data={barData} stacked showLegend />
          </ChartContainer>
        </Section>

        <Section title="Line Chart">
          <ChartContainer config={lineConfig} formatValue={formatValue}>
            <LineChart data={lineData} showLegend />
          </ChartContainer>
        </Section>

        <Section title="Area Chart">
          <ChartContainer config={lineConfig} formatValue={formatValue}>
            <AreaChart data={lineData} showLegend />
          </ChartContainer>
        </Section>

        <Section title="Radar Chart">
          <ChartContainer config={radarConfig}>
            <RadarChart data={radarData} />
          </ChartContainer>
        </Section>

        <Section title="Pie Chart">
          <ChartContainer config={pieConfig}>
            <PieChart data={pieData} />
          </ChartContainer>
        </Section>

        <Section title="Donut Chart">
          <ChartContainer config={pieConfig}>
            <PieChart
              data={pieData}
              innerRadius={70}
              centerValue="925"
              centerLabel="Total Visitors"
            />
          </ChartContainer>
        </Section>

        <Section title="Radial Chart">
          <ChartContainer config={{ score: { label: 'Score', color: 'var(--color-chart-2)' } }}>
            <RadialChart value={72} showLabel />
          </ChartContainer>
        </Section>

        <Section title="Scatter Chart">
          <ChartContainer config={scatterConfig}>
            <ScatterChart data={scatterData} />
          </ChartContainer>
        </Section>
      </div>
    </div>
  )
}
