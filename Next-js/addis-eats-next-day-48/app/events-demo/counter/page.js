"use client";

import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((currentCount) => currentCount + 1);
  }

  function decrease() {
    setCount((currentCount) => currentCount - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <main className="events-page">
      <section className="events-hero">
        <div className="container">
          <p className="eyebrow">Day 48 · React Events</p>

          <h1>Interactive Counter</h1>

          <p>
            This example shows how click events can update React state.
          </p>
        </div>
      </section>

      <section className="events-content container">
        <div className="event-card counter-card">
          <div className="event-card-header">
            <span className="event-icon">+</span>

            <div>
              <h2>Counter</h2>
              <p>Use the buttons to change the value.</p>
            </div>
          </div>

          <div className="counter-value" aria-live="polite">
            {count}
          </div>

          <div className="counter-actions">
            <button
              type="button"
              className="button secondary"
              onClick={decrease}
            >
              −
            </button>

            <button
              type="button"
              className="button"
              onClick={increase}
            >
              +
            </button>

            <button
              type="button"
              className="button secondary"
              onClick={reset}
            >
              Reset
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}