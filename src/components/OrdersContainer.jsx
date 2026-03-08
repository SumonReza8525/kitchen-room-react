import React, { useState } from "react";
import ShowCard from "./ShowCard";
import Container from "./Container";
import Order from "./Order";
import CookingOrder from "./CookingOrder";
import ReadyOrders from "./ReadyOrders";

const OrdersContainer = ({ orders }) => {
  const orderState = ["Current Orders", "Currently Cooking", "Ready to Serve"];
  // console.log(orders);

  const [newOrders, setNewOrders] = useState(
    orders.map((order) => ({ ...order, status: "Current Orders" })),
  );
  // console.log(newOrders);

  const currentOrders = newOrders.filter(
    (order) => order.status === "Current Orders",
  );
  const cookingOrders = newOrders.filter(
    (order) => order.status === "Currently Cooking",
  );
  // console.log(cookingOrders);

  const readyToServe = newOrders.filter(
    (order) => order.status === "Ready to Serve",
  );

  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {orderState.map((item, index) => (
            <ShowCard
              currentOrders={currentOrders}
              cookingOrders={cookingOrders}
              readyToServe={readyToServe}
              item={item}
              key={index}
            ></ShowCard>
          ))}
        </div>

        <div className=" min-h-150 my-14 lg:my-20 grid grid-cols-10 gap-10">
          {/* current orders container */}
          <div className=" col-span-full lg:col-span-7">
            <p className="text-2xl font-bold mb-6">Current Orders</p>
            <div className=" p-2 grid grid-cols-1 lg:grid-cols-2 gap-6 ">
              {currentOrders.length < 1 ? (
                <div className="text-2xl font-bold min-h-26 flex justify-center items-center lg:col-span-full">
                  No Order
                </div>
              ) : (
                currentOrders.map((order) => (
                  <Order
                    key={order.id}
                    order={order}
                    setNewOrders={setNewOrders}
                  />
                ))
              )}
            </div>
          </div>
          {/* Ready and cooking order container */}
          <div className=" h-full col-span-full lg:col-span-3 p-2 space-y-6">
            <div>
              <p className="text-2xl font-bold mb-6">Cooking</p>
              <div className="flex flex-col gap-3">
                {cookingOrders.map((order) => (
                  <CookingOrder
                    key={order.id}
                    order={order}
                    setNewOrders={setNewOrders}
                  ></CookingOrder>
                ))}
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold mb-6">Ready to Serve</p>
              <div className="space-y-3.5">
                {readyToServe.map((order) => (
                  <ReadyOrders key={order.id} order={order}></ReadyOrders>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OrdersContainer;
