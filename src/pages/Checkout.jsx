import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useCart } from "../services/cartService";

const Checkout = () => {
  const { fetchCartItems } = useCart();
  const navigate = useNavigate();

  const fetchCart = () => {
    fetchCartItems();
    navigate("/");
  };

  return (
    <>
      <Helmet>
        <title>Order successful | African Vibes</title>
      </Helmet>
      <section className="flex flex-col items-center justify-center h-full text-center mt-10">
        <h2 className="text-4xl font-bold mb-4">Congratulations</h2>

        <p className="text-xl mb-4">Your Purcahase is successful!</p>

        <p className="text-lg mb-8">
          Thank you for entrusting your care to us. Please be patient as we
          process your items as quickly as possible.
        </p>
        <button
          onClick={fetchCart}
          className="px-4 py-2 bg-primary text-white rounded"
        >
          Go to Homepage
        </button>
      </section>
    </>
  );
};

export default Checkout;
