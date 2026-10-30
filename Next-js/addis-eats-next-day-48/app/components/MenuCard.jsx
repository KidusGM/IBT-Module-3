
"use client";

import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

export default function MenuCard({ dish }) {
  return (
    <article className="menu-card">
      <Link
        href={`/menu/${dish.id}`}
        className="menu-card-link"
      >
        <div className="menu-card-image">
          <img src={dish.image} alt={dish.name} />
        </div>

        <div className="menu-card-content">
          <div className="menu-card-heading">
            <h3>{dish.name}</h3>

            <span className="dish-price">
              {dish.price} ETB
            </span>
          </div>

          <p>{dish.description}</p>

          {dish.category && (
            <span className="dish-category">
              {dish.category}
            </span>
          )}
        </div>
      </Link>

      <div className="menu-card-actions">
        <AddToCartButton dish={dish} />
      </div>
    </article>
  );
}