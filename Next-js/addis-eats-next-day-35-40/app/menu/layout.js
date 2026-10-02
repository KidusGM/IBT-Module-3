
import Link from "next/link";

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