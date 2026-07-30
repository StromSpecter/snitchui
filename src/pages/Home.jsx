import { Link } from 'react-router-dom'
import { components } from '../constants/components.js'
import { ArrowRight, Copy, Palette, Zap, Package, Shield, Layers, Terminal } from 'lucide-react'

const stats = [
  { label: 'Components', value: components.filter((c) => !c.comingSoon).length, suffix: '+ Ready' },
  { label: 'Built On', value: 'Radix UI', suffix: 'Primitives' },
  { label: 'License', value: 'MIT', suffix: 'Free' },
]

const benefits = [
  {
    icon: Copy,
    title: 'Copy-Paste, Not npm Install',
    desc: 'SnitchUI gives you full source ownership. Copy component code into your project and customize freely — no bloated dependencies, no version lock-in.',
  },
  {
    icon: Palette,
    title: 'Tailwind CSS v4 Native',
    desc: 'Components styled entirely with Tailwind CSS v4. Every color, spacing, and radius maps to your existing design system — zero framework lock-in.',
  },
  {
    icon: Layers,
    title: 'Radix UI Under the Hood',
    desc: 'Each component is built on unstyled, accessible Radix UI primitives. Keyboard navigation, ARIA attributes, and screen-reader support work out of the box.',
  },
  {
    icon: Zap,
    title: 'Tree-Shakable by Default',
    desc: 'Import only what you use. No global CSS, no runtime overhead. Your production bundle stays lean because every component is self-contained.',
  },
  {
    icon: Shield,
    title: 'Dark Mode Included',
    desc: 'Every component ships with light and dark variants. Just toggle your HTML class — SnitchUI adapts automatically with zero extra configuration.',
  },
  {
    icon: Package,
    title: 'React 19 Ready',
    desc: 'Built with React 19 from the ground up. Leverages the latest APIs for performance, concurrency, and future-proof architecture.',
  },
]

