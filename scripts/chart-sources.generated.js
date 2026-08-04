export const CHART_SOURCE = `/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { cn } from '../../../lib/utils.js'

export const DEFAULT_PALETTE = [
  'var(--color-chart-1)',
  'var(--color-chart-2)',
  'var(--color-chart-3)',
  'var(--color-chart-4)',
  'var(--color-chart-5)',
]

export const CHART_MARGIN = { top: 12, right: 12, bottom: 30, left: 44 }

const NICE = [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10]

export function niceMax(value) {
  const v = Number(value)
  if (!Number.isFinite(v) || v <= 0) return 1
  const exp = Math.pow(10, Math.floor(Math.log10(v)))
  for (const n of NICE) if (n * exp >= v - 1e-9) return n * exp
  return 10 * exp
}

export function getTicks(max, count = 5) {
  const step = max / count
  return Array.from({ length: count + 1 }, (_, i) => Number((i * step).toFixed(2)))
}

export function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180
  return { x: cx + r * Math.sin(rad), y: cy - r * Math.cos(rad) }
}

export function describeArc(cx, cy, r, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, r, endAngle)
  const end = polarToCartesian(cx, cy, r, startAngle)
  const largeArc = endAngle - startAngle > 180 ? 1 : 0
  return \`M \${start.x} \${start.y} A \${r} \${r} 0 \${largeArc} 1 \${end.x} \${end.y}\`
}

export function wedgeSector(cx, cy, r, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, r, startAngle)
  const end = polarToCartesian(cx, cy, r, endAngle)
  const largeArc = endAngle - startAngle > 180 ? 1 : 0
  return \`M \${cx} \${cy} L \${start.x} \${start.y} A \${r} \${r} 0 \${largeArc} 1 \${end.x} \${end.y} Z\`
}

export function annularSector(cx, cy, outerRadius, innerRadius, startAngle, endAngle) {
  const outerStart = polarToCartesian(cx, cy, outerRadius, startAngle)
  const outerEnd = polarToCartesian(cx, cy, outerRadius, endAngle)
  const innerStart = polarToCartesian(cx, cy, innerRadius, startAngle)
  const innerEnd = polarToCartesian(cx, cy, innerRadius, endAngle)
  const largeArc = endAngle - startAngle > 180 ? 1 : 0
  return [
    \`M \${outerStart.x} \${outerStart.y}\`,
    \`A \${outerRadius} \${outerRadius} 0 \${largeArc} 1 \${outerEnd.x} \${outerEnd.y}\`,
    \`L \${innerEnd.x} \${innerEnd.y}\`,
    \`A \${innerRadius} \${innerRadius} 0 \${largeArc} 0 \${innerStart.x} \${innerStart.y}\`,
    'Z',
  ].join(' ')
}

export function linePath(points) {
  if (points.length < 2) return points.length ? \`M \${points[0].x} \${points[0].y}\` : ''
  return points.map((p, i) => \`\${i === 0 ? 'M' : 'L'} \${p.x} \${p.y}\`).join(' ')
}

export function smoothPath(points) {
  if (points.length < 2) return points.length ? \`M \${points[0].x} \${points[0].y}\` : ''
  return points.reduce((acc, p, i, arr) => {
    if (i === 0) return \`M \${p.x} \${p.y}\`
    const prev = arr[i - 1]
    const pprev = arr[i - 2] ?? prev
    const pnext = arr[i + 1] ?? p
    const c1x = prev.x + (p.x - pprev.x) / 6
    const c1y = prev.y + (p.y - pprev.y) / 6
    const c2x = p.x - (pnext.x - prev.x) / 6
    const c2y = p.y - (pnext.y - prev.y) / 6
    return \`\${acc} C \${c1x} \${c1y} \${c2x} \${c2y} \${p.x} \${p.y}\`
  }, '')
}

export function chartConfig(series, config = {}) {
  const merged = {}
  series.forEach((s, i) => {
    merged[s.key] = {
      label: config[s.key]?.label ?? s.label ?? s.key,
      color: config[s.key]?.color ?? s.color ?? DEFAULT_PALETTE[i % DEFAULT_PALETTE.length],
    }
  })
  return merged
}

export function legendItems(series, config) {
  return series.map((s) => ({
    label: config[s.key]?.label ?? s.label ?? s.key,
    color: \`var(--color-\${s.key})\`,
  }))
}

const ChartContext = createContext(null)

export function useChartContext() {
  const ctx = useContext(ChartContext)
  if (!ctx) {
    throw new Error('Chart components must be used inside a <ChartContainer>.')
  }
  return ctx
}

export function useChartSize() {
  const ref = useRef(null)
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) setWidth(entry.contentRect.width)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return { ref, width }
}

export function useCartesianScale({ width, height, data, maxValue, margin = CHART_MARGIN }) {
  return useMemo(() => {
    const innerW = Math.max(0, width - margin.left - margin.right)
    const innerH = Math.max(0, height - margin.top - margin.bottom)
    const yScale = (v) => margin.top + innerH - (v / maxValue) * innerH
    const bandWidth = data.length ? innerW / data.length : innerW
    const xCenter = (i) => margin.left + bandWidth * (i + 0.5)
    const xPoint = (i) =>
      data.length > 1
        ? margin.left + (i / (data.length - 1)) * innerW
        : margin.left + innerW / 2
    return { innerW, innerH, yScale, xCenter, xPoint, bandWidth }
  }, [width, height, data, maxValue, margin])
}

export function CartesianAxes({
  height,
  maxValue,
  xLabels,
  showGrid = true,
  formatValue,
  margin = CHART_MARGIN,
}) {
  const { width } = useChartContext()
  const ticks = getTicks(maxValue)
  const innerH = height - margin.top - margin.bottom
  const y = (v) => margin.top + innerH - (v / maxValue) * innerH

  return (
    <g>
      {showGrid &&
        ticks.map((t) => (
          <line
            key={\`grid-\${t}\`}
            x1={margin.left}
            x2={width - margin.right}
            y1={y(t)}
            y2={y(t)}
            stroke="currentColor"
            className="text-border/40"
            strokeWidth="1"
            strokeDasharray={t === 0 ? undefined : '3 4'}
          />
        ))}
      {ticks.map((t) => (
        <text
          key={\`tick-\${t}\`}
          x={margin.left - 8}
          y={y(t)}
          textAnchor="end"
          dominantBaseline="middle"
          fontSize="10"
          className="fill-muted-foreground"
        >
          {formatValue ? formatValue(t) : t}
        </text>
      ))}
      <line
        x1={margin.left}
        x2={width - margin.right}
        y1={y(0)}
        y2={y(0)}
        stroke="currentColor"
        className="text-border"
        strokeWidth="1"
      />
      {xLabels &&
        xLabels.map(({ x, label }) => (
          <text
            key={\`x-\${label}-\${x}\`}
            x={x}
            y={height - margin.bottom / 2}
            textAnchor="middle"
            fontSize="10"
            className="fill-muted-foreground"
          >
            {label}
          </text>
        ))}
    </g>
  )
}

const ChartContainer = forwardRef(({ config = {}, formatValue, className, children, ...props }, ref) => {
  const { ref: sizeRef, width } = useChartSize()
  const [hover, setHover] = useState(null)

  const styleVars = useMemo(() => {
    const vars = {}
    Object.entries(config).forEach(([key, entry], i) => {
      vars[\`--color-\${key}\`] = entry?.color ?? DEFAULT_PALETTE[i % DEFAULT_PALETTE.length]
    })
    return vars
  }, [config])

  const value = useMemo(
    () => ({
      width,
      config,
      formatValue: formatValue ?? ((v) => String(v)),
      showTooltip: setHover,
      hideTooltip: () => setHover(null),
    }),
    [width, config, formatValue]
  )

  return (
    <ChartContext.Provider value={value}>
      <div
        ref={(node) => {
          sizeRef.current = node
          if (typeof ref === 'function') ref(node)
          else if (ref) ref.current = node
        }}
        className={cn('relative w-full', className)}
        style={styleVars}
        {...props}
      >
        {children}
        {hover && <ChartTooltip {...hover} />}
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = 'ChartContainer'

const ChartTooltip = forwardRef(({ x, y, label, rows = [], className, ...props }, ref) => {
  const { width } = useChartContext()
  const flip = x > width * 0.55
  return (
    <div
      ref={ref}
      className={cn(
        'chart-tooltip pointer-events-none absolute z-50 min-w-[9rem] rounded-md border border-border/60 bg-card/95 px-3 py-2 text-xs shadow-lg backdrop-blur-sm',
        className
      )}
      style={{
        left: x,
        top: y,
        transform: \`translate(\${flip ? 'calc(-100% - 12px)' : '12px'}, -50%)\`,
      }}
      {...props}
    >
      {label != null && label !== '' && (
        <p className="mb-1.5 font-medium text-muted-foreground">{label}</p>
      )}
      <div className="space-y-1">
        {rows.map((row, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className="size-2 shrink-0 rounded-full"
              style={{ background: row.color }}
            />
            <span className="text-muted-foreground">{row.label}</span>
            <span className="ml-auto pl-4 font-medium tabular-nums text-foreground">
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
})
ChartTooltip.displayName = 'ChartTooltip'

const ChartLegend = forwardRef(({ items = [], className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex select-none flex-wrap items-center justify-center gap-x-4 gap-y-1.5', className)}
    {...props}
  >
    {items.map((item, i) => (
      <span key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <span className="size-2.5 rounded-full ring-1 ring-border/40" style={{ background: item.color }} />
        {item.label}
      </span>
    ))}
  </div>
))
ChartLegend.displayName = 'ChartLegend'

export { ChartContainer, ChartTooltip, ChartLegend }
`

