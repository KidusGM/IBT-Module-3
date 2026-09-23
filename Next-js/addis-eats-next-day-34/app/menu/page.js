import Link from "next/link";
import DishList from "./DishList";
import menuData from "./menuData";

export const dynamic = "force-dynamic";

export default async function MenuPage({ searchParams }) {
    const params = await searchParams;

    // Used only to demonstrate error.js
    if (params.error === "true") {
        throw new Error("Intentional menu error for testing.");
    }

    // Used only to make loading.js easy to see
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return (
        <section className="section">
            <div className="container">
                <div className="page-heading">
                    <div>
                        <p className="eyebrow">Our Menu</p>
                        <h2>Choose your favorite</h2>
                    </div>

                    <Link href="/cart" className="button secondary">
                        Go to Cart
                    </Link>
                </div>

                <DishList dishes={menuData} />
            </div>
        </section>
    );
}