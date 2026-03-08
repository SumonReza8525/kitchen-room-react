import React from "react";
import { UtensilsCrossed } from "lucide-react";
const Order = ({ order, setNewOrders }) => {
  const clickToCook = (order) => {
    setNewOrders((prev) =>
      prev.map((item) =>
        item.id === order.id && item.status === "Current Orders"
          ? { ...item, status: "Currently Cooking" }
          : item,
      ),
    );
  };

  return (
    <div
      onClick={() => clickToCook(order)}
      className="bg-gray-200 p-4 shadow-xl rounded-lg "
    >
      <div className="flex justify-between items-center">
        <p className="bg-amber-500 p-1.5 rounded-xl text-sm font-bold">
          #{order.order_no}
        </p>
        <p className="bg-amber-200  font-bold px-4 py-2 rounded-full">
          {order.table_no}
        </p>
      </div>
      <p className="flex gap-2 font-bold my-2.5">
        <UtensilsCrossed /> {order.quantity} {order.order_title}
      </p>
      <h2 className="text-amber-500 font-semibold">Instruction</h2>
      <p className="text-sm font-semibold">{order.special_instruction}</p>
    </div>
  );
};

export default Order;
