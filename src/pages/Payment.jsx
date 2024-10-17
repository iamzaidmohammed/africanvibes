import PaystackPop from "@paystack/inline-js";
import { usePayment } from "../services/payment.jsx";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../services/order.jsx";
import { useState } from "react";
import { useAuth } from "../services/authService.jsx";
import { useCart } from "../services/cartService.jsx";
import Loading from "../components/Loading.jsx";

const Payment = () => {
  const PAYSTACK_PUBLIC_KEY = import.meta.env.VITE_PAYSTACK_KEY;
  const popup = new PaystackPop();
  const { verifyPayment } = usePayment();
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { orders } = useOrder();
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handlePaymentSuccess = async (transaction) => {
    const payment = await verifyPayment(
      transaction.reference,
      orders.order.orderId,
      orders.order.totalAmount * 100,
      user.id,
      cartItems[0].cartID
    );

    setLoading(false);

    let count = 0;

    while (payment.status !== "success" && count < 3) {
      await verifyPayment(
        transaction.reference,
        orders.order.orderId,
        orders.order.totalAmount * 100,
        user.id,
        cartItems[0].cartID
      );

      setLoading(false);
      count++;
    }

    if (payment.status === "success") {
      navigate("/checkout");
    }
  };

  popup.newTransaction({
    key: PAYSTACK_PUBLIC_KEY,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    amount: orders.order.totalAmount * 100,
    onSuccess: handlePaymentSuccess,
  });

  if (loading) {
    return <Loading />;
  }

  return <div>Payment</div>;
};

export default Payment;
