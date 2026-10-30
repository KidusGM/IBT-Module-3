"use client";

import { useState } from "react";

export default function FormEventsPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setMessage(`Hello, ${name || "guest"}! Your form was submitted.`);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <main className="events-page">
      <section className="events-hero">
        <div className="container">
          <p className="eyebrow">Day 48 · React Events</p>

          <h1>Form Events</h1>

          <p>
            Try the form below to see how React responds to typing and
            submitting events.
          </p>
        </div>
      </section>

      <section className="events-content container">
        <div className="event-card">
          <div className="event-card-header">
            <span className="event-icon">✦</span>

            <div>
              <h2>Say hello</h2>
              <p>Enter your name and submit the form.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="event-form">
            <label htmlFor="name">Your name</label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={handleChange}
              placeholder="Enter your name"
            />

            <button type="submit" className="button">
              Submit
            </button>
          </form>

          <div className="event-result" aria-live="polite">
            {message || "Your submission result will appear here."}
          </div>
        </div>
      </section>
    </main>
  );
}