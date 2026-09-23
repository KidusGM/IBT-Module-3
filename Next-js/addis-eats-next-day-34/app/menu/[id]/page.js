import Link from "next/link";
import { notFound } from "next/navigation";
import menuData from "../menuData";

export default async function DishPage({ params }) {
    const { id } = await params;

    const dish = menuData.find((item) => item.id === id);

    if (!dish) {
        notFound();
    }

    return (
        <section className="section">
            <div className="container">
                <div className="dish-detail">
                    <Link href="/menu" className="back-link">
                        ← Back to Menu
                    </Link>

                    <span className="category">{dish.category}</span>

                    <h2>{dish.name}</h2>

                    <p className="dish-description">
                        {dish.description}
                    </p>

                    <p className="dish-price">
                        {dish.price} ETB
                    </p>

                    <div className="hero-buttons">
                        <Link href="/cart" className="button">
                            Add to Cart
                        </Link>

                        <Link
                            href="/checkout"
                            className="button secondary"
                        >
                            Checkout
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}