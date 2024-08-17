import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import EmptyCart from "../assets/empty-cart.svg";
import CartItem from "../components/CartItem.jsx";
import CartSummary from "../components/CartSummary.jsx";
import Footer from "../components/Footer.jsx";
import { toast } from "react-toastify";
import { useAuth } from "../services/authService.jsx";

const Cart = () => {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  // let total;

  useEffect(() => {
    fetch(`/api/cart?id=${user.id}`)
      .then((response) => response.json())
      .then((data) => {
        setCartItems(data);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, []);

  const handleUpdateQuantity = async (productID, quantity) => {
    await fetch(`/api/cart`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        product_id: productID,
        quantity: quantity,
      }),
    });
  };

  const handleRemoveFromCart = async (productID) => {
    const response = await fetch("/api/cart", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id: productID,
      }),
    });

    const data = await response.json();

    if (data.status === "success") {
      toast.success(data.message);
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.productID !== productID)
      );
    }
  };

  // if (cartItems) {
  //   total = cartItems.reduce((sum, item) => sum + item.total, 0);
  // }

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
                  onQuantityChange={handleUpdateQuantity}
                  Total={setTotal}
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
