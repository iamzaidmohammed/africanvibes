import PropTypes from "prop-types";

const ProductsCard = ({ image, title, price }) => {
  return (
    <div className="p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-contain mb-2"
      />
      <div className="flex items-center justify-between px-2">
        <h3 className="font-semibold">{title}</h3>
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
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
