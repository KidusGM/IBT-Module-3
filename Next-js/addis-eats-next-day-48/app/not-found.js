import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <div className="not-found">
          <p className="error-code">404</p>

          <h2>Dish Not Found</h2>

          <p>We couldn&apos;t find what you&apos;re looking for.</p>

          <div className="hero-buttons">
            <Link href="/menu" className="button">
              Browse Menu
            </Link>

            <Link href="/" className="button secondary">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
