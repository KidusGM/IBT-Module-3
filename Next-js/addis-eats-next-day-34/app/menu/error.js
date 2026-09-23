"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function MenuError({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <section className="section">
            <div className="container">
                <div className="error-box">
                    <p className="eyebrow">Something went wrong</p>

                    <h2>We couldn't load the menu.</h2>

                    <p>
                        The menu encountered an error. You can try loading it
                        again.
                    </p>

                    <div className="hero-buttons">
                        <button onClick={() => reset()} className="button">
                            Try Again
                        </button>

                        <Link
                            href="/"
                            className="button secondary"
                        >
                            Back Home
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}