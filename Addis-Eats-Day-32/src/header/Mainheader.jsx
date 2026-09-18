import React from "react";

import useCartStore from "../store/cartStore";

const Mainheader = () => {

    // Narrow selector.
    const items = useCartStore(
        (state) => state.items
    );

    const total = items.reduce(
        (sum, item) =>
            sum + item.price * item.quantity,
        0
    );

    return (
        <div className="main-header">

            <h2>
                🛒 Your Order
            </h2>

            <p>
                Current Total:{" "}
                <strong>
                    {total.toFixed(2)} ETB
                </strong>
            </p>

        </div>
    );
};

export default Mainheader;