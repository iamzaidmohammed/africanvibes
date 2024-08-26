import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "../services/authService";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { user } = useAuth(); // Get the user from the auth context
  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = async () => {
    const response = await fetch(`/api/cart?id=${user.id}`);

    const data = await response.json();
    setCartItems(data);
  };

  useEffect(() => {
    // Fetch cart items from backend if the user is logged in
    if (user) {
      fetchCartItems();
    }
  }, [user]);

  const addToCart = async (id) => {
    // Fetch current cart items
    const cartResponse = await fetch(`/api/cart?id=${user.id}`);
    const cartData = await cartResponse.json();

    // Check if the product is already in the cart
    const productInCart = cartData.some((item) => item.productID === id);

    if (productInCart) {
      toast.info("Product is already in the cart.");
      return;
    }

    const response = await fetch("/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        product_id: id,
        quantity: 1,
      }),
    });

    const data = await response.json();

    if (data.status === "success") {
      toast.success(data.message);
      fetchCartItems();
    } else {
      toast.error(data.message);
    }
  };

  const updateCartItem = async (productID, quantity) => {
    const response = await fetch(`/api/cart`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id: productID,
        quantity: quantity,
      }),
    });

    const data = await response.json();

    // console.log(data);
    if (data.status === "success") {
      fetchCartItems();
    }
  };

  const removeFromCart = async (userId, productID) => {
    const response = await fetch("/api/cart", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
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

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateCartItem,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
