import { createContext, useContext } from "react";
import PropTypes from "prop-types";

const PaymentContext = createContext();

export const usePayment = () => useContext(PaymentContext);

export const PaymentProvider = ({ children }) => {
  const appEnv = import.meta.env.VITE_APP_ENV;
  const api = import.meta.env.VITE_API_URL;

  const verifyPayment = async (reference, orderId, amount, userId, cartId) => {
    try {
      const fetchUrl = appEnv === 'local' ? '/api/payment' : `${api}/payment`;

      const response = await fetch(fetchUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reference: reference,
          orderId: orderId,
          amount: amount,
          userId: userId,
          cartId: cartId,
        }),
      });

      const data = await response.json();

      return data;
    } catch (error) {
      console.error("Payment verification failed", error);
    }
  };

  return (
    <PaymentContext.Provider value={{ verifyPayment }}>
      {children}
    </PaymentContext.Provider>
  );
};

PaymentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
