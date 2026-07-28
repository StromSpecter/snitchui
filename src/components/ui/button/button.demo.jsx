import { Button } from './button.jsx'
import { Loader2, Mail, Plus } from 'lucide-react'

export function ButtonDemo() {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Variants</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Sizes</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="icon" aria-label="Add item">
            <Plus />
          </Button>
        </div>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">States</h3>
        <div className="flex flex-wrap gap-3">
          <Button disabled>Disabled</Button>
          <Button disabled variant="outline">
            Disabled Outline
          </Button>
          <Button disabled variant="ghost">
            Disabled Ghost
          </Button>
          <Button disabled variant="destructive">
            Disabled Destructive
          </Button>
        </div>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Loading</h3>
        <div className="flex flex-wrap gap-3">
          <Button disabled>
            <Loader2 className="animate-spin" />
            Loading
          </Button>
          <Button disabled variant="outline">
            <Loader2 className="animate-spin" />
            Please wait
          </Button>
        </div>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">With Icon</h3>
        <div className="flex flex-wrap gap-3">
          <Button>
            <Mail />
            Login with Email
          </Button>
          <Button variant="outline" size="sm">
            <Plus />
            Add
          </Button>
        </div>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">As Child</h3>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a href="#">Link as Button</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
