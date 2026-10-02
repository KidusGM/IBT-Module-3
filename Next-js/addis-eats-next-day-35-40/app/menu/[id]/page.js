import Link from "next/link";
import { notFound } from "next/navigation";
import { menuData, getDishById } from "../menuData";
import AddToCartButton from "../../components/AddToCartButton";

export function generateStaticParams() {
return menuData.map((dish) => ({
id: dish.id,
}));
}

export default async function DishDetails({ params }) {
const { id } = await params;

const dish = getDishById(id);

if (!dish) {
notFound();
}

return ( <main className="dish-details"> <img src={dish.image} alt={dish.name} />


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
