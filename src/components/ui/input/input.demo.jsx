import { Input } from './input.jsx'
import { Search, Mail, Eye, User } from 'lucide-react'

export function InputDemo() {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Types</h3>
        <div className="space-y-3">
          <Input placeholder="Text input" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="search" placeholder="Search..." />
          <Input type="url" placeholder="https://example.com" />
          <Input type="tel" placeholder="+1 (555) 000-0000" />
          <Input type="number" placeholder="42" />
        </div>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Sizes</h3>
        <div className="flex flex-wrap items-start gap-3">
          <div className="w-48">
            <Input size="sm" placeholder="Small" />
          </div>
          <div className="w-48">
            <Input size="md" placeholder="Medium (default)" />
          </div>
          <div className="w-48">
            <Input size="lg" placeholder="Large" />
          </div>
        </div>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">With Icons</h3>
        <div className="space-y-3">
          <Input startIcon={<Search />} placeholder="Search..." />
          <Input startIcon={<Mail />} type="email" placeholder="Email" />
          <Input startIcon={<User />} placeholder="Username" />
          <Input endIcon={<Eye />} type="password" placeholder="Password" />
        </div>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">States</h3>
        <div className="space-y-3">
          <Input placeholder="Default" />
          <Input placeholder="Disabled" disabled />
          <Input placeholder="Read only" readOnly value="Read-only value" />
          <Input placeholder="Error" error="This field is required." />
          <Input placeholder="File upload" type="file" />
        </div>
      </section>
    </div>
  )
}
