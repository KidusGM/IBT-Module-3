import Link from "next/link";

export default function HomePage() {
    return (
        <section className="hero">
            <div className="container">
                <p className="eyebrow">Welcome to Addis Eats</p>

                <h2>Traditional Ethiopian food, one click away.</h2>

                <p className="hero-text">
                    Explore Ethiopian favorites including Kitfo, Doro Wot,
                    and Tibs.
                </p>

                <div className="hero-buttons">
                    <Link href="/menu" className="button">
                        Explore Menu
                    </Link>

                    <Link href="/cart" className="button secondary">
                        View Cart
                    </Link>
                </div>
            </div>
        </section>
    );
}