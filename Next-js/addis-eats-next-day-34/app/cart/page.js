import Link from "next/link";

export default function CartPage() {
    return (
        <section className="section">
            <div className="container">
                <div className="simple-page">
                    <p className="eyebrow">Your Order</p>

                    <h2>Your Cart</h2>

                    <p>
                        Your selected dishes will appear here.
                    </p>

                    <div className="cart-summary">
                        <div>
                            <span>Items</span>
                            <strong>0</strong>
                        </div>

                        <div>
                            <span>Total</span>
                            <strong>0 ETB</strong>
                        </div>
                    </div>

                    <div className="hero-buttons">
                        <Link href="/menu" className="button secondary">
                            Continue Shopping
                        </Link>

                        <Link href="/checkout" className="button">
                            Checkout
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}