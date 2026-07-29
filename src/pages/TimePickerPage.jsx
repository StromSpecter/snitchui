import { TimePickerDemo } from '../components/ui/timepicker/timepicker.demo.jsx'
import { CodeBlock } from '../components/ui/CodeBlock.jsx'
import { CopyButton } from '../components/ui/CopyButton.jsx'
import { components, resolveDeps } from '../constants/components.js'

export function TimePickerPage() {
  const meta = components.find((c) => c.id === 'timepicker')
  const deps = resolveDeps(meta.deps)

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">TimePicker</h1>
        <p className="mt-2 text-muted-foreground">{meta.description}</p>
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Preview</h2>
        <div className="rounded-lg border border-border p-8">
          <TimePickerDemo />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">
          Installation
        </h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Run the CLI from your project root. It installs dependencies and creates the component file automatically.
        </p>
        <div className="rounded-lg border border-border overflow-hidden">
          <div className="flex items-center justify-between bg-muted px-4 py-2.5 border-b border-border">
            <span className="text-sm font-medium">CLI</span>
            <CopyButton text={meta.installCmd} label="install-btn" />
          </div>
          <pre className="p-4 text-sm overflow-x-auto">
            <code>{meta.installCmd}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { TimePicker } from '@/components/ui/timepicker'
import { useState } from 'react'

export function Example() {
  const [time, setTime] = useState('')

  return (
    <div className="space-y-4">
      <TimePicker
        value={time}
        onChange={setTime}
        placeholder="Select time"
      />
      <TimePicker
        value="14:30:00"
        placeholder="With default value"
      />
      <TimePicker
        placeholder="Disabled"
        disabled
      />
    </div>
  )
}`}
        />
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Props</h2>
        <div className="rounded-lg border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted">
                <th className="px-4 py-3 text-left font-medium">Prop</th>
                <th className="px-4 py-3 text-left font-medium">Type</th>
                <th className="px-4 py-3 text-left font-medium">Default</th>
                <th className="px-4 py-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              {meta.props.map((p, i) => (
                <tr key={p.prop} className={i < meta.props.length - 1 ? 'border-b border-border' : ''}>
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
