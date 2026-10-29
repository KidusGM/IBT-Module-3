import "./globals.css";
import Link from "next/link";
import { CartProvider } from "./components/CartProvider";
import CartCount from "./components/CartCount";

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),

  title: {
    default: "Addis Eats",
    template: "%s | Addis Eats",
  },

  description:
    "Discover and order delicious Ethiopian food with Addis Eats.",

  openGraph: {
    title: "Addis Eats",
    description:
      "Discover and order delicious Ethiopian food with Addis Eats.",
    siteName: "Addis Eats",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <header className="site-header">
            <nav className="site-nav">
              <Link href="/" className="site-logo">
                Addis Eats
              </Link>

              <div className="nav-links">
                <Link href="/">Home</Link>

                <Link href="/menu">Menu</Link>

                <Link href="/orders">My Orders</Link>
                <Link href="/signin">Sign-In</Link>

                <CartCount />
              </div>
            </nav>
          </header>

          {children}
        </CartProvider>
      </body>
    </html>
  );
}