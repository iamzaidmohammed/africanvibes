import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CartSummary = ({ total }) => (
  <div className="border border-gray-300 p-4 rounded-md">
    <h2 className="text-lg font-bold">Cart Summary</h2>
    <div className="flex justify-between mt-4">
      <p>Pottery</p>
      <p>₵650</p>
    </div>
    <div className="flex justify-between">
      <p>Sculptures</p>
      <p>₵650</p>
    </div>
    <div className="flex justify-between">
      <p>Tie and Dye</p>
      <p>₵650</p>
    </div>
    <div className="flex justify-between">
      <p>Mortar & Pestle</p>
      <p>₵650</p>
    </div>
    <div className="border-t border-gray-300 my-2"></div>
    <div className="flex justify-between font-bold">
      <p>Total</p>
      <p>₵{total}</p>
    </div>

    <Link to="/checkout">
      <button className="w-full bg-primary text-white p-2 mt-4 rounded-md">
        Proceed to Checkout
      </button>
    </Link>

    <Link to="/shop/products">
      <button className="w-full bg-gray-300 text-black p-2 mt-2 rounded-md">
        Continue Shopping
      </button>
    </Link>
  </div>
);

CartSummary.propTypes = {
  total: PropTypes.number.isRequired,
};

export default CartSummary;