export const BAR_CHART_SOURCE = `import { cn } from '../../../lib/utils.js'
import {
  CartesianAxes,
  ChartLegend,
  useCartesianScale,
  useChartSize,
  useChartContext,
  niceMax,
} from './chart.jsx'
import { getValue, resolveColor } from './helpers.js'

export function BarChart({
  data = [],
  config,
  height = 260,
  showTooltip = true,
  showLegend = false,
  stacked = false,
  radius = 4,
  className,
  ...props
}) {
  const { ref, width } = useChartSize()
  const ctx = useChartContext()
  const seriesConfig = config ?? ctx.config
  const series = Object.entries(seriesConfig)
  const keys = series.map(([key]) => key)

  const maxValue = niceMax(
    Math.max(
      1,
      ...data.map((d) =>
        stacked
          ? keys.reduce((sum, k) => sum + getValue(d, k, 0), 0)
          : Math.max(0, ...keys.map((k) => getValue(d, k, 0)))
      )
    )
  )

  const scale = useCartesianScale({ width, height, data, maxValue })

  const xLabels = data.map((d, i) => ({
    x: scale.xCenter(i),
    label: String(d?.label ?? d?.name ?? i),
  }))

  const buildTooltip = (i, x, y) => {
    const d = data[i]
    if (!d || !showTooltip) return
    ctx.showTooltip({
      x,
      y,
      label: d?.label ?? d?.name,
      rows: keys.map((key, s) => ({
        label: seriesConfig[key]?.label ?? key,
        color: resolveColor(key, seriesConfig[key], s),
        value: ctx.formatValue(getValue(d, key, i)),
      })),
    })
  }

  const onLeave = () => ctx.hideTooltip()

  const onBarMove = (e, i) => {
    if (!showTooltip) return
    const el = e.currentTarget
    const svg = el.ownerSVGElement
    const c = svg.getBoundingClientRect()
    const r = el.getBoundingClientRect()
    buildTooltip(i, r.left - c.left + r.width / 2, r.top - c.top + r.height / 2)
  }

  return (
    <div ref={ref} className={cn('w-full text-foreground', className)} {...props}>
      {showLegend && (
        <ChartLegend
          className="mb-2"
          items={keys.map((key, s) => ({
            label: seriesConfig[key]?.label ?? key,
            color: resolveColor(key, seriesConfig[key], s),
          }))}
        />
      )}
      <svg width={width} height={height} className="block overflow-visible">
        <CartesianAxes
          height={height}
          maxValue={maxValue}
          xLabels={xLabels}
          formatValue={ctx.formatValue}
        />
        {keys.length === 0 ? null : (
          <>
            {data.map((d, i) => {
              if (stacked) {
                let offset = 0
                return keys.map((key, s) => {
                  const value = Math.max(0, getValue(d, key, i))
                  const y0 = scale.yScale(offset)
                  const y1 = scale.yScale(offset + value)
                  offset += value
                  return (
                    <rect
                      key={\`\${i}-\${key}\`}
                      className="chart-bar transition-opacity duration-150 hover:opacity-80"
                      x={scale.xCenter(i) - scale.bandWidth / 2 + 2}
                      y={y1}
                      width={Math.max(1, scale.bandWidth - 4)}
                      height={Math.max(0, y0 - y1)}
                      rx={radius}
                      fill={resolveColor(key, seriesConfig[key], s)}
                      style={{ cursor: showTooltip ? 'pointer' : 'default' }}
                      onPointerMove={(e) => onBarMove(e, i)}
                      onPointerLeave={onLeave}
                    />
                  )
                })
              }
              const gap = 4
              const barWidth = Math.max(2, (scale.bandWidth - gap * (keys.length - 1)) / keys.length)
              const groupX = scale.xCenter(i) - scale.bandWidth / 2
              return keys.map((key, s) => {
                const value = Math.max(0, getValue(d, key, i))
                const y = scale.yScale(value)
                return (
                  <rect
                    key={\`\${i}-\${key}\`}
                    className="chart-bar transition-opacity duration-150 hover:opacity-80"
                    x={groupX + s * (barWidth + gap)}
                    y={y}
                    width={barWidth}
                    height={Math.max(0, scale.yScale(0) - y)}
                    rx={radius}
                    fill={resolveColor(key, seriesConfig[key], s)}
                    style={{ cursor: showTooltip ? 'pointer' : 'default' }}
                    onPointerMove={(e) => onBarMove(e, i)}
                    onPointerLeave={onLeave}
                  />
                )
              })
            })}
          </>
        )}
      </svg>
    </div>
  )
}
`

