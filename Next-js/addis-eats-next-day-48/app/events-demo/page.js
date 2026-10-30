"use client";

import { useState } from "react";

export default function EventsDemoPage() {
  const [message, setMessage] = useState("No button clicked yet.");

  function handleClick(event) {
    setMessage(`Button clicked: ${event.currentTarget.textContent}`);
  }

  return (
    <main className="container">
      <section className="panel">
        <p className="eyebrow">Day 48</p>

        <h1>React Event Handling</h1>

        <p>
          This page demonstrates how React handles button click events and
          provides access to the event object.
        </p>

        <button
          type="button"
          className="button"
          onClick={handleClick}
        >
          Click Me
        </button>

        <p style={{ marginTop: "1rem" }} aria-live="polite">
          {message}
        </p>
      </section>
    </main>
  );
}