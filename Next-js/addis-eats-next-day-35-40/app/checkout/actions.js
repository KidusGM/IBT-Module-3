"use server";

import { menuData } from "../menu/menuData";
import { createOrder } from "../lib/orders";

export async function placeOrder(previousState, formData) {
const name = String(formData.get("name") || "").trim();
const phone = String(formData.get("phone") || "").trim();
const area = String(formData.get("area") || "").trim();
const cartJson = String(formData.get("cart") || "[]");

if (
name.length < 2 ||
name.length > 100 ||
area.length < 2 ||
area.length > 150
) {
return {
success: false,
message: "Please enter valid delivery information.",
};
}

if (!/^0(9|7)[0-9]{8}$/.test(phone)) {
return {
success: false,
message: "Enter a valid Ethiopian mobile number.",
};
}

let submittedCart;

try {
submittedCart = JSON.parse(cartJson);
} catch {
return {
success: false,
message: "Invalid cart information.",
};
}

if (!Array.isArray(submittedCart) || submittedCart.length === 0) {
return {
success: false,
message: "Your cart is empty.",
};
}

if (submittedCart.length > menuData.length) {
return {
success: false,
message: "Invalid cart information.",
};
}

const orderItems = [];
const seenIds = new Set();

for (const submittedItem of submittedCart) {
const dish = menuData.find(
(item) => item.id === submittedItem.id
);


const quantity = Number(submittedItem.quantity);

if (
  !dish ||
  seenIds.has(dish.id) ||
  !Number.isInteger(quantity) ||
  quantity < 1 ||
  quantity > 99
) {
  return {
    success: false,
    message: "One or more cart items are invalid.",
  };
}

seenIds.add(dish.id);

orderItems.push({
  id: dish.id,
  name: dish.name,
  price: dish.price,
  quantity,
  subtotal: dish.price * quantity,
});


}

const total = orderItems.reduce(
(sum, item) => sum + item.subtotal,
0
);

const order = createOrder({
customer: { name, phone, area },
items: orderItems,
total,
});

return {
success: true,
message: `Order received! Your order reference is ${order.id}.`,
};
}
