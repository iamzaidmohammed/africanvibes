import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useAuth } from "./authService";
import { useCart } from "./cartService";

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const { user } = useAuth();
  const { total } = useCart();
  const [orders, setOrders] = useState({});

  const fetchOrderDetails = async () => {
    try {
      const response = await fetch(`/api/orders?id=${user.id}`);
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error("Error fetching order details:", error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchOrderDetails();
    }
  }, [user]);

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

  return (
    <OrderContext.Provider value={{ orders, createOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

OrderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
