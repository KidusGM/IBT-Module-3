import React from "react";
import {
    Routes,
    Route,
    Link
} from "react-router-dom";

import "./App.css";

import Cards from "./components/Cards";
import DeliveryForm from "./order/DeliveryForm";
import Mainheader from "./header/Mainheader";

import {
    CartProvider
} from "./context/CartContext";

import {
    AuthProvider
} from "./context/AuthContext";

import {
    ThemeProvider
} from "./context/ThemeContext";

import useCartStore from "./store/cartStore";


function App() {

    return (
        <AuthProvider>

            <ThemeProvider>

                <CartProvider>

                    {/* Navigation */}

                    <nav className="main-header">

                        <Link to="/">
                            🍽️ Menu
                        </Link>

                        <Link to="/order">
                            🛒 Your Order
                        </Link>

                        <Link to="/delivery">
                            📦 Delivery
                        </Link>

                    </nav>


                    {/* Cart total */}

                    <Mainheader />


                    {/* Application routes */}

                    <Routes>

                        <Route
                            path="/"
                            element={<Cards />}
                        />

                        <Route
                            path="/order"
                            element={<OrderPage />}
                        />

                        <Route
                            path="/delivery"
                            element={<DeliveryForm />}
                        />

                    </Routes>

                </CartProvider>

            </ThemeProvider>

        </AuthProvider>
    );
}


/*
 * ============================
 * ORDER PAGE
 * ============================
 */

function OrderPage() {

    return (
        <main className="menu-container">

            <h2>
                🛒 Your Order
            </h2>

            <OrderItems />

        </main>
    );
}


/*
 * ============================
 * ORDER ITEMS
 * ============================
 */

function OrderItems() {

    /*
     * Narrow selector:
     * only subscribe to items.
     */
    const items = useCartStore(
        (state) => state.items
    );

    /*
     * Narrow selector:
     * only subscribe to removeItem.
     */
    const removeItem = useCartStore(
        (state) => state.removeItem
    );

    /*
     * Narrow selector:
     * only subscribe to clear.
     */
    const clear = useCartStore(
        (state) => state.clear
    );


    /*
     * Empty cart
     */

    if (items.length === 0) {

        return (
            <div>

                <p>
                    Your order is empty.
                </p>

                <Link to="/">
                    Browse Menu
                </Link>

            </div>
        );
    }


    /*
     * Calculate total.
     */

    const total = items.reduce(
        (sum, item) =>
            sum +
            item.price *
            item.quantity,
        0
    );


    return (
        <div>

            {items.map((item) => (

                <div
                    className="card"
                    key={item.id}
                >

                    <h3>
                        {item.name}
                    </h3>

                    <p>
                        Price:{" "}
                        {item.price.toFixed(2)}
                        {" "}ETB
                    </p>

                    <p>
                        Quantity:{" "}
                        {item.quantity}
                    </p>

                    <p>
                        Subtotal:{" "}
                        {(
                            item.price *
                            item.quantity
                        ).toFixed(2)}
                        {" "}ETB
                    </p>

                    <button
                        onClick={() =>
                            removeItem(item.id)
                        }
                    >
                        Remove
                    </button>

                </div>

            ))}


            <div className="order-total">

                <h3>
                    Total:{" "}
                    {total.toFixed(2)}
                    {" "}ETB
                </h3>

                <button
                    onClick={clear}
                >
                    Clear Order
                </button>

            </div>


            <br />

            <Link to="/delivery">
                Continue to Delivery
            </Link>

        </div>
    );
}


export default App;