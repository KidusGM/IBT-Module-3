import React from "react";

const CategoryBar = ({
    categories,
    selectedCategory,
    setSelectedCategory
}) => {

    return (
        <div>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
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

export default CategoryBar;