
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

export function getOrdersFor(userId) {
  return orders.filter(
    (order) => order.userId === userId
  );
}

export function updateOrderStatus(orderId, status) {
  const order = orders.find(
    (item) => item.id === orderId
  );

  if (!order) {
    return null;
  }

  order.status = status;

  return order;
}