export const LINE_CHART_SOURCE = `import { useId, useState } from 'react'
import { cn } from '../../../lib/utils.js'
import {
  CartesianAxes,
  ChartLegend,
  CHART_MARGIN,
  useCartesianScale,
  useChartSize,
  useChartContext,
  niceMax,
  linePath,
  smoothPath,
} from './chart.jsx'
import { getValue, resolveColor, clamp } from './helpers.js'

export function LineChart(props) {
  return <LineBase {...props} area={false} />
}

export function AreaChart(props) {
  return <LineBase {...props} area />
}

function LineBase({
  data = [],
  config,
  height = 260,
  showTooltip = true,
  showLegend = false,
  showDots = true,
  area = false,
  curve = 'smooth',
  strokeWidth = 2,
  className,
  ...props
}) {
  const { ref, width } = useChartSize()
  const ctx = useChartContext()
  const gradientId = useId()
  const seriesConfig = config ?? ctx.config
  const series = Object.entries(seriesConfig)
  const keys = series.map(([key]) => key)

  const maxValue = niceMax(
    Math.max(
      1,
      ...data.map((d) => Math.max(0, ...keys.map((k) => getValue(d, k, 0))))
    )
  )

  const scale = useCartesianScale({ width, height, data, maxValue })
  const pathFn = curve === 'straight' ? linePath : smoothPath

  const points = keys.map((key) =>
    data.map((d, i) => ({
      x: scale.xPoint(i),
      y: scale.yScale(getValue(d, key, i)),
    }))
  )

  const xLabels = data.map((d, i) => ({
    x: scale.xPoint(i),
    label: String(d?.label ?? d?.name ?? i),
  }))

  const [activeIndex, setActiveIndex] = useState(null)

  const onMove = (e) => {
    if (!showTooltip) return
    const rect = e.currentTarget.getBoundingClientRect()
    const relX = clamp(e.clientX - rect.left, 0, scale.innerW)
    const idx =
      data.length > 1
        ? clamp(Math.round((relX / scale.innerW) * (data.length - 1)), 0, data.length - 1)
        : 0
    setActiveIndex(idx)
    const d = data[idx]
    const py = Math.min(
      ...keys.map((k) => scale.yScale(getValue(d, k, idx)))
    )
    ctx.showTooltip({
      x: scale.xPoint(idx),
      y: py,
      label: d?.label ?? d?.name,
      rows: keys.map((key, s) => ({
        label: seriesConfig[key]?.label ?? key,
        color: resolveColor(key, seriesConfig[key], s),
        value: ctx.formatValue(getValue(d, key, idx)),
      })),
    })
  }

  const onLeave = () => {
    ctx.hideTooltip()
    setActiveIndex(null)
  }

  return (
    <div ref={ref} className={cn('w-full text-foreground', className)} {...props}>
      {showLegend && (
        <ChartLegend
          className="mb-2"
          items={keys.map((key, s) => ({
            label: seriesConfig[key]?.label ?? key,
            color: resolveColor(key, seriesConfig[key], s),
          }))}
        />
      )}
      <svg width={width} height={height} className="block overflow-visible">
        {area && (
          <defs>
            {series.map(([key], s) => (
              <linearGradient
                key={key}
                id={\`\${gradientId}-\${s}\`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor={resolveColor(key, seriesConfig[key], s)}
                  stopOpacity="0.3"
                />
                <stop
                  offset="100%"
                  stopColor={resolveColor(key, seriesConfig[key], s)}
                  stopOpacity="0"
                />
              </linearGradient>
            ))}
          </defs>
        )}
        <CartesianAxes
          height={height}
          maxValue={maxValue}
          xLabels={xLabels}
          formatValue={ctx.formatValue}
        />
        {keys.map((key, s) => {
          const pts = points[s]
          const color = resolveColor(key, seriesConfig[key], s)
          const d = pathFn(pts)
          const baselineY = scale.yScale(0)
          return (
            <g key={key}>
              {area && (
                <path
                  d={\`\${d} L \${pts[pts.length - 1].x} \${baselineY} L \${pts[0].x} \${baselineY} Z\`}
                  fill={\`url(#\${gradientId}-\${s})\`}
                />
              )}
              <path
                className="chart-line"
                pathLength="1"
                d={d}
                fill="none"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              {showDots &&
                pts.map((p, i) => (
                  <circle
                    key={i}
                    cx={p.x}
                    cy={p.y}
                    r={3.5}
                    fill={color}
                    stroke="var(--color-background)"
                    strokeWidth={2}
                  />
                ))}
            </g>
          )
        })}
        {activeIndex != null && showTooltip && (
          <line
            x1={scale.xPoint(activeIndex)}
            x2={scale.xPoint(activeIndex)}
            y1={CHART_MARGIN.top}
            y2={CHART_MARGIN.top + scale.innerH}
            stroke="currentColor"
            className="text-border/80"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        )}
        {activeIndex != null &&
          showTooltip &&
          keys.map((key, s) => {
            const color = resolveColor(key, seriesConfig[key], s)
            const p = points[s][activeIndex]
            return (
              <circle
                key={\`active-\${key}\`}
                cx={p.x}
                cy={p.y}
                r={5}
                fill={color}
                stroke="var(--color-background)"
                strokeWidth={2.5}
                className="pointer-events-none"
              />
            )
          })}
        {showTooltip && (
          <rect
            x={CHART_MARGIN.left}
            y={CHART_MARGIN.top}
            width={scale.innerW}
            height={scale.innerH}
            fill="transparent"
            style={{ cursor: 'crosshair' }}
            onPointerMove={onMove}
            onPointerLeave={onLeave}
          />
        )}
      </svg>
    </div>
  )
}
`

