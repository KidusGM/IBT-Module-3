
import { getSession } from "../lib/session";

export default async function KitchenPage() {
  const session = await getSession();

  if (!session) {
    return (
      <main className="kitchen-page">
        <section className="access-card">
          <div className="access-icon">🔒</div>

          <p className="kitchen-eyebrow">Access required</p>

          <h1>Unauthorized</h1>

          <p>
            You must be signed in to access the kitchen.
          </p>

          <a href="/signin" className="orders-primary-button">
            Sign In
          </a>
        </section>
      </main>
    );
  }

  if (session.role !== "staff") {
    return (
      <main className="kitchen-page">
        <section className="access-card">
          <div className="access-icon">🚫</div>

          <p className="kitchen-eyebrow">Restricted area</p>

          <h1>Forbidden</h1>

          <p>
            You do not have permission to access the
            kitchen.
          </p>

          <a href="/" className="orders-primary-button">
            Back to Home
          </a>
        </section>
      </main>
    );
  }

  return (
    <main className="kitchen-page">
      <div className="kitchen-container">
        <div className="kitchen-header">
          <div>
            <p className="kitchen-eyebrow">
              Staff workspace
            </p>

            <h1>Kitchen</h1>

            <p>
              Manage orders ready for kitchen processing.
            </p>
          </div>

          <span className="staff-badge">
            STAFF
          </span>
        </div>

        <section className="kitchen-empty">
          <div className="kitchen-icon">👨‍🍳</div>

          <h2>Kitchen is ready</h2>

          <p>
            Orders ready for kitchen processing will appear
            here.
          </p>

          <span className="kitchen-user">
            Signed in as {session.userId}
          </span>
        </section>
      </div>
    </main>
  );
}
