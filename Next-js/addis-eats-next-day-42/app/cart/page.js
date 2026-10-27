
"use client";

import Link from "next/link";
import { useCart } from "../components/CartProvider";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartCount,
    isLoaded,
  } = useCart();

  if (!isLoaded) {
    return (
      <main className="cart-container">
        <p>Loading cart...</p>
      </main>
    );
  }

  return (
    <main className="cart-container">
      <h1>Your Cart ({cartCount} items)</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>

          <Link href="/menu" className="primary-button">
            Browse Menu
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => {
              const price = Number(item.price) || 0;
              const quantity = Number(item.quantity) || 1;
              const subtotal = price * quantity;

              return (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div className="cart-item-details">
                    <h2>{item.name}</h2>

                    <p>
                      {price.toLocaleString()} ETB each
                    </p>

                    <div className="quantity-control">
                      <label>
                        Quantity
                      </label>

                      <div className="quantity-buttons">
                        <button
                          type="button"
                          aria-label={`Decrease ${item.name} quantity`}
                          disabled={quantity <= 1}
                          onClick={() =>
                            updateQuantity(item.id, quantity - 1)
                          }
                        >
                          −
                        </button>

                        <span>{quantity}</span>

                        <button
                          type="button"
                          aria-label={`Increase ${item.name} quantity`}
                          disabled={quantity >= 99}
                          onClick={() =>
                            updateQuantity(item.id, quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <p className="cart-subtotal">
                      Subtotal: {subtotal.toLocaleString()} ETB
                    </p>

                    <button
                      type="button"
                      className="remove-button"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="cart-summary">
            <h2>
              Total: {Number(cartTotal || 0).toLocaleString()} ETB
            </h2>

            <Link href="/checkout" className="primary-button">
              Proceed to Checkout
            </Link>

            <Link href="/menu" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </>
      )}
    </main>
  );
}