const steps = [
  { step: '01', title: 'Setup Project', desc: 'Create a React + Vite project, add Tailwind CSS v4, then install SnitchUI via npm.' },
  { step: '02', title: 'Add Components', desc: 'Run npx snitchui@latest add &lt;component&gt; — the CLI scaffolds files and installs dependencies automatically.' },
  { step: '03', title: 'Customize Freely', desc: 'Every component is your code. Edit, style, and extend without fighting a library.' },
]

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-b from-background/50 to-background/30 backdrop-blur-xl px-6 py-16 sm:py-24">
      <div className="pointer-events-none absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/40 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md mb-8">
          <span className="size-1.5 rounded-full bg-primary" />
          Open source UI library for React &amp; Tailwind CSS
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
          Build Beautiful UI{' '}
          <span className="text-primary/80">Without the Bloat</span>
        </h1>

        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          SnitchUI is a copy-paste component library built on{' '}
          <strong className="text-foreground font-semibold">Radix UI</strong> and{' '}
          <strong className="text-foreground font-semibold">Tailwind CSS v4</strong>.
          You own every line of code — install nothing, commit everything,
          customize anything. No npm packages, no heavy frameworks, no restrictions.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/docs/getting-started"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
            >
              Get Started
              <ArrowRight className="size-4" />
            </Link>
          <Link
            to="/docs/button"
            className="inline-flex h-11 items-center gap-2 rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Browse Components
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-3 divide-x divide-border/50 rounded-xl border border-border/50 bg-background/30 backdrop-blur-xl">
          {stats.map((s) => (
            <div key={s.label} className="py-4 text-center">
              <div className="text-lg font-bold tracking-tight">{s.value}</div>
              <div className="text-xs text-muted-foreground">
                {s.label} <span className="hidden sm:inline">{s.suffix}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhySnitchUI() {
  return (
    <section className="mt-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Why SnitchUI?
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Most UI libraries force you into their ecosystem — install a package,
          ship hundreds of kB of dependencies, fight with customization.
          SnitchUI flips the model: <strong className="text-foreground font-semibold">you own the code</strong>.
          Every component is a copy-paste away, fully editable, and built on
          battle-tested primitives.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b) => {
          const Icon = b.icon
          return (
            <div
              key={b.title}
              className="group rounded-xl border border-border/50 bg-gradient-to-br from-card/50 to-card/30 p-5 hover:border-ring/50 hover:shadow-lg backdrop-blur-xl transition-all"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary backdrop-blur-sm">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-4 font-semibold">{b.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                {b.desc}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="mt-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
        <p className="mt-3 text-muted-foreground">
          Three steps to production-ready UI components.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {steps.map((s) => (
          <div key={s.step} className="relative text-center rounded-xl border border-border/50 bg-gradient-to-b from-card/50 to-card/30 p-6 backdrop-blur-xl">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-primary text-lg font-bold backdrop-blur-sm">
              {s.step}
            </div>
            <h3 className="mt-4 font-semibold">{s.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 space-y-3">
        <div className="rounded-xl border border-border/50 bg-gradient-to-r from-muted/30 to-muted/10 backdrop-blur-xl px-6 py-4">
          <div className="flex items-center gap-3 text-sm">
            <Terminal className="size-4 text-muted-foreground shrink-0" />
            <code className="text-foreground font-mono text-xs sm:text-sm">
              npm install snitchui
            </code>
            <span className="hidden sm:inline text-muted-foreground ml-auto">
              Install the library
            </span>
          </div>
        </div>
        <div className="rounded-xl border border-border/50 bg-gradient-to-r from-muted/30 to-muted/10 backdrop-blur-xl px-6 py-4">
          <div className="flex items-center gap-3 text-sm">
            <Terminal className="size-4 text-muted-foreground shrink-0" />
            <code className="text-foreground font-mono text-xs sm:text-sm">
              npx snitchui@latest add button input select
            </code>
            <span className="hidden sm:inline text-muted-foreground ml-auto">
              Add components via CLI
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function ComponentGrid() {
  const available = components.filter((c) => !c.comingSoon).sort((a, b) => a.name.localeCompare(b.name))
  const planned = components.filter((c) => c.comingSoon).sort((a, b) => a.name.localeCompare(b.name))

  return (
    <section className="mt-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Available Components
        </h2>
        <p className="mt-3 text-muted-foreground">
          Production-ready components for every use case. More on the way.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {available.map((c) => (
          <Link
            key={c.id}
            to={c.path}
            className="group rounded-xl border border-border/50 bg-gradient-to-br from-card/50 to-card/30 p-5 hover:border-ring/50 hover:shadow-lg backdrop-blur-xl transition-all"
          >
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-md bg-gradient-to-br from-primary/20 to-accent/20 text-primary text-xs font-bold backdrop-blur-sm">
                {c.name.charAt(0)}
              </span>
              <h3 className="font-semibold group-hover:text-primary transition-colors">
                {c.name}
              </h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {c.description}
            </p>
          </Link>
        ))}
      </div>

      {planned.length > 0 && (
        <div className="mt-10">
          <h3 className="text-lg font-semibold tracking-tight mb-4">
            Coming Soon
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {planned.map((c) => (
              <div
                key={c.id}
                className="rounded-xl border border-border/50 bg-gradient-to-br from-card/30 to-card/10 backdrop-blur-xl p-5 opacity-60"
              >
                <div className="flex items-center gap-2">
                  <span className="flex size-8 items-center justify-center rounded-md bg-muted/50 text-muted-foreground text-xs font-bold backdrop-blur-sm">
                    {c.name.charAt(0)}
                  </span>
                  <h3 className="font-semibold">{c.name}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {c.description}
                </p>
                <span className="mt-3 inline-block text-xs font-medium text-muted-foreground border border-border/50 rounded-full px-3 py-0.5 backdrop-blur-sm">
                  Soon
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <Hero />
      <WhySnitchUI />
      <HowItWorks />
      <ComponentGrid />

      <section className="mt-20 mb-8">
        <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-primary/10 via-card/50 to-accent/10 backdrop-blur-xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to build?
          </h2>
          <p className="mt-2 text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Stop fighting with heavy dependencies. Start building with
            components you actually own.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/docs/getting-started"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
            >
              Get Started Now
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/docs/button"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Browse Components
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
