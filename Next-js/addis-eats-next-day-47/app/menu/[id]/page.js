import Link from "next/link";
import { notFound } from "next/navigation";
import { menuData, getDishById } from "../menuData";
import AddToCartButton from "../../components/AddToCartButton";

export function generateStaticParams() {
  return menuData.map((dish) => ({
    id: dish.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;

  const dish = getDishById(id);

  if (!dish) {
    return {
      title: "Dish Not Found",
      description: "The requested dish could not be found.",
    };
  }

  return {
    title: dish.name,
    description: dish.description,

    openGraph: {
      title: `${dish.name} | Addis Eats`,
      description: dish.description,
      images: [
        {
          url: `/menu/${dish.id}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: dish.name,
        },
      ],
    },

    alternates: {
      canonical: `/menu/${dish.id}`,
    },
  };
}

export default async function DishDetails({ params }) {
  const { id } = await params;

  const dish = getDishById(id);

  if (!dish) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MenuItem",
    name: dish.name,
    description: dish.description,
    image: dish.image,
    offers: {
      "@type": "Offer",
      price: dish.price,
      priceCurrency: "ETB",
    },
  };

  return (
    <main className="dish-details">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <img src={dish.image} alt={dish.name} />

      <div>
        <p>{dish.category}</p>

        <h1>{dish.name}</h1>

        <p>{dish.description}</p>

        <h2>{dish.price.toLocaleString()} ETB</h2>

        <AddToCartButton dish={dish} />

        <p>
          <Link href="/menu">Back to Menu</Link>
        </p>
      </div>
    </main>
  );
}
