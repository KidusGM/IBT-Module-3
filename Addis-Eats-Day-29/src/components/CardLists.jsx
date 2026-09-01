import React, { useState } from "react";
import PropTypes from "prop-types";

const Card = ({ children }) => {
return ( <div className="card">
{children} </div>
);
};

Card.propTypes = {
children: PropTypes.node.isRequired
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


const [count, setCount] = useState(0);

const handleAdd = () => {

    setCount(
        (previousCount) => previousCount + 1
    );

    if (onAdd) {
        onAdd(price);
    }
};

return (
    <Card>

        <h2>{name}</h2>

        {image && (
            <img
                src={image}
                alt={name}
                width="200"
            />
        )}

        <p>{desc}</p>

        <p>
            <strong>
                Price: {price.toFixed(2)} {currency}
            </strong>
        </p>

        {spicy && (
            <span>🌶️ Spicy</span>
        )}

        <br />
        <br />

        <button onClick={handleAdd}>
            Add
        </button>

        <span>
            {" "}
            Quantity: {count}
        </span>

    </Card>
);


};

CardLists.propTypes = {
name: PropTypes.string.isRequired,
price: PropTypes.number.isRequired,
spicy: PropTypes.bool,
currency: PropTypes.string,
desc: PropTypes.string.isRequired,
image: PropTypes.string,
onAdd: PropTypes.func
};

export default CardLists;
