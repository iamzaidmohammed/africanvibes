import PropTypes from "prop-types";

const ProductCard = ({ name, image, price /* rating*/ }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 flex-shrink-0 w-[250px]">
      <img
        src={image}
        alt={name}
        className="h-48 w-full object-cover rounded-t-md"
      />
      <h3 className="text-lg font-semibold mt-4">{name}</h3>
      <p className="text-gray-500">{price}</p>
      <button className="mt-2 w-full bg-primary text-white py-2 rounded-md">
        Add to Cart
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  // rating: PropTypes.number.isRequired,
};

export default ProductCard;
