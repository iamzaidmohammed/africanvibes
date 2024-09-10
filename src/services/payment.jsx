import { createContext, useContext } from "react";
import PropTypes from "prop-types";

const PaymentContext = createContext();

export const usePayment = () => useContext(PaymentContext);

export const PaymentProvider = ({ children }) => {
  const verifyPayment = async (reference, orderId, amount, userId, cartId) => {
    try {
      const response = await fetch("/api/payment", {
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
