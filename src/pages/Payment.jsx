// import { useEffect, useState } from "react";
// import PaymentForm from "../components/PaymentForm";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
// import CartSummary from "../components/CartSummary";
// import { useCart } from "../services/cartService";
import OrderDetails from "../components/OrderDetails";
import OrderSummary from "../components/OrderSummary.jsx";
// import { useAuth } from "../services/authService";
import { useOrder } from "../services/order";

const Payment = () => {
  const { orders } = useOrder();
  const order = orders.order;
  const items = orders.orderItems;

  return (
    <>
      <Helmet>
        <title>Payment Details | African Vibes</title>
      </Helmet>

      <main className="max-w-7xl md:mx-auto px-5 md:px-10 lg:px-20">
        <section className="flex justify-between gap-3 flex-col md:flex-row pb-10">
          <OrderDetails order={order} items={items} />

          <div className="w-full md:w-1/3">
            <OrderSummary order={order} />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Payment;
