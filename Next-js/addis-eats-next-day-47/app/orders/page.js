import Link from "next/link";
import { redirect } from "next/navigation";
import { getOrdersFor } from "../lib/orders";
import { getSession } from "../lib/session";
import { cancelOrder } from "./actions";

export default async function OrdersPage() {
  const session = await getSession();

  if (!session) {
    redirect("/signin?next=/orders");
  }

  const orders = getOrdersFor(session.userId);

  return (
    <main className="orders-page">
      <div className="orders-container">
        <div className="orders-header">
          <div>
            <p className="orders-eyebrow">Your account</p>

            <h1>My Orders</h1>

            <p className="orders-subtitle">
              Track your Addis Eats orders and manage them
              from one place.
            </p>
          </div>

          <form method="POST" action="/api/signout">
            <button type="submit" className="signout-button">
              Sign Out
            </button>
          </form>
        </div>

        <div className="account-card">
          <div>
            <span className="account-label">Signed in as</span>
            <strong>{session.userId}</strong>
          </div>

          <div>
            <span className="account-label">Role</span>
            <span className="role-badge">
              {session.role}
            </span>
          </div>
        </div>

        {orders.length === 0 ? (
          <section className="empty-orders">
            <div className="empty-orders-icon">🍽️</div>

            <h2>No orders yet</h2>

            <p>
              Your delicious Ethiopian food adventure starts
              with your first order.
            </p>

           <Link href="/menu/">Browse the menu</Link>
          </section>
        ) : (
          <section className="orders-list">
            <div className="section-heading">
              <h2>Your Orders</h2>

              <span>
                {orders.length}{" "}
                {orders.length === 1 ? "order" : "orders"}
              </span>
            </div>

            {orders.map((order) => (
              <article className="order-card" key={order.id}>
                <div className="order-card-header">
                  <div>
                    <span className="order-label">
                      Order reference
                    </span>

                    <h3>{order.id}</h3>
                  </div>

                  <span
                    className={`order-status status-${order.status.toLowerCase()}`}
                  >
                    {order.status}
                  </span>
                </div>

                <div className="order-details">
                  <div>
                    <span className="order-label">Total</span>

                    <strong>
                      {order.total.toLocaleString()} ETB
                    </strong>
                  </div>

                  <div>
                    <span className="order-label">Placed</span>

                    <span>
                      {new Date(
                        order.createdAt
                      ).toLocaleString()}
                    </span>
                  </div>
                </div>

                {order.status === "Received" && (
                  <form
                    action={cancelOrder.bind(
                      null,
                      order.id
                    )}
                  >
                    <button
                      type="submit"
                      className="cancel-button"
                    >
                      Cancel Order
                    </button>
                  </form>
                )}
              </article>
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
