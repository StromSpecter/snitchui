import { CodeBlock } from '../components/ui/CodeBlock.jsx'
import { CopyButton } from '../components/ui/CopyButton.jsx'

const INSTALL_CMD = 'npx snitchui@latest add-template otp-verification'

const otpVerificationCode = `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function OtpVerificationForm() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Enter verification code</CardTitle>
          <CardDescription>
            We've sent a 6-digit code to your email. Enter it below to continue.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-4">
              <div className="flex justify-center gap-2">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <Input
                    key={i}
                    maxLength={1}
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    className="h-12 w-12 text-center text-lg"
                    aria-label={\`Digit \${i + 1}\`}
                  />
                ))}
              </div>
              <Button type="submit" className="w-full">Verify Code</Button>
            </div>
          </form>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Didn't receive the code?{" "}
            <a href="#" className="underline">Resend Code</a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}`

export function OtpVerificationPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">OTP Verification</h1>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          Authentication template with a centered card form. Includes six single-digit
          inputs, a verify button, and a resend-code link.
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
            <CopyButton text={INSTALL_CMD} label="install-otp-verification" />
          </div>
          <pre className="p-4 text-sm overflow-x-auto">
            <code>{INSTALL_CMD}</code>
          </pre>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-8">
        {/* Preview */}
        <div className="rounded-xl border border-border/50 bg-card/70 p-6 backdrop-blur-xl">
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="w-full max-w-sm">
              <div className="rounded-lg border border-border/50 bg-card/70 p-6 backdrop-blur-xl">
                <h2 className="text-center text-xl font-semibold mb-1">Enter verification code</h2>
                <p className="text-center text-sm text-muted-foreground mb-4">
                  We've sent a 6-digit code to your email. Enter it below to continue.
                </p>
                <form className="space-y-4">
                  <div className="flex justify-center gap-2">
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <input
                        key={i}
                        maxLength={1}
                        inputMode="numeric"
                        aria-label={`Digit ${i + 1}`}
                        className="h-12 w-12 rounded-md border border-border/50 bg-background text-center text-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    ))}
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                  >
                    Verify Code
                  </button>
                </form>
                <p className="mt-4 text-center text-sm text-muted-foreground">
                  Didn't receive the code?{" "}
                  <a href="#" className="underline">Resend Code</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Code */}
        <div>
          <CodeBlock code={otpVerificationCode} filename="OtpVerificationForm.jsx" />
        </div>
      </div>
    </div>
  )
}
