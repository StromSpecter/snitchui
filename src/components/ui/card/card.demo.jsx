import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card.jsx'
import { Button } from '../button/button.jsx'

export function CardDemo() {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Default Card</h3>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">This is the card content area. You can put any content here.</p>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="ghost" size="sm">Cancel</Button>
            <Button size="sm">Save</Button>
          </CardFooter>
        </Card>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Card Variants</h3>
        <div className="flex flex-wrap gap-4">
          <Card className="w-64">
            <CardHeader>
              <CardTitle>Default</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Standard card with border and shadow.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
