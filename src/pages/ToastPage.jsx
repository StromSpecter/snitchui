import { Toaster } from '../components/ui/toast/toaster.jsx'
import { ToastDemo } from '../components/ui/toast/toast.demo.jsx'
import { CodeBlock } from '../components/ui/CodeBlock.jsx'
import { CopyButton } from '../components/ui/CopyButton.jsx'
import { components, resolveDeps } from '../constants/components.js'

export function ToastPage() {
  const meta = components.find((c) => c.id === 'toast')
  const deps = resolveDeps(meta.deps)

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <Toaster />
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Toast</h1>
        <p className="mt-2 text-muted-foreground">{meta.description}</p>
      </div>
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Preview</h2>
        <div className="rounded-lg border border-border/50 bg-card/70 backdrop-blur-xl p-8">
          <ToastDemo />
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
            <CopyButton text={meta.installCmd} label="install-toast" />
          </div>
          <pre className="p-4 text-sm overflow-x-auto">
            <code>{meta.installCmd}</code>
          </pre>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Toaster } from '@/components/ui/toast'
import { toast } from 'sonner'

// Add Toaster to your layout
function App() {
  return (
    <>
      <Toaster />
      <YourApp />
    </>
  )
}

// Trigger a toast anywhere
toast.success('Saved!')
toast.error('Failed!')
toast('Event has been created', {
  description: 'Monday, January 3rd at 6:00pm',
  action: {
    label: 'Undo',
    onClick: () => console.log('Undo'),
  },
})`}
        />
      </section>
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Props</h2>
        <div className="rounded-lg border border-border/50 bg-card/70 backdrop-blur-xl overflow-hidden">
          <table className="w-full text-sm">
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
      </section>
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Source</h2>
        {deps.map((dep) => (
          <div key={dep.file} className="mb-4">
            <CodeBlock code={dep.source} filename={dep.file} />
          </div>
        ))}
      </section>
    </div>
  )
}
