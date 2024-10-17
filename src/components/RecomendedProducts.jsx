import PropTypes from "prop-types";
import img from "../assets/offer-1.png";

const RecommendedProduct = ({ product }) => (
  <div className="w-40 flex-shrink-0">
    <img
      src={img}
      alt={product.name}
      className="w-full h-40 object-cover rounded-md"
    />
    <h3 className="text-center mt-2">{product.name}</h3>
    <p className="text-center font-bold">₵{product.price}</p>
    <button className="w-full bg-primary text-white p-2 mt-2 rounded-md">
      Add to Cart
    </button>
  </div>
);

RecommendedProduct.propTypes = {
  product: PropTypes.object.isRequired,
};

export default RecommendedProduct;
