import Link from "next/link";

export default function CheckoutPage() {
    return (
        <section className="section">
            <div className="container">
                <div className="checkout-card">
                    <p className="eyebrow">Almost There</p>

                    <h2>Checkout</h2>

                    <form className="checkout-form">
                        <label htmlFor="name">
                            Full Name
                        </label>

                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                        />

                        <label htmlFor="phone">
                            TeleBirr Phone
                        </label>

                        <input
                            id="phone"
                            type="tel"
                            placeholder="09XXXXXXXX"
                        />

                        <label htmlFor="area">
                            Delivery Area
                        </label>

                        <input
                            id="area"
                            type="text"
                            placeholder="Enter your delivery area"
                        />

                        <button type="submit" className="button">
                            Place Order
                        </button>
                    </form>

                    <Link href="/cart" className="back-link">
                        ← Back to Cart
                    </Link>
                </div>
            </div>
        </section>
    );
}