export const PIE_CHART_SOURCE = `import { useMemo, useState } from 'react'
import { cn } from '../../../lib/utils.js'
import {
  ChartLegend,
  useChartSize,
  useChartContext,
  polarToCartesian,
  wedgeSector,
  annularSector,
} from './chart.jsx'
import { getValue, resolveColor } from './helpers.js'

export function PieChart({
  data = [],
  config,
  height = 260,
  showTooltip = true,
  showLegend = true,
  innerRadius = 0,
  padAngle = 2,
  centerLabel,
  centerValue,
  className,
  ...props
}) {
  const { ref, width } = useChartSize()
  const ctx = useChartContext()
  const resolvedConfig = config ?? ctx.config
  const [active, setActive] = useState(null)
  const cx = width / 2
  const cy = height / 2
  const radius = Math.max(0, Math.min(width, height) / 2 - 16)
  const total = data.reduce((sum, d, i) => sum + Math.abs(getValue(d, 'value', i)), 0)

  const items = useMemo(() => {
    let angle = 0
    const list = []
    for (let i = 0; i < data.length; i++) {
      const d = data[i]
      const raw = Math.abs(getValue(d, 'value', i))
      const sweep = total > 0 ? (raw / total) * 360 : 0
      const pad = raw > 0 ? Math.min(padAngle, sweep / 2) : 0
      const start = angle + pad
      const end = angle + sweep - pad
      const finalEnd = i === data.length - 1 && pad > 0 ? 360 : end
      const mid = (start + finalEnd) / 2
      const midR = innerRadius > 0 ? (innerRadius + radius) / 2 : radius * 0.66
      const { x, y } = polarToCartesian(cx, cy, midR, mid)
      const key = d?.key ?? d?.label ?? d?.name ?? i
      const path =
        raw > 0
          ? innerRadius > 0
            ? annularSector(cx, cy, radius, innerRadius, start, finalEnd)
            : wedgeSector(cx, cy, radius, start, finalEnd)
          : ''
      list.push({
        d,
        index: i,
        path,
        x,
        y,
        raw,
        key,
        label: resolvedConfig[key]?.label ?? d?.label ?? d?.name ?? key,
        color: resolveColor(key, resolvedConfig[key]),
      })
      angle += sweep
    }
    return list
  }, [data, resolvedConfig, total, radius, innerRadius, padAngle, cx, cy])

  const onMove = (e, item) => {
    if (!showTooltip) return
    ctx.showTooltip({
      x: item.x,
      y: item.y,
      rows: [
        {
          label: item.label,
          color: item.color,
          value: \`\${ctx.formatValue(item.raw)}\${
            total > 0 ? \` (\${((item.raw / total) * 100).toFixed(1)}%)\` : ''
          }\`,
        },
      ],
    })
  }

  return (
    <div ref={ref} className={cn('w-full text-foreground', className)} {...props}>
      <div className="relative mx-auto" style={{ width, height }}>
        <svg width={width} height={height} className="block">
          {items.map(
            (item) =>
              item.path && (
                <path
                  key={item.key}
                  d={item.path}
                  fill={item.color}
                  stroke="var(--color-background)"
                  strokeWidth="1.5"
                  className="transition-opacity duration-150"
                  style={{
                    cursor: 'pointer',
                    opacity: active != null && active !== item.index ? 0.45 : 1,
                  }}
                  onPointerEnter={() => setActive(item.index)}
                  onPointerMove={(e) => onMove(e, item)}
                  onPointerLeave={() => {
                    setActive(null)
                    ctx.hideTooltip()
                  }}
                />
              )
          )}
        </svg>
        {innerRadius > 0 && (centerValue || centerLabel) && (
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
            {centerValue && (
              <span className="text-3xl font-semibold tabular-nums">{centerValue}</span>
            )}
            {centerLabel && (
              <span className="mt-1 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                {centerLabel}
              </span>
            )}
          </div>
        )}
      </div>
      {showLegend && (
        <ChartLegend
          className="mt-3"
          items={items.map((item) => ({ label: item.label, color: item.color }))}
        />
      )}
    </div>
  )
}
`

