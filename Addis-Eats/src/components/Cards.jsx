import React from 'react';
import CardLists from './CardLists';

const Cards = () => {
    const productList = [
        {
            id: 1,
            image:"https://www.shutterstock.com/image-photo/ethiopian-spicy-doro-wot-injera-260nw-746378887.jpg",
            name: "Dorowot",
            desc: "Spicy with two chiken legs and one Egg",
            price: 5700,
            isSold: false,
             isSpicy: true,

        },

        {
            id: 2,
            name: "Tbis",
            desc: "  1/2 a kilo of meet with awaze and a bread",
            price: 5999.99,
            isSold: true,
            isSpicy: false,

        },
          {
            id: 3,
            name: "Kitfo",
            desc: "Meduim Cooked with Kocho Awaze 1/2 kilo og meet",
            price: 7700,
              isSold: false,
             isSpicy: true,

        }
    ]

  
    return (
        
        <div>
             {productList.map((prod) => (
        <CardLists
                     key={prod.id}
                     name={prod.name}
                     desc={prod.desc}
                     price={prod.price}
                     isSold={prod.isSold}
                     isSpicy={prod.isSpicy}
                     image={ prod.image}
        />
          ))}
        </div>
    );
};

export default Cards
