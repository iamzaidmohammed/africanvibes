import { Helmet } from "react-helmet";
import CartItem from "../components/CartItem.jsx";
import CartSummary from "../components/CartSummary.jsx";
// import RecommendedProduct from "../components/RecomendedProducts.jsx";
import Footer from "../components/Footer.jsx";
import { useState, useEffect } from "react";
// import { useCart } from "../services/cartService.jsx";
// import { useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("/api/routes/cart.php?getCartItems=true")
      .then((response) => response.json())
      .then((data) => {
        setCartItems(() => data);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, []);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Helmet>
        <title>Cart | African Vibes</title>
      </Helmet>

      <section className="max-w-7xl md:mx-auto px-5 md:px-10 lg:px-20">
        <div className="md:flex gap-8">
          <div className="w-full md:w-3/4">
            {cartItems.map((item) => (
              <CartItem key={item.cartID} item={item} />
            ))}
          </div>
          <div className="w-full md:w-1/4">
            <CartSummary items={cartItems.map((item) => item)} total={total} />
          </div>
        </div>
        <div className="w-full mt-8">
          <h2 className="text-2xl text-center font-bold mb-4">
            Recommended Products
          </h2>
          {/* <div className="flex gap-4 overflow-x-auto">
            {recommendedProducts.map((product, index) => (
              <RecommendedProduct key={index} product={product} />
            ))}
          </div> */}
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Cart;

// const { cart } = useCart();

// console.log(cart.items);

// const recommendedProducts = [
//   {
//     name: "Mugs and Plates",
//     price: 300,
//     image: "path/to/mugs-plates-image.jpg",
//   },
//   {
//     name: "Vase",
//     price: 250,
//     image: "path/to/vase-image.jpg",
//   },
//   {
//     name: "Jars",
//     price: 200,
//     image: "path/to/jars-image.jpg",
//   },
//   {
//     name: "Mugs and Plates",
//     price: 300,
//     image: "path/to/mugs-plates-image.jpg",
//   },
// ];
