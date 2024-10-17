import { useState } from "react";
import CartItem from "../components/CartItem";
import ShippingInfo from "../components/ShippingInfo";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { useCart } from "../services/cartService";

const Shipping = () => {
  const { cartItems, updateCartItem, removeFromCart } = useCart();
  const [items, setItems] = useState(cartItems);

  const handleQuantityChange = (productID, quantity, updatedTotal) => {
    const updatedItems = items.map((item) =>
      item.productID === productID
        ? { ...item, quantity, total: updatedTotal }
        : item
    );
    setItems(updatedItems);

    // Optionally update the server/cart context with the new quantity
    updateCartItem(productID, quantity);
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
            <div className="md:flex gap-8 mt-16 border-l-2 px-2">
              <div className="w-full">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.productID}
                    item={item}
                    onRemove={removeFromCart}
                    onQuantityChange={handleQuantityChange}
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
