"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function MenuError({ error, reset }) {
  useEffect(() => {
    console.error("Menu error:", error);
  }, [error]);

  return (
    <main className="error-container">
      <h2>Something went wrong!</h2>

      <p>We could not load the menu.</p>

      <button type="button" onClick={() => reset()}>
        Try Again
      </button>

      <Link href="/">Return Home</Link>
    </main>
  );
}