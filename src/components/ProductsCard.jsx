import PropTypes from "prop-types";

const ProductsCard = ({ image, name, price }) => {
  return (
    <div className="p-4">
      <img src={image} alt={name} className="w-full h-40 object-contain mb-2" />
      <div className="flex items-center justify-between px-2">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-primary font-bold">${price}</p>
      </div>
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
};
