"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";

export default function AddToCartButton({ dish }) {
const { addToCart, isLoaded } = useCart();
const [added, setAdded] = useState(false);

function handleAddToCart() {
addToCart(dish);
setAdded(true);


setTimeout(() => {
  setAdded(false);
}, 1500);


}

return (
<button
type="button"
className="add-to-cart-button"
onClick={handleAddToCart}
disabled={!isLoaded}
aria-label={`Add ${dish.name} to cart`}
>
{added ? "✓ Added to Cart" : "🛒 Add to Cart"} </button>
);
}
