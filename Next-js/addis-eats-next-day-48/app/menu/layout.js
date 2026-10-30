
import Link from "next/link";
import { CartProvider } from "../components/CartProvider";
import CartCount from "../components/CartCount";
export default function MenuLayout({ children }) {
  return (
    <section className="menu-section">
      <div className="menu-navigation">
        <Link href="/menu">All Dishes</Link>
        <Link href="/cart">View Cart</Link>
      </div>

      {children}
    </section>
  );
}