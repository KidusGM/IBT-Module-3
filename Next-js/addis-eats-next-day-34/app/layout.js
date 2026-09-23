import Link from "next/link";
import "./globals.css";

export const metadata = {
    title: "Addis Eats",
    description: "Addis Eats restaurant menu",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <header className="header">
                    <div className="container nav">
                        <Link href="/" className="logo">
                            Addis Eats
                        </Link>

                        <nav>
                            <Link href="/">Home</Link>
                            <Link href="/menu">Menu</Link>
                            <Link href="/cart">Cart</Link>
                        </nav>
                    </div>
                </header>

                <main>{children}</main>
            </body>
        </html>
    );
}