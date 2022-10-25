import React from "react";
import Axios from "axios";

import Card from "../components/Card";
import AppContext from "../context";

function Orders() {
  const { onAddToFavourite, onAddToCart } = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await Axios.get(
          "https://6352ea05d0bca53a8eb7bf0e.mockapi.io/orders"
        );
        setOrders(data.reduce((prev, obj) => [...prev, obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Orders ERROR");
      }
    })();
  }, []);
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My Orders</h1>
      </div>

      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(12)] : orders).map((item, index) => (
          <Card key={index} loading={isLoading} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
