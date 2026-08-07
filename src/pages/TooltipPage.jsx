import { TooltipDemo } from '../components/ui/tooltip/tooltip.demo.jsx'
import { CodeBlock } from '../components/ui/CodeBlock.jsx'
import { HighlightedCode } from '../components/ui/HighlightedCode.jsx'
import { CopyButton } from '../components/ui/CopyButton.jsx'
import { components, resolveDeps } from '../constants/components.js'
import { SourceSection } from '../components/ui/SourceSection.jsx'

export function TooltipPage() {
  const meta = components.find((c) => c.id === 'tooltip')
  const deps = resolveDeps(meta.deps)

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Tooltip</h1>
        <p className="mt-2 text-muted-foreground">{meta.description}</p>
      </div>
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Preview</h2>
        <div className="rounded-lg border border-border/50 bg-card/70 backdrop-blur-xl p-8">
          <TooltipDemo />
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
            <CopyButton text={meta.installCmd} label="install-tooltip" />
          </div>
          <HighlightedCode code={meta.installCmd} language="bash" />
        </div>
      </section>
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip'

export function Example() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover</TooltipTrigger>
        <TooltipContent>
          <p>Tooltip content</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`}
        />
      </section>
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Props</h2>
        <div className="rounded-lg border border-border/50 bg-card/70 backdrop-blur-xl overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
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
      </section>      {/* Source */}
      <SourceSection deps={deps} />
    </div>
  )
}
