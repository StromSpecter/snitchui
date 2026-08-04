import { CodeBlock } from '../components/ui/CodeBlock.jsx'

const TOKENS = [
  {
    name: '--color-primary',
    desc: 'Primary action color (buttons, links, accents).',
    light: '#18181b',
    dark: '#fafafa',
  },
  {
    name: '--color-background',
    desc: 'Page-level background color.',
    light: '#ffffff',
    dark: '#09090b',
  },
  {
    name: '--color-card',
    desc: 'Card surface background.',
    light: '#ffffff',
    dark: '#09090b',
  },
  {
    name: '--color-border',
    desc: 'Border color for inputs, dividers, and containers.',
    light: '#e4e4e7',
    dark: '#27272a',
  },
  {
    name: '--radius-lg',
    desc: 'Border radius for cards and containers.',
    light: '0.625rem',
    dark: '0.625rem',
  },
  {
    name: '--font-sans',
    desc: 'Primary font stack.',
    light: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    dark: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
]

export function ThemingPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Theming</h1>
        <p className="mt-2 text-muted-foreground">
          Customize SnitchUI to match your design system using CSS design tokens.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Design Tokens</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Override any token in your <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/index.css</code> file inside the <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">@theme</code> block:
        </p>
        <CodeBlock code={`@import "tailwindcss";

@theme {
  --color-primary: #0f172a;
  --color-background: #f8fafc;
  --color-card: #ffffff;
  --color-border: #e2e8f0;
  --radius-lg: 0.75rem;
  --font-sans: Inter, system-ui, sans-serif;
}`} filename="src/index.css" />
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Color Tokens</h2>
        <p className="text-sm text-muted-foreground mb-4">
          The default color palette is designed for a clean, minimal aesthetic. Override colors to create your own brand:
        </p>
        <div className="space-y-4">
          {TOKENS.filter((t) => t.name.startsWith('--color')).map((t) => (
            <div key={t.name} className="rounded-xl border border-border/50 bg-card/70 backdrop-blur-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <code className="font-mono text-sm text-primary">{t.name}</code>
                <span className="text-xs text-muted-foreground">{t.desc}</span>
              </div>
              <div className="flex gap-4 mt-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground w-16">Light</span>
                  <span className="inline-block size-5 rounded border border-border" style={{ backgroundColor: t.light }} />
                  <code className="text-xs font-mono text-muted-foreground">{t.light}</code>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground w-16">Dark</span>
                  <span className="inline-block size-5 rounded border border-border" style={{ backgroundColor: t.dark }} />
                  <code className="text-xs font-mono text-muted-foreground">{t.dark}</code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Radius Tokens</h2>
        <p className="text-sm text-muted-foreground mb-4">Control corner rounding across all components:</p>
        <div className="rounded-xl border border-border/50 bg-card/70 backdrop-blur-xl p-4 overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-border/50">
                <th className="px-3 py-2 text-left font-medium text-muted-foreground">Token</th>
                <th className="px-3 py-2 text-left font-medium text-muted-foreground">Default</th>
                <th className="px-3 py-2 text-left font-medium text-muted-foreground">Used By</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-mono text-xs">--radius-sm</td>
                <td className="px-3 py-2 text-muted-foreground">0.375rem</td>
                <td className="px-3 py-2 text-muted-foreground">Small elements</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-mono text-xs">--radius-md</td>
                <td className="px-3 py-2 text-muted-foreground">0.5rem</td>
                <td className="px-3 py-2 text-muted-foreground">Inputs, buttons</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-3 py-2 font-mono text-xs">--radius-lg</td>
                <td className="px-3 py-2 text-muted-foreground">0.625rem</td>
                <td className="px-3 py-2 text-muted-foreground">Cards, panels</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-mono text-xs">--radius-xl</td>
                <td className="px-3 py-2 text-muted-foreground">0.75rem</td>
                <td className="px-3 py-2 text-muted-foreground">Modals, dialogs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Dark Mode</h2>
        <p className="text-sm text-muted-foreground mb-4">
          SnitchUI supports light and dark modes automatically. Toggle the <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">.dark</code> class on the HTML element:
        </p>
        <CodeBlock code={`document.documentElement.classList.toggle('dark')`} filename="JS" />
      </section>
    </div>
  )
}