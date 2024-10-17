import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "../services/authService";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { user } = useAuth(); // Get the user from the auth context
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const appEnv = import.meta.env.VITE_APP_ENV;
  const api = import.meta.env.VITE_API_URL;

  const fetchCartItems = async () => {
    const fetchUrl = appEnv === 'local' ? `/api/cart?id=${user.id}` : `${api}/cart?id=${user.id}`;

    const response = await fetch(fetchUrl);

    const data = await response.json();
    setCartItems(data);
  };

  const calculateTotal = (items) => {
    const newTotal = items.reduce((acc, item) => acc + item.total, 0);
    setTotal(newTotal);
  };

  useEffect(() => {
    if (user) {
      fetchCartItems();
      calculateTotal(cartItems);
    }
  }, [user]);

  const addToCart = async (id, quantity = 1) => {
    const fetchUrl = appEnv === 'local' ? `/api/cart?id=${user.id}` : `${api}/cart?id=${user.id}`;

    // Fetch current cart items
    const cartResponse = await fetch(fetchUrl);
    const cartData = await cartResponse.json();

    // Check if the product is already in the cart
    const productInCart = cartData.some((item) => item.productID === id);

    if (productInCart) {
      toast.info("Product is already in the cart.");
      return;
    }

    const addFetchUrl = appEnv === 'local' ? `/api/cart` : `${api}/cart`;

    const response = await fetch(addFetchUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        product_id: id,
        quantity: quantity,
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
    const fetchUrl = appEnv === 'local' ? `/api/cart` : `${api}/cart`;

    const response = await fetch(fetchUrl, {
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
    const fetchUrl = appEnv === 'local' ? `/api/cart` : `${api}/cart`;

    const response = await fetch(fetchUrl, {
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
        total,
        calculateTotal,
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
