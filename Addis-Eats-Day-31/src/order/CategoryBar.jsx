import React from "react";
import PropTypes from "prop-types";

const CategoryBar = ({
categories,
selectedCategory,
setSelectedCategory
}) => {


return (
    <div className="category-bar">

        {categories.map((category) => (

            <button
                key={category}
                onClick={() =>
                    setSelectedCategory(category)
                }
                className={
                    selectedCategory === category
                        ? "active"
                        : ""
                }
            >
                {category}
            </button>

        ))}

    </div>
);


};

CategoryBar.propTypes = {
categories: PropTypes.arrayOf(
PropTypes.string
).isRequired,


selectedCategory: PropTypes.string.isRequired,

setSelectedCategory: PropTypes.func.isRequired


};

export default CategoryBar;
