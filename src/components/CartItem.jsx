import { useState } from "react";
import PropTypes from "prop-types";
import { useAuth } from "../services/authService";

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  const { user } = useAuth();
  const [quantity, setQuantity] = useState(item.quantity);
  const [total, setTotal] = useState(item.total);

  const handleRemoveFromCart = async () => {
    await onRemove(user.id, item.productID);
  };

  const handleUpdateQuantity = (e) => {
    const updatedQuantity = parseInt(e.target.value);
    setQuantity(updatedQuantity);

    const updatedTotal = updatedQuantity * item.price;
    setTotal(updatedTotal);

    // Update the parent component with the new quantity and total
    onQuantityChange(item.productID, updatedQuantity, updatedTotal);
  };

  return (
    <div className="border-b border-gray-300 py-4 flex">
      <img
        src={`/api/assets/${item.image.split(",")[0]}`}
        alt={item.productName}
        className="w-20 h-20 object-cover"
      />
      <div className="flex-1 ml-4">
        <div className="flex justify-between">
          <h2 className="text-lg font-bold">{item.productName}</h2>
          <p className="text-lg font-bold">${total.toFixed(2)}</p>
        </div>
        <p>Colour: {item.color}</p>
        <p>Size: {item.size}</p>
        <div className="flex items-center mt-2">
          <p>Quantity: </p>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleUpdateQuantity}
            className="w-12 ml-2 border border-gray-300 rounded p-1"
          />
        </div>
        <button
          type="button"
          onClick={handleRemoveFromCart}
          className="text-red-500 mt-2"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
};

export default CartItem;
