import DishList from "./DishList";
import { menuData } from "./menuData";

export const metadata = {
  title: "Menu",
  description:
    "Explore delicious Ethiopian dishes and order your favorite meals from Addis Eats.",
  alternates: {
    canonical: "/menu",
  },
};

export default async function MenuPage({ searchParams }) {
  const params = await searchParams;

  if (params?.error === "true") {
    throw new Error("This is a test error for the menu page.");
  }

  return (
    <main className="menu-container">
      <h1>Our Menu</h1>
      <p>Explore our delicious Ethiopian dishes.</p>

      <DishList dishes={menuData} />
    </main>
  );
}