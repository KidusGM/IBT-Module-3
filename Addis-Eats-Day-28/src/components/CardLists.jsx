import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Header = () => {
    return (
        <header>
            <h1>Addis Eats</h1>
            <p>Order great food across Addis.</p>
        </header>
    );
};

const Card = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

const CardLists = ({
    name,
    desc,
    price,
    spicy,
    currency = "ETB",
    image,
    onAdd
}) => {

    // Added for Day 28
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count + 1);

        if (onAdd) {
            onAdd();
        }
    };

    return (
        <Card>
            <h2>{name}</h2>

            {image && <img src={image} alt={name} width="200" />}

            <p>{desc}</p>

            {/* Original price display */}
            <span>
                Price: {price} {currency}
            </span>

            {typeof spicy === "boolean" && spicy && (
                <span> 🌶️ Spicy</span>
            )}

            <br />
            <br />

            {/* Added for Day 28 */}
            <button onClick={handleAdd}>
                Add
            </button>

            <span> Quantity: {count}</span>
        </Card>
    );
};

CardLists.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    spicy: PropTypes.bool,
    currency: PropTypes.string,
    desc: PropTypes.string,
    image: PropTypes.string,

    // Added for Day 28
    onAdd: PropTypes.func,
};

export { Header };
export default CardLists;