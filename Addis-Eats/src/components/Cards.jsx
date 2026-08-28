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
            desc: "1/2 a kilo of meat with awaze and a bread",
            price: 5999.99,
            spicy: false,
            category: "Tibs",
        },

        {
            id: 3,
            name: "Kitfo",
            desc: "Medium Cooked with Kocho Awaze 1/2 kilo of meat",
            price: 7700,
            spicy: true,
            category: "Kitfo",
        }
    ];

    const selectedCategory ="DoroWot";

    const filteredProducts = productList.filter(
        (prod) => prod.category === selectedCategory
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