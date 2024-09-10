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

  const fetchOrderDetails = async () => {
    try {
      const response = await fetch(`/api/orders?id=${user.id}`);
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
    if (orders.order) {
      console.log("order exists");
      fetchOrderDetails();
      return { status: "success" };
    } else {
      const response = await fetch(`/api/orders`, {
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
    const response = await fetch("/api/orders", {
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
