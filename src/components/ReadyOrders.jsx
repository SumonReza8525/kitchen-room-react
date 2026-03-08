import React from "react";

const ReadyOrders = ({ order }) => {
  return (
    <div className="p-3 border-2 border-green-600 rounded-lg space-y-2">
      <p className="text-green-700 font-bold text-lg">{order.order_title}</p>
      <p className="text-gray-500 font-semibold">Table : {order.table_no}</p>
      <p>Waiter ID : {order.waiterId}</p>
      <p>Cooking time : {order.readyTime}</p>
    </div>
  );
};

export default ReadyOrders;
