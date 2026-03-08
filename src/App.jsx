import React, { useEffect, useState } from "react";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import OrdersContainer from "./components/OrdersContainer";

const App = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const res = await fetch("/orders.json");
        if (!res.ok) throw new Error("Data can not fetch");
        const data = await res.json();
        setOrders(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);
  if (loading) return <p>Loading,,</p>;
  if (error) return <p>Error : {error}</p>;

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <OrdersContainer orders={orders}></OrdersContainer>
    </div>
  );
};

export default App;
