import React from "react";
import PropTypes from "prop-types";

import useCartStore from "../store/cartStore";


const Card = ({ children }) => {

    return (
        <div className="card">
            {children}
        </div>
    );
};


Card.propTypes = {
    children: PropTypes.node.isRequired
};


const CardLists = ({
    id,
    name,
    desc,
    price,
    spicy,
    currency = "ETB",
    image
}) => {

    /*
     * Narrow selector.
     */
    const addItem = useCartStore(
        (state) => state.addItem
    );


    /*
     * Narrow selector.
     *
     * Find this specific dish
     * in the cart.
     */
    const quantity = useCartStore(
        (state) =>
            state.items.find(
                (item) =>
                    item.id === id
            )?.quantity || 0
    );


    const handleAdd = () => {

        addItem({
            id,
            name,
            desc,
            price,
            spicy,
            image
        });

    };


    return (
        <Card>

            <h2>
                {name}
            </h2>


            {image && (

                <img
                    src={image}
                    alt={name}
                    width="200"
                />

            )}


            <p>
                {desc}
            </p>


            <p>

                <strong>
                    Price:{" "}
                    {price.toFixed(2)}
                    {" "}{currency}
                </strong>

            </p>


            {spicy && (
                <span>
                    🌶️ Spicy
                </span>
            )}


            <br />
            <br />


            <button
                onClick={handleAdd}
            >
                Add
            </button>


            <span>
                {" "}
                Quantity: {quantity}
            </span>

        </Card>
    );
};


CardLists.propTypes = {

    id: PropTypes.number.isRequired,

    name: PropTypes.string.isRequired,

    price: PropTypes.number.isRequired,

    spicy: PropTypes.bool,

    currency: PropTypes.string,

    desc: PropTypes.string.isRequired,

    image: PropTypes.string

};


export default CardLists;