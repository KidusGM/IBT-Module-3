import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>Addis Eats</h1>
            <p>Order great food across Addis.</p>
        </header>
    );
};

const CardLists = (props) => {
    const { name, desc, price, isSold, isSpicy, image } = props;

    return (
        <div>
            <h2>{name}</h2>

            {image && <img src={image} alt={name} width="200" />}

            <p>{desc}</p>

            <span>Price: {price} ETB</span>

            <p>
                Status: {isSold ? "Sold out" : "Available now"}
            </p>

            <p>
                {isSpicy ? "🌶️ Spicy" : "Not Spicy"}
            </p>
        </div>
    );
};

export { Header };
export default CardLists;