export const RADAR_CHART_SOURCE = `import { cn } from '../../../lib/utils.js'
import {
  ChartLegend,
  useChartSize,
  useChartContext,
  polarToCartesian,
  niceMax,
} from './chart.jsx'
import { getValue, resolveColor } from './helpers.js'

export function RadarChart({
  data = [],
  config,
  height = 280,
  showTooltip = true,
  showLegend = true,
  showDots = true,
  levels = 4,
  strokeWidth = 2,
  className,
  ...props
}) {
  const { ref, width } = useChartSize()
  const ctx = useChartContext()
  const seriesConfig = config ?? ctx.config
  const series = Object.entries(seriesConfig)
  const keys = series.map(([key]) => key)

  const cx = width / 2
  const cy = height / 2 - 6
  const radius = Math.max(0, Math.min(width, height) / 2 - 34)
  const n = data.length
  const per = n > 0 ? 360 / n : 360
  const angleFor = (i) => -90 + i * per

  const maxValue = niceMax(
    Math.max(
      1,
      ...data.map((d) => Math.max(0, ...keys.map((k) => getValue(d, k, 0))))
    )
  )

  const vertex = (i, v) => {
    const r = maxValue > 0 ? (v / maxValue) * radius : 0
    return polarToCartesian(cx, cy, r, angleFor(i))
  }

  const ring = (level) =>
    Array.from({ length: n }, (_, i) =>
      polarToCartesian(cx, cy, (radius * level) / levels, angleFor(i))
    )

  const onMove = (e) => {
    if (!showTooltip) return
    const svgRect = e.currentTarget.ownerSVGElement.getBoundingClientRect()
    const mx = e.clientX - svgRect.left
    const my = e.clientY - svgRect.top
    let angle = (Math.atan2(mx - cx, cy - my) * 180) / Math.PI
    if (angle < 0) angle += 360
    const idx = n > 0 ? Math.round(angle / per) % n : 0
    const d = data[idx]
    if (!d) return
    ctx.showTooltip({
      x: mx,
      y: my,
      label: d?.label ?? d?.name,
      rows: keys.map((key, s) => ({
        label: seriesConfig[key]?.label ?? key,
        color: resolveColor(key, seriesConfig[key], s),
        value: ctx.formatValue(getValue(d, key, idx)),
      })),
    })
  }

  return (
    <div ref={ref} className={cn('w-full text-foreground', className)} {...props}>
      <svg width={width} height={height} className="block overflow-visible">
        {n > 0 && (
          <>
            <g>
              {ring(levels).map((p, i) => (
                <line
                  key={\`axis-\${i}\`}
                  x1={cx}
                  y1={cy}
                  x2={p.x}
                  y2={p.y}
                  stroke="currentColor"
                  className="text-border/60"
                  strokeWidth="1"
                />
              ))}
              {Array.from({ length: levels }, (_, l) => (
                <polygon
                  key={\`ring-\${l}\`}
                  points={ring(l + 1)
                    .map((p) => \`\${p.x},\${p.y}\`)
                    .join(' ')}
                  fill="none"
                  stroke="currentColor"
                  className="text-border/60"
                  strokeWidth="1"
                />
              ))}
              {data.map((d, i) => {
                const { x, y } = polarToCartesian(cx, cy, radius + 14, angleFor(i))
                return (
                  <text
                    key={\`label-\${i}\`}
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="10"
                    className="fill-muted-foreground"
                  >
                    {String(d?.label ?? d?.name ?? i)}
                  </text>
                )
              })}
            </g>
            {keys.map((key, s) => {
              const pts = data.map((d, i) => vertex(i, getValue(d, key, i)))
              const color = resolveColor(key, seriesConfig[key], s)
              return (
                <g
                  key={key}
                  onPointerMove={onMove}
                  onPointerLeave={ctx.hideTooltip}
                  style={{ cursor: showTooltip ? 'crosshair' : 'default' }}
                >
                  <polygon
                    points={pts.map((p) => \`\${p.x},\${p.y}\`).join(' ')}
                    fill={color}
                    fillOpacity="0.18"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinejoin="round"
                  />
                  {showDots &&
                    pts.map((p, i) => (
                      <circle
                        key={i}
                        cx={p.x}
                        cy={p.y}
                        r={3}
                        fill={color}
                        stroke="var(--color-background)"
                        strokeWidth="1.5"
                      />
                    ))}
                </g>
              )
            })}
          </>
        )}
      </svg>
      {showLegend && (
        <ChartLegend
          className="mt-2"
          items={keys.map((key, s) => ({
            label: seriesConfig[key]?.label ?? key,
            color: resolveColor(key, seriesConfig[key], s),
          }))}
        />
      )}
    </div>
  )
}
`

