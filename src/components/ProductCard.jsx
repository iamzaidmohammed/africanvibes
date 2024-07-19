import PropTypes from "prop-types";
import CardImage from "../assets/card-img.jpg";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";

const CustomRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#775454",
  },
});

const ProductCard = ({ name, price, rating }) => {
  return (
    <div className="bg-white w-28 sm:w-44 md:w-56 flex-shrink-0">
      <img src={CardImage} className="" alt="product image" />
      <div className="flex flex-col items-center">
        <h3 className="text-lg">{name}</h3>
        <p>{price}</p>
        <CustomRating name="read-only" value={rating} readOnly />
        <button className="bg-primary text-white p-2 rounded-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default ProductCard;
