import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useAuth } from "./authService";

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const { user } = useAuth();
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

  return (
    <OrderContext.Provider value={{ orders }}>{children}</OrderContext.Provider>
  );
};

OrderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
