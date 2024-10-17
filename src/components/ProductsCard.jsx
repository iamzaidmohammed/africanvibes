import PropTypes from "prop-types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../services/authService";
import { useCart } from "../services/cartService";

const ProductsCard = ({ image, name, price, id }) => {
  const { user } = useAuth();
  const { addToCart } = useCart();

  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = async () => {
    if (!user) {
      navigate("/users/signin", {
        state: { from: location },
      });
      return;
    }

    addToCart(id);
  };

  return (
    <div className="p-4">
      <Link to={`/shop/products/${id}`}>
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-contain mb-2"
        />
        <div className="flex items-center justify-between px-2">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-primary font-bold">${price}</p>
        </div>
      </Link>
      <button
        type="button"
        onClick={handleAddToCart}
        className="mt-2 px-4 py-2 w-full bg-primary text-white rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductsCard;

ProductsCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  // product: PropTypes.object.isRequired,
};
