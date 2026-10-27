"use client";

import { useActionState, useEffect, useRef } from "react";
import Link from "next/link";
import { useCart } from "./CartProvider";
import { placeOrder } from "../checkout/actions";

const initialState = {
  success: false,
  message: "",
};

export default function CheckoutForm() {
  const {
    cart,
    cartTotal,
    clearCart,
    isLoaded,
  } = useCart();

  const [state, formAction, isPending] = useActionState(
    placeOrder,
    initialState
  );

  const hasClearedCart = useRef(false);

  useEffect(() => {
    if (state.success && !hasClearedCart.current) {
      hasClearedCart.current = true;
      clearCart();
    }
  }, [state.success, clearCart]);

  if (!isLoaded) {
    return <p>Loading checkout...</p>;
  }

  if (cart.length === 0 && !state.success) {
    return (
      <div>
        <p>Your cart is empty.</p>

        <Link href="/menu">
          Return to Menu
        </Link>
      </div>
    );
  }

  return (
    <form action={formAction} className="checkout-form">
      <h2>Delivery Information</h2>

      <label htmlFor="name">Full Name</label>

      <input
        id="name"
        name="name"
        type="text"
        required
        minLength={2}
        maxLength={100}
      />

      <label htmlFor="phone">
        TeleBirr Phone Number
      </label>

      <input
        id="phone"
        name="phone"
        type="tel"
        placeholder="09XXXXXXXX"
        pattern="0(9|7)[0-9]{8}"
        required
      />

      <label htmlFor="area">Delivery Area</label>

      <input
        id="area"
        name="area"
        type="text"
        required
        minLength={2}
        maxLength={150}
      />

      <input
        type="hidden"
        name="cart"
        value={JSON.stringify(
          cart.map((item) => ({
            id: item.id,
            quantity: item.quantity,
          }))
        )}
      />

      <h3>
        Total: {Number(cartTotal || 0).toLocaleString()} ETB
      </h3>

      {state.message && (
        <p role="status">{state.message}</p>
      )}

      {!state.success && (
        <button
          type="submit"
          disabled={isPending || cart.length === 0}
        >
          {isPending
            ? "Placing Order..."
            : "Place Order"}
        </button>
      )}

      {state.success && (
        <Link href="/menu">
          Continue Browsing
        </Link>
      )}
    </form>
  );
}