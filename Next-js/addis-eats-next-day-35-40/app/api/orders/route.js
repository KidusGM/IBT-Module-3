import { NextResponse } from "next/server";
import { menuData } from "../../menu/menuData";
import { createOrder, getOrders } from "../../lib/orders";

export async function GET() {
return NextResponse.json({
orders: getOrders(),
});
}

export async function POST(request) {
try {
const body = await request.json();

const name = String(body.name || "").trim();
const phone = String(body.phone || "").trim();
const area = String(body.area || "").trim();
const items = body.items;

if (
  name.length < 2 ||
  name.length > 100 ||
  area.length < 2 ||
  area.length > 150
) {
  return NextResponse.json(
    { message: "Please provide valid customer information." },
    { status: 400 }
  );
}

if (!/^0(9|7)[0-9]{8}$/.test(phone)) {
  return NextResponse.json(
    { message: "Invalid Ethiopian phone number." },
    { status: 400 }
  );
}

if (!Array.isArray(items) || items.length === 0) {
  return NextResponse.json(
    { message: "Order must contain at least one item." },
    { status: 400 }
  );
}

if (items.length > menuData.length) {
  return NextResponse.json(
    { message: "Invalid order items." },
    { status: 400 }
  );
}

const orderItems = [];
const seenIds = new Set();

for (const item of items) {
  const dish = menuData.find(
    (product) => product.id === item.id
  );

  const quantity = Number(item.quantity);

  if (
    !dish ||
    seenIds.has(dish.id) ||
    !Number.isInteger(quantity) ||
    quantity < 1 ||
    quantity > 99
  ) {
    return NextResponse.json(
      { message: "Invalid order item." },
      { status: 400 }
    );
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

return NextResponse.json(
  {
    message: "Order created successfully.",
    order,
  },
  { status: 201 }
);


} catch (error) {
console.error("Order API error:", error);


return NextResponse.json(
  { message: "Invalid request body." },
  { status: 400 }
);


}
}
