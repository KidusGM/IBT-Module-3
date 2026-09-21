import React, {
    lazy,
    Profiler,
    Suspense
} from "react";

import {
    Routes,
    Route,
    Link
} from "react-router-dom";

import "./App.css";

import Cards from "./components/Cards";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingSkeleton from "./components/LoadingSkeleton";

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


/*
 * Lazy-loaded routes
 */
const DeliveryForm = lazy(
    () => import("./order/DeliveryForm")
);

const Receipt = lazy(
    () => import("./order/Receipt")
);


/*
 * React Profiler callback
 */
const handleProfiler = (
    id,
    phase,
    actualDuration
) => {
    console.log(
        `[Profiler] ${id} | ${phase} | ${actualDuration.toFixed(2)}ms`
    );
};


function App() {
    return (
        <AuthProvider>
            <ThemeProvider>
                <CartProvider>

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

                    <Mainheader />

                    <Suspense
                        fallback={
                            <LoadingSkeleton />
                        }
                    >
                        <Routes>

                            <Route
                                path="/"
                                element={
                                    <Profiler
                                        id="Menu"
                                        onRender={
                                            handleProfiler
                                        }
                                    >
                                        <ErrorBoundary>
                                            <Cards />
                                        </ErrorBoundary>
                                    </Profiler>
                                }
                            />

                            <Route
                                path="/order"
                                element={
                                    <Profiler
                                        id="Cart"
                                        onRender={
                                            handleProfiler
                                        }
                                    >
                                        <ErrorBoundary>
                                            <OrderPage />
                                        </ErrorBoundary>
                                    </Profiler>
                                }
                            />

                            <Route
                                path="/delivery"
                                element={
                                    <DeliveryForm />
                                }
                            />

                            <Route
                                path="/receipt"
                                element={
                                    <Receipt />
                                }
                            />

                        </Routes>
                    </Suspense>

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

    const items = useCartStore(
        (state) => state.items
    );

    const removeItem = useCartStore(
        (state) => state.removeItem
    );

    const clear = useCartStore(
        (state) => state.clear
    );


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