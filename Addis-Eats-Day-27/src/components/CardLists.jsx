import React from 'react';
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
    image
}) => {
    return (
        <Card>
            <h2>{name}</h2>

            {image && <img src={image} alt={name} width="200" />}

            <p>{desc}</p>

            <span>
                Price: {price} {currency}
            </span>

            {typeof spicy === "boolean" && spicy && (
                <span> 🌶️ Spicy</span>
            )}
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
};

export { Header };
export default CardLists;