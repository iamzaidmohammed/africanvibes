import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import ShippingInfo from "../components/ShippingInfo";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const Shipping = () => {
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

  return (
    <>
      <Helmet>
        <title>Shipping Information | African Vibes</title>
      </Helmet>

      <main className="max-w-7xl md:mx-auto px-5 md:px-10 lg:px-20">
        <section className="flex justify-between flex-col sm:flex-row pb-10">
          <ShippingInfo />

          {cartItems.length > 0 && (
            <div className="md:flex gap-8 mt-5">
              <div className="w-full">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.cartID}
                    item={item}
                    onRemove={handleRemoveFromCart}
                  />
                ))}
              </div>
            </div>
          )}
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Shipping;
