import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import EmptyCart from "../assets/empty-cart.svg";
import CartItem from "../components/CartItem.jsx";
import CartSummary from "../components/CartSummary.jsx";
import Footer from "../components/Footer.jsx";
import { useCart } from "../services/cartService.jsx";

const Cart = () => {
  const { cartItems, calculateTotal, total, updateCartItem, removeFromCart } =
    useCart();
  const [items, setItems] = useState(cartItems);
  // const [total, setTotal] = useState(0);

  useEffect(() => {
    setItems(cartItems);
    calculateTotal(cartItems);
  }, [cartItems]);

  // const calculateTotal = (items) => {
  //   const newTotal = items.reduce((acc, item) => acc + item.total, 0);
  //   setTotal(newTotal);
  // };

  const handleQuantityChange = (productID, quantity, updatedTotal) => {
    const updatedItems = items.map((item) =>
      item.productID === productID
        ? { ...item, quantity, total: updatedTotal }
        : item
    );
    setItems(updatedItems);
    calculateTotal(updatedItems);
    updateCartItem(productID, quantity);
  };

  return (
    <>
      <Helmet>
        <title>Cart | African Vibes</title>
      </Helmet>

      <section className="max-w-7xl md:mx-auto px-5 md:px-10 lg:px-20">
        <h2 className="text-4xl font-bold mt-2 mb-4">Cart</h2>
        {items.length > 0 ? (
          <div className="md:flex gap-8">
            <div className="w-full md:w-3/4">
              {items.map((item) => (
                <CartItem
                  key={item.productID}
                  item={item}
                  onRemove={removeFromCart}
                  onQuantityChange={handleQuantityChange}
                />
              ))}
            </div>
            <div className="w-full md:w-1/4">
              <CartSummary items={items} total={total} />
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
        <Footer />
      </section>
    </>
  );
};

export default Cart;
