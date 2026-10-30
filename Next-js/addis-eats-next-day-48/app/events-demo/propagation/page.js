"use client";

import { useState } from "react";
import Link from "next/link";

export default function PropagationPage() {
  const [message, setMessage] = useState(
    "Click the buttons to see event propagation."
  );

  function handleParentClick() {
    setMessage("The parent container received the click.");
  }

  function handleChildClick(event) {
    event.stopPropagation();
    setMessage("The child button handled the click. Propagation was stopped.");
  }

  function handleLinkClick(event) {
    event.preventDefault();
    setMessage(
      "The link's default navigation was prevented with preventDefault()."
    );
  }

  return (
    <main className="events-page">
      <section className="events-hero">
        <div className="container">
          <p className="eyebrow">Day 48 · React Events</p>

          <h1>Event Propagation</h1>

          <p>
            React events can bubble from a child element to its parent.
            These examples show how to control that behavior.
          </p>
        </div>
      </section>

      <section className="events-content container">
        <div className="event-card">
          <div className="event-card-header">
            <span className="event-icon">↗</span>

            <div>
              <h2>Event bubbling</h2>
              <p>
                Click the child button and notice that the parent does not
                receive the event.
              </p>
            </div>
          </div>

          <div
            onClick={handleParentClick}
            style={{
              padding: "1.5rem",
              border: "1px solid #eadfce",
              borderRadius: "12px",
              background: "#faf6ef",
            }}
          >
            <p style={{ marginTop: 0, fontWeight: 700 }}>
              Parent container
            </p>

            <button
              type="button"
              className="button"
              onClick={handleChildClick}
            >
              Click Child
            </button>
          </div>

          <div style={{ marginTop: "1.5rem" }}>
          <Link href="/menu" onClick={handleLinkClick}>
  Try preventDefault()
</Link>
          </div>

          <div className="event-result" aria-live="polite">
            {message}
          </div>
        </div>
      </section>
    </main>
  );
}