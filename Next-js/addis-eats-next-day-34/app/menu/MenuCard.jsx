import Link from "next/link";

export default function MenuCard({ dish }) {
    return (
        <article className="menu-card">
            <div>
                <span className="category">{dish.category}</span>

                <h3>{dish.name}</h3>
                <img src={dish.image} alt={dish.name} />

                <p>{dish.description}</p>

                <strong>{dish.price} ETB</strong>
            </div>

            <Link
                href={`/menu/${dish.id}`}
                className="button small-button"
            >
                View Dish
            </Link>
        </article>
    );
}