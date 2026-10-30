
import Link from "next/link";

export default async function SignInPage({ searchParams }) {
  const params = await searchParams;
  const next = params?.next || "/orders";

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-header">
          <p className="auth-eyebrow">Welcome back</p>

          <h1>Sign In</h1>

          <p>
            Sign in to continue to your Addis Eats account.
          </p>
        </div>

        <form method="POST" action="/api/signin" className="auth-form">
          <input
            type="hidden"
            name="next"
            value={next}
          />

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="auth-button">
            Sign In
          </button>
        </form>

        <div className="demo-account">
          <p className="demo-title">Demo account</p>

          <p>
            <strong>user@example.com</strong>
          </p>

          <p>
            <strong>password123</strong>
          </p>
        </div>

        <Link href="/" className="auth-back-link">
          ← Back to Home
        </Link>
      </section>
    </main>
  );
}