export const RADIAL_CHART_SOURCE = `import { cn } from '../../../lib/utils.js'
import {
  useChartSize,
  useChartContext,
  describeArc,
} from './chart.jsx'
import { resolveColor, clamp } from './helpers.js'

export function RadialChart({
  value = 0,
  min = 0,
  max = 100,
  config,
  height = 200,
  showTooltip = true,
  showValue = true,
  showLabel = false,
  label,
  strokeWidth = 10,
  trackColor = 'var(--color-border)',
  className,
  ...props
}) {
  const { ref, width } = useChartSize()
  const ctx = useChartContext()
  const resolvedConfig = config ?? ctx.config
  const progress = clamp((value - min) / (max - min), 0, 1) * 360
  const cx = width / 2
  const cy = height / 2
  const radius = Math.max(0, Math.min(width, height) / 2 - strokeWidth / 2 - 4)
  const entries = Object.entries(resolvedConfig)
  const color = resolveColor(entries[0]?.[0] ?? 'value', entries[0]?.[1], 0)
  const arc = progress > 359.9 ? null : describeArc(cx, cy, radius, 0, progress)

  const onMove = (e) => {
    if (!showTooltip) return
    const rect = e.currentTarget.getBoundingClientRect()
    ctx.showTooltip({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      rows: [
        {
          label: label ?? entries[0]?.[1]?.label ?? 'Value',
          color,
          value: ctx.formatValue(value),
        },
      ],
    })
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={ctx.hideTooltip}
      className={cn('relative w-full text-foreground', className)}
      {...props}
    >
      <svg width={width} height={height} className="block">
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth}
        />
        {arc ? (
          <path
            d={arc}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        ) : (
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
          />
        )}
      </svg>
      {(showValue || showLabel) && (
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
          {showValue && (
            <span className="text-2xl font-semibold tabular-nums">
              {ctx.formatValue(value)}
            </span>
          )}
          {showLabel && (
            <span className="text-xs text-muted-foreground">
              {label ?? entries[0]?.[1]?.label ?? 'Value'}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
`

