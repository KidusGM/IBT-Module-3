
const orders = [];

export function createOrder(order) {
  const newOrder = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    status: "Received",
    ...order,
  };

  orders.push(newOrder);

  return newOrder;
}

export function getOrders() {
  return [...orders];
}
