import { Alert, AlertTitle, AlertDescription } from './alert.jsx'
import { Info, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'

export function AlertDemo() {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Variants</h3>
        <div className="space-y-4">
          <Alert variant="default">
            <Info className="size-4" />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>This is a default alert with an info icon.</AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <XCircle className="size-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Something went wrong. Please try again.</AlertDescription>
          </Alert>

          <Alert variant="success">
            <CheckCircle className="size-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>Your changes have been saved successfully.</AlertDescription>
          </Alert>

          <Alert variant="warning">
            <AlertTriangle className="size-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>Your session is about to expire.</AlertDescription>
          </Alert>
        </div>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Without Icon</h3>
        <Alert>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>You can use alerts without icons too.</AlertDescription>
        </Alert>
      </section>
    </div>
  )
}
