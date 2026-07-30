import { CodeBlock } from '../components/ui/CodeBlock.jsx'

const STEPS = [
  {
    title: 'Create a new React project',
    desc: 'Start with Vite + React. This is the recommended setup.',
    code: 'npm create vite@latest my-app -- --template react\ncd my-app\nnpm install',
  },
  {
    title: 'Install Tailwind CSS v4',
    desc: 'Install Tailwind CSS and the Vite plugin.',
    code: 'npm install tailwindcss @tailwindcss/vite',
  },
  {
    title: 'Configure Tailwind',
    desc: 'Add the Tailwind Vite plugin to your Vite config.',
    filename: 'vite.config.js',
    code: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react()],
})`,
  },
  {
    title: 'Add design tokens',
    desc: 'Replace your src/index.css with Tailwind import and design tokens.',
    filename: 'src/index.css',
    code: `@import "tailwindcss";

@theme {
  --color-primary: #18181b;
  --color-primary-foreground: #fafafa;
  --color-secondary: #f4f4f5;
  --color-secondary-foreground: #18181b;
  --color-accent: #f4f4f5;
  --color-accent-foreground: #18181b;
  --color-destructive: #ef4444;
  --color-destructive-foreground: #fafafa;
  --color-muted: #f4f4f5;
  --color-muted-foreground: #71717a;
  --color-border: #e4e4e7;
  --color-input: #e4e4e7;
  --color-ring: #18181b;
  --color-background: #ffffff;
  --color-foreground: #09090b;
  --color-card: #ffffff;
  --color-card-foreground: #09090b;

  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.625rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;

  --font-sans: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
}`,
  },
  {
    title: 'Install SnitchUI',
    desc: 'Install the core package as a dependency.',
    code: 'npm install snitchui',
  },
  {
    title: 'Scaffold components',
    desc: 'Run the CLI to automatically install dependencies and create component files. Available: button, label, input, select, checkbox, combobox, datepicker, radiobutton, switch, textarea, timepicker, card, badge, dialog, dropdown, tabs, accordion, avatar, alert.',
    code: 'npx snitchui@latest add button input select card',
  },
  {
    title: 'Use the component',
    desc: 'Import and use the Button component in your app.',
    filename: 'src/App.jsx',
    code: `import { Button } from './components/ui/button'

function App() {
  return (
    <div className="p-8 flex gap-4">
      <Button>Click me</Button>
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Delete</Button>
    </div>
  )
}

export default App`,
  },
]

const REQUIRED = [
  { name: 'React', version: '^19', desc: 'UI library' },
  { name: 'Vite', version: '^8', desc: 'Build tool' },
  { name: 'Tailwind CSS', version: '^4', desc: 'Utility-first CSS framework' },
  { name: 'Node.js', version: '^20', desc: 'Runtime (for CLI)' },
]

export function Installation() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Installation</h1>
        <p className="mt-2 text-muted-foreground">
          How to install and use snitchui components in your project.
        </p>
      </div>

      {/* Tech Stack */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">
          Required Tech Stack
        </h2>
        <div className="rounded-lg border border-border/50 bg-card/70 backdrop-blur-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-muted/50 backdrop-blur-sm">
                <th className="px-4 py-3 text-left font-medium">Package</th>
                <th className="px-4 py-3 text-left font-medium">Version</th>
                <th className="px-4 py-3 text-left font-medium">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {REQUIRED.map((pkg, i) => (
                  <tr
                    key={pkg.name}
                    className={i < REQUIRED.length - 1 ? 'border-b border-border/50' : ''}
                >
                  <td className="px-4 py-3 font-mono text-xs">{pkg.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{pkg.version}</td>
                  <td className="px-4 py-3 text-muted-foreground">{pkg.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Steps */}
      <section>
        <h2 className="mb-6 text-xl font-semibold tracking-tight">
          Step-by-step Guide
        </h2>
        <div className="space-y-8">
          {STEPS.map((step, i) => (
            <div key={i}>
              <div className="flex items-start gap-4">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {step.desc}
                  </p>
                  {step.code && (
                    <div className="mt-3">
                      <CodeBlock code={step.code} filename={step.filename} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
