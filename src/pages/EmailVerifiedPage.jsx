import { CodeBlock } from '../components/ui/CodeBlock.jsx'
import { HighlightedCode } from '../components/ui/HighlightedCode.jsx'
import { CopyButton } from '../components/ui/CopyButton.jsx'

const INSTALL_CMD = 'npx snitchui@latest add-template email-verified'

const emailVerifiedCode = `import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function EmailVerifiedForm() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
          </div>
          <CardTitle className="text-2xl">Email verified</CardTitle>
          <CardDescription>
            Your email has been verified successfully. You can now continue to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button className="w-full">Continue to Dashboard</Button>
          <Button variant="outline" className="w-full">Go to Sign In</Button>
        </CardContent>
      </Card>
    </div>
  )
}`

export function EmailVerifiedPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Email Verified</h1>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          Authentication template with a centered success card. Includes a checkmark icon,
          a continue-to-dashboard button, and a go-to-signin button.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Installation</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Scaffold the template with the CLI. It creates the page file
          and sets up the route automatically.
        </p>
        <div className="rounded-lg border border-border/50 bg-card/70 backdrop-blur-xl overflow-hidden">
          <div className="flex items-center justify-between bg-muted px-4 py-2.5 border-b border-border/50">
            <span className="text-sm font-medium">CLI</span>
            <CopyButton text={INSTALL_CMD} label="install-email-verified" />
          </div>
          <HighlightedCode code={INSTALL_CMD} language="bash" />
        </div>
      </section>

      <div className="grid grid-cols-1 gap-8">
        {/* Preview */}
        <div className="rounded-xl border border-border/50 bg-card/70 p-6 backdrop-blur-xl">
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="w-full max-w-sm">
              <div className="rounded-lg border border-border/50 bg-card/70 p-6 backdrop-blur-xl">
                <div className="mb-3 flex justify-center">
                  <div className="flex size-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
                  </div>
                </div>
                <h2 className="text-center text-xl font-semibold mb-1">Email verified</h2>
                <p className="text-center text-sm text-muted-foreground mb-4">
                  Your email has been verified successfully. You can now continue to your account.
                </p>
                <div className="space-y-2">
                  <button
                    type="button"
                    className="w-full rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                  >
                    Continue to Dashboard
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-md border border-border/50 px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    Go to Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Code */}
        <div>
          <CodeBlock code={emailVerifiedCode} filename="EmailVerifiedForm.jsx" />
        </div>
      </div>
    </div>
  )
}
