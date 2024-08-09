import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import EmptyCart from "../assets/empty-cart.svg";
import CartItem from "../components/CartItem.jsx";
import CartSummary from "../components/CartSummary.jsx";
import Footer from "../components/Footer.jsx";
import { toast } from "react-toastify";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  let total = 0;

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

  const handleRemoveFromCart = async (cartId) => {
    const response = await fetch("/api/cart", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart_id: cartId,
      }),
    });

    const data = await response.json();

    if (data.status === "success") {
      toast.success(data.message);
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.cartID !== cartId)
      );
    }
  };

  if (cartItems) {
    total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  return (
    <>
      <Helmet>
        <title>Cart | African Vibes</title>
      </Helmet>

      <section className="max-w-7xl md:mx-auto px-5 md:px-10 lg:px-20">
        <h2 className="text-4xl font-bold mt-2 mb-4">Cart</h2>
        {cartItems.length > 0 ? (
          <div className="md:flex gap-8">
            <div className="w-full md:w-3/4">
              {cartItems.map((item) => (
                <CartItem
                  key={item.cartID}
                  item={item}
                  onRemove={handleRemoveFromCart}
                />
              ))}
            </div>
            <div className="w-full md:w-1/4">
              <CartSummary items={cartItems} total={total} />
            </div>
          </div>
        ) : (
          <div className="mb-20">
            <img
              src={EmptyCart}
              alt="empty cart"
              className="w-1/3 mx-auto mb-5"
            />
            <p className="text-3xl text-center">Cart is empty</p>
          </div>
        )}
        {/* <div className="w-full mt-8">
          <h2 className="text-2xl text-center font-bold mb-4">
            Recommended Products
          </h2>
         
        </div> */}
        <Footer />
      </section>
    </>
  );
};

export default Cart;
