import { describe, it, expect, beforeAll } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ChartContainer, BarChart, LineChart, AreaChart, PieChart, RadarChart, RadialChart, ScatterChart } from '../chart/index.js'
import { describeArc } from '../chart/chart.jsx'

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

beforeAll(() => {
  globalThis.ResizeObserver = globalThis.ResizeObserver || ResizeObserverMock
})

const config = {
  a: { label: 'A', color: 'var(--color-chart-1)' },
  b: { label: 'B', color: 'var(--color-chart-2)' },
}

const data = [
  { label: 'x', a: 10, b: 5 },
  { label: 'y', a: 20, b: 15 },
]

describe('charts', () => {
  it('renders BarChart', () => {
    render(
      <ChartContainer config={config}>
        <BarChart data={data} showLegend />
      </ChartContainer>
    )
    expect(screen.getByText('A')).toBeTruthy()
    expect(screen.getByText('B')).toBeTruthy()
  })

  it('renders BarChart stacked', () => {
    render(
      <ChartContainer config={config}>
        <BarChart data={data} stacked />
      </ChartContainer>
    )
    expect(document.querySelectorAll('rect').length).toBeGreaterThan(0)
  })

  it('renders LineChart', () => {
    render(
      <ChartContainer config={config}>
        <LineChart data={data} />
      </ChartContainer>
    )
    expect(document.querySelectorAll('path').length).toBeGreaterThan(0)
  })

  it('renders AreaChart', () => {
    render(
      <ChartContainer config={config}>
        <AreaChart data={data} />
      </ChartContainer>
    )
    expect(document.querySelectorAll('linearGradient').length).toBeGreaterThan(0)
  })

  it('renders PieChart', () => {
    const pieData = [
      { key: 'a', value: 10 },
      { key: 'b', value: 5 },
    ]
    render(
      <ChartContainer config={config}>
        <PieChart data={pieData} />
      </ChartContainer>
    )
    expect(document.querySelectorAll('path').length).toBeGreaterThan(0)
  })

  it('renders RadarChart', () => {
    render(
      <ChartContainer config={config}>
        <RadarChart data={data} />
      </ChartContainer>
    )
    expect(document.querySelectorAll('polygon').length).toBeGreaterThan(0)
  })

  it('renders RadialChart', () => {
    render(
      <ChartContainer config={{ score: { label: 'Score' } }}>
        <RadialChart value={72} showLabel />
      </ChartContainer>
    )
    expect(screen.getByText('72')).toBeTruthy()
  })

  it('renders ScatterChart', () => {
    render(
      <ChartContainer config={config}>
        <ScatterChart data={[{ x: 1, y: 2 }, { x: 3, y: 4 }]} />
      </ChartContainer>
    )
    expect(document.querySelectorAll('circle').length).toBeGreaterThan(0)
  })
})

describe('describeArc', () => {
  it('sweeps clockwise from startAngle to endAngle on the given center', () => {
    const d = describeArc(180, 100, 91, 0, 259.2)
    expect(d).toContain('M 180 9')
    expect(d).toMatch(/A 91 91 0 1 1/)
  })

  it('does not flag a sub-180 sweep as a large arc', () => {
    const d = describeArc(100, 100, 50, 0, 90)
    expect(d).toContain('A 50 50 0 0 1')
  })

  it('handles a wrap-around span larger than 180 degrees', () => {
    const d = describeArc(100, 100, 50, 300, 130)
    expect(d).toContain('A 50 50 0 1 1')
  })
})
