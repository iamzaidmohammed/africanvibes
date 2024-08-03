import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductsCard = ({ image, name, price, product }) => {
  return (
    <div className="p-4">
      <Link to={`/shop/products/${product}`}>
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
      <button className="mt-2 px-4 py-2 w-full bg-primary text-white rounded">
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
  product: PropTypes.number.isRequired,
};
