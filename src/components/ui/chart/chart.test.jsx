import { describe, it, expect, beforeAll } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ChartContainer, BarChart, LineChart, AreaChart, PieChart, RadarChart, RadialChart, ScatterChart } from '../chart/index.js'

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
