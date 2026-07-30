import { CodeBlock } from '../components/ui/CodeBlock.jsx'

export function QuickStartPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Quick Start</h1>
        <p className="mt-2 text-muted-foreground">
          Get up and running with SnitchUI in under 5 minutes.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">1. Start</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          SnitchUI works with React 19 + Tailwind CSS v4 + Vite. If you don't have a project yet, create one first:
        </p>
        <div className="mt-4">
          <CodeBlock code={`npm create vite@latest my-app -- --template react\ncd my-app\nnpm install`} filename="Terminal" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">2. Add Tailwind CSS v4</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Install Tailwind CSS and the Vite plugin, then configure it:
        </p>
        <div className="mt-4 space-y-4">
          <CodeBlock code={`npm install tailwindcss @tailwindcss/vite`} filename="Terminal" />
          <CodeBlock code={`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react()],
})`} filename="vite.config.js" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">3. Add a Component</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Run the CLI to scaffold any component. Try the Button component:
        </p>
        <div className="mt-4">
          <CodeBlock code={`npx snitchui@latest add button`} filename="Terminal" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">4. Use It</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Import and use the component in your app:
        </p>
        <div className="mt-4">
          <CodeBlock code={`import { Button } from '@/components/ui/button'

function App() {
  return (
    &lt;div className="p-8"&gt;
      &lt;Button&gt;Click Me&lt;/Button&gt;
    &lt;/div&gt;
  )
}`} filename="App.jsx" />
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-border/50 bg-card/70 backdrop-blur-xl p-8">
        <h2 className="text-xl font-semibold tracking-tight mb-2">What's Next?</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Explore the full component library and customize your theme.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/docs/components" className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors">
            Browse Components
          </a>
          <a href="/docs/theming" className="inline-flex h-11 items-center gap-2 rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors">
            Customize Theme
          </a>
        </div>
      </section>
    </div>
  )
}