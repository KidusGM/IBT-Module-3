import React from 'react';
import CardLists from './CardLists';

const Cards = () => {

    const productList = [
        {
            id: 1,
            image: "https://www.shutterstock.com/image-photo/ethiopian-spicy-doro-wot-injera-260nw-746378887.jpg",
            name: "Dorowot",
            desc: "Spicy with two chicken legs and one Egg",
            price: 5700,
            spicy: true,
            category: "DoroWot",
        },

        {
            id: 2,
            name: "Tbis",
             image: "data:image/jpeg;base64,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",
            desc: "1/2 a kilo of meat with awaze and a bread",
            price: 5999.99,
            spicy: false,
            category: "Tibs",
        },

        {
            id: 3,
            name: "Kitfo",
            image: "https://www.shutterstock.com/image-photo/ethiopian-spicy-doro-wot-injera-260nw-746378887.jpg",
            desc: "Medium Cooked with Kocho Awaze 1/2 kilo of meat",
            price: 7700,
            spicy: true,
            category: "Kitfo",
        }
    ];

   const selectedCategory = ["DoroWot", "Tibs"];

const filteredProducts = productList.filter(
    (prod) => selectedCategory.includes(prod.category)
);

    return (
        <div>

            {filteredProducts.length === 0 ? (
                <p>No dishes found in this category.</p>
            ) : (
                filteredProducts.map((prod) => (
                    <CardLists
                        key={prod.id}
                        name={prod.name}
                        desc={prod.desc}
                        price={prod.price}
                        spicy={prod.spicy}
                        image={prod.image}
                    />
                ))
            )}

        </div>
    );
};

export default Cards;



