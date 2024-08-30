import PropTypes from "prop-types";
// import { useState } from "react";
import { Link } from "react-router-dom";

const OrderSummary = ({ order }) => {
  //   const location = useLocation();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-3">Summary</h2>

      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <p className="text-md font-semibold text-gray-700">Subtotal:</p>
          <p className="text-md font-semibold text-gray-700">
            ${order.total_amount}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-md font-semibold text-gray-700">Shipping:</p>
          <p className="text-md font-semibold text-gray-700">$8.00</p>
        </div>
        <hr className="my-5" />
        <div className="flex justify-between items-center">
          <p className="text-md font-semibold text-gray-700">Total:</p>
          <p className="text-md font-semibold text-gray-700">
            ${(order.total_amount * 8.0).toFixed(2)}
          </p>
        </div>
      </div>

      <Link to="/checkout">
        <button className="w-full bg-primary text-white p-2 mt-4 rounded-md">
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
};

OrderSummary.propTypes = {
  order: PropTypes.object.isRequired,
};

export default OrderSummary;