export const SCATTER_CHART_SOURCE = `import { cn } from '../../../lib/utils.js'
import {
  CartesianAxes,
  ChartLegend,
  CHART_MARGIN,
  useChartContext,
  niceMax,
} from './chart.jsx'
import { useChartSize } from './chart.jsx'
import { getValue, resolveColor } from './helpers.js'

export function ScatterChart({
  data = [],
  config,
  height = 260,
  showTooltip = true,
  showLegend = false,
  pointSize = 7,
  className,
  ...props
}) {
  const { ref, width } = useChartSize()
  const ctx = useChartContext()
  const series = Object.entries(config ?? ctx.config)
  const key = series[0]?.[0] ?? 'point'
  const color = resolveColor(key, series[0]?.[1], 0)
  const label = series[0]?.[1]?.label ?? 'Series'

  const xs = data.map((d, i) => getValue(d, 'x', i))
  const xMin = xs.length ? Math.min(...xs) : 0
  const xMax = xs.length ? Math.max(...xs) : 1
  const yMax = niceMax(Math.max(1, ...data.map((d, i) => getValue(d, 'y', i))))

  const innerW = Math.max(0, width - CHART_MARGIN.left - CHART_MARGIN.right)
  const innerH = Math.max(0, height - CHART_MARGIN.top - CHART_MARGIN.bottom)
  const xScale = (v) => CHART_MARGIN.left + ((v - xMin) / (xMax - xMin || 1)) * innerW
  const yScale = (v) => CHART_MARGIN.top + innerH - (v / yMax) * innerH

  const xLabels = Array.from({ length: 4 }, (_, i) => {
    const t = xMin + (i / 3) * (xMax - xMin)
    return { x: xScale(t), label: Number(t.toFixed(2)) }
  })

  const onMove = (e, d, i) => {
    if (!showTooltip) return
    const el = e.currentTarget
    const svg = el.ownerSVGElement
    const c = svg.getBoundingClientRect()
    const r = el.getBoundingClientRect()
    ctx.showTooltip({
      x: r.left - c.left + r.width / 2,
      y: r.top - c.top + r.height / 2,
      label: d?.label ?? d?.name,
      rows: [
        {
          label,
          color,
          value: \`x: \${ctx.formatValue(getValue(d, 'x', i))}, y: \${ctx.formatValue(
            getValue(d, 'y', i)
          )}\`,
        },
      ],
    })
  }

  return (
    <div ref={ref} className={cn('w-full text-foreground', className)} {...props}>
      {showLegend && (
        <ChartLegend className="mb-2" items={[{ label, color }]} />
      )}
      <svg width={width} height={height} className="block overflow-visible">
        <CartesianAxes
          height={height}
          maxValue={yMax}
          xLabels={xLabels}
          formatValue={ctx.formatValue}
        />
        {data.map((d, i) => (
          <circle
            key={i}
            cx={xScale(getValue(d, 'x', i))}
            cy={yScale(getValue(d, 'y', i))}
            r={pointSize}
            fill={color}
            stroke="var(--color-background)"
            strokeWidth="1.5"
            style={{ cursor: showTooltip ? 'pointer' : 'default' }}
            onPointerMove={(e) => onMove(e, d, i)}
            onPointerLeave={ctx.hideTooltip}
          />
        ))}
      </svg>
    </div>
  )
}
`

export const CHART_HELPERS_SOURCE = `import { DEFAULT_PALETTE } from './chart.jsx'

export function getValue(datum, key, index) {
  if (datum == null) return 0
  if (typeof datum !== 'object') return Number(datum) || 0
  const v = datum[key]
  return typeof v === 'function' ? v(datum, index) : Number(v) || 0
}

export function resolveColor(key, entry) {
  if (entry?.color) {
    if (typeof entry.color === 'number') {
      return DEFAULT_PALETTE[Math.abs(entry.color) % DEFAULT_PALETTE.length]
    }
    return entry.color
  }
  return \`var(--color-\${key})\`
}

export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}
`
