import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './accordion.jsx'

export function AccordionDemo() {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Single Mode</h3>
        <Accordion type="single" defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is SnitchUI?</AccordionTrigger>
            <AccordionContent>
              SnitchUI is a modern UI component library built with React and Tailwind CSS, inspired by shadcn/ui.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How do I install it?</AccordionTrigger>
            <AccordionContent>
              You can install components individually using the CLI: <code className="text-xs bg-muted px-1.5 py-0.5 rounded">npx snitchui@latest add component-name</code>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes, all components follow WAI-ARIA guidelines and support keyboard navigation.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Multiple Mode</h3>
        <Accordion type="multiple" defaultValue={['item-1']}>
          <AccordionItem value="item-1">
            <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
            <AccordionContent>
              Yes! Set <code className="text-xs bg-muted px-1.5 py-0.5 rounded">type="multiple"</code> to allow multiple items open simultaneously.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Custom styling?</AccordionTrigger>
            <AccordionContent>
              Use the <code className="text-xs bg-muted px-1.5 py-0.5 rounded">className</code> prop on any part of the accordion.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  )
}
