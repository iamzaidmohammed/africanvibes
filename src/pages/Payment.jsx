import { useEffect, useState } from "react";
import PaymentForm from "../components/PaymentForm";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import CartSummary from "../components/CartSummary";

const Payment = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("/api/cart?getCartItems=true")
      .then((response) => response.json())
      .then((data) => {
        setCartItems(data);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, []);

  let total = 0;

  if (cartItems) {
    total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  return (
    <>
      <Helmet>
        <title>Payment Details | African Vibes</title>
      </Helmet>

      <main className="max-w-7xl md:mx-auto px-5 md:px-10 lg:px-20">
        <section className="flex justify-between flex-col sm:flex-row pb-10">
          <PaymentForm />

          <div className="w-1/3">
            <CartSummary items={cartItems} total={total} />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Payment;
