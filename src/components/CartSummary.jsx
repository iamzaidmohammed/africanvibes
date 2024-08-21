import PropTypes from "prop-types";
// import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const CartSummary = ({ items, total }) => {
  const location = useLocation();

  return (
    <div className="border border-gray-300 p-4 rounded-md">
      <h2 className="text-lg font-bold">Cart Summary</h2>

      {items.map((item) => (
        <div key={item.productID} className="flex justify-between mt-4">
          <p>{item.productName}</p>
          <p>{item.total.toFixed(2)}</p>
        </div>
      ))}

      <div className="border-t border-gray-300 my-2"></div>

      <div className="flex justify-between font-bold">
        <p>Total</p>
        <p>₵{total.toFixed(2)}</p>
      </div>

      <Link
        to={location.pathname === "/shop/cart" ? "/shipping-info" : "/checkout"}
      >
        <button className="w-full bg-primary text-white p-2 mt-4 rounded-md">
          Proceed to Checkout
        </button>
      </Link>

      {location.pathname === "/shop/cart" && (
        <Link to="/shop/products">
          <button className="w-full bg-gray-300 text-black p-2 mt-2 rounded-md">
            Continue Shopping
          </button>
        </Link>
      )}
    </div>
  );
};

CartSummary.propTypes = {
  total: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
};

export default CartSummary;
