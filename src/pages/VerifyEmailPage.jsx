import { CodeBlock } from '../components/ui/CodeBlock.jsx'
import { HighlightedCode } from '../components/ui/HighlightedCode.jsx'
import { CopyButton } from '../components/ui/CopyButton.jsx'

const INSTALL_CMD = 'npx snitchui@latest add-template verify-email'

const verifyEmailCode = `import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function VerifyEmailForm() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
          </div>
          <CardTitle className="text-2xl">Verify your email</CardTitle>
          <CardDescription>
            We sent a verification link to your email address. Click the link to activate your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button className="w-full">Resend Verification Email</Button>
        </CardContent>
        <p className="px-6 pb-6 text-center text-sm text-muted-foreground">
          Already verified?{" "}
          <a href="/signin" className="underline">Sign In</a>
        </p>
      </Card>
    </div>
  )
}`

export function VerifyEmailPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Verify Email</h1>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          Authentication template with a centered card. Includes a mail icon, a resend
          verification button, and a sign-in link.
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
            <CopyButton text={INSTALL_CMD} label="install-verify-email" />
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
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  </div>
                </div>
                <h2 className="text-center text-xl font-semibold mb-1">Verify your email</h2>
                <p className="text-center text-sm text-muted-foreground mb-4">
                  We sent a verification link to your email address. Click the link to activate your account.
                </p>
                <button
                  type="button"
                  className="w-full rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Resend Verification Email
                </button>
                <p className="mt-4 text-center text-sm text-muted-foreground">
                  Already verified?{" "}
                  <a href="/docs/signin" className="underline">Sign In</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Code */}
        <div>
          <CodeBlock code={verifyEmailCode} filename="VerifyEmailForm.jsx" />
        </div>
      </div>
    </div>
  )
}
