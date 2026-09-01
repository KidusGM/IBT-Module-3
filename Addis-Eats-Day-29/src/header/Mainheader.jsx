import React from "react";
import PropTypes from "prop-types";

const Mainheader = ({ total }) => {


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

Mainheader.propTypes = {
total: PropTypes.number.isRequired
};

export default Mainheader;
