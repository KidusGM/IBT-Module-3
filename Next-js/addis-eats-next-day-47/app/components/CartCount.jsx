"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";

export default function CartCount() {
  const { cartCount } = useCart();

  return (
    <Link href="/cart" className="cart-nav-link">
      View Cart
      <span className="cart-count">
        {cartCount}
      </span>
    </Link>
  );
}