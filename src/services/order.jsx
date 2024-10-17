import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useAuth } from "./authService";
import { useCart } from "./cartService";
import Loading from "../components/Loading";

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const { user } = useAuth();
  const { total } = useCart();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const appEnv = import.meta.env.VITE_APP_ENV;
  const api = import.meta.env.VITE_API_URL;

  const fetchOrderDetails = async () => {
    const fetchUrl = appEnv === 'local' ? `/api/orders?id=${user.id}` : `${api}/orders?id=${user.id}`;

    try {
      const response = await fetch(fetchUrl);
      const data = await response.json();
      setOrders(() => data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching order details:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchOrderDetails();
    } else {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return <Loading />;
  }

  const createOrder = async (userId, totalAmount = total) => {
    const fetchUrl = appEnv === 'local' ? `/api/orders` : `${api}/orders`;

    if (orders.order) {
      console.log("order exists");
      fetchOrderDetails();
      return { status: "success" };
    } else {
      const response = await fetch(fetchUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          totalAmount: totalAmount,
        }),
      });
      const data = await response.json();

      fetchOrderDetails();
      return { status: data.status };
    }
  };

  const updateOrderItems = async (userId) => {
    const fetchUrl = appEnv === 'local' ? `/api/orders` : `${api}/orders`;

    const response = await fetch(fetchUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
      }),
    });

    const data = response.json();

    return { status: data.status };
  };

  return (
    <OrderContext.Provider value={{ orders, createOrder, updateOrderItems }}>
      {children}
    </OrderContext.Provider>
  );
};

OrderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
