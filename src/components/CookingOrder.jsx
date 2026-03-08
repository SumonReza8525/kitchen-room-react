import React from "react";

const CookingOrder = ({ order, setNewOrders }) => {
  const handleReady = (order) => {
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setNewOrders((prev) =>
      prev.map((item) =>
        item.id === order.id && item.status === "Currently Cooking"
          ? { ...item, status: "Ready to Serve", readyTime: time }
          : item,
      ),
    );
  };
  //
  return (
    <div className="bg-cyan-200 p-3 rounded-xl space-y-1.5">
      <h2 className="text-amber-500 font-semibold text-lg">
        {order.order_title}
      </h2>
      <p className="text-lg font-bold">Quantity : {order.quantity}</p>
      <p className="text-sm text-gray-500">{order.special_instruction}</p>
      <button
        onClick={() => handleReady(order)}
        className="px-3 py-1.5 cursor-pointer rounded bg-amber-500 font-semibold text-sm"
      >
        Cooked?
      </button>
    </div>
  );
};

export default CookingOrder;
