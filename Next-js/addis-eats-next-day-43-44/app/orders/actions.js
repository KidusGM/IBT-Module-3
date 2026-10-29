
"use server";

import {
  getOrdersFor,
  updateOrderStatus,
} from "../lib/orders";
import { getSession } from "../lib/session";

export async function cancelOrder(orderId) {
  const session = await getSession();

  if (!session) {
    return {
      success: false,
      message: "You must be signed in.",
    };
  }

  const orders = getOrdersFor(session.userId);

  const order = orders.find(
    (item) => item.id === orderId
  );

  if (!order) {
    return {
      success: false,
      message: "Order not found.",
    };
  }

  if (order.userId !== session.userId) {
    return {
      success: false,
      message: "You are not allowed to cancel this order.",
    };
  }

  if (order.status !== "Received") {
    return {
      success: false,
      message: "This order cannot be cancelled.",
    };
  }

  updateOrderStatus(order.id, "Cancelled");

  return {
    success: true,
    message: "Order cancelled successfully.",
  };
}
