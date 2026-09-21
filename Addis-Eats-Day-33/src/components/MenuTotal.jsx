import React from "react";
import useCartStore from "../store/cartStore";

const MenuTotal = () => {
    const items = useCartStore(
        (state) => state.items
    );

    const total = items.reduce(
        (sum, item) =>
            sum + item.price * item.quantity,
        0
    );

    return (
        <div className="order-total">
            <h3>
                Order Total:{" "}
                {total.toFixed(2)}
                {" "}ETB
            </h3>
        </div>
    );
};

export default MenuTotal;