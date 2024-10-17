import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../services/cartService";
import { useAuth } from "../services/authService";
import { toast } from "react-toastify";
import { useProduct } from "../services/productService";

const ProductCard = ({ name, image, price, id /* rating*/ }) => {
  const { user } = useAuth();
  const { addToCart } = useCart();
  const { likedProducts, fetchLikedProducts } = useProduct();
  const [liked, setLiked] = useState(null);
  const appEnv = import.meta.env.VITE_APP_ENV;
  const api = import.meta.env.VITE_API_URL;

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

  useEffect(() => {
    if (likedProducts.length > 0) {
      setLiked(likedProducts.map((product) => product.product_id).includes(id));
    }
  }, [likedProducts, id]);

  const handleLike = async () => {
    const fetchUrl = appEnv === "local" ? `/api/likes` : `${api}/likes`;
    const like = !liked;
    const response = await fetch(fetchUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        like: like,
        userId: user.id,
        productId: id,
      }),
    });
    const data = await response.json();
    setLiked(like);

    if (data.status) {
      toast.success(data.message);
      fetchLikedProducts();
    }
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4 flex-shrink-0 w-[250px]">
      <div className="relative">
        <Link to={`/shop/products/${id}`}>
          <img
            src={image}
            alt={name}
            className="h-48 w-full object-cover rounded-t-md"
          />
        </Link>
        {liked ? (
          <FaHeart
            className="text-red-500 font-bold bg-white rounded-full p-1 cursor-pointer text-2xl absolute top-2 right-2 z-10"
            onClick={handleLike}
          />
        ) : (
          <FaRegHeart
            className="text-black font-bold bg-white rounded-full p-1 cursor-pointer text-2xl absolute top-2 right-2 z-10"
            onClick={handleLike}
          />
        )}
      </div>

      <Link to={`/shop/products/${id}`}>
        <h3 className="text-lg font-semibold mt-4">{name}</h3>
        <p className="text-gray-500">{price}</p>
      </Link>

      <button
        type="button"
        onClick={handleAddToCart}
        className="mt-2 w-full bg-primary text-white py-2 rounded-md"
      >
        Add to Cart
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.number,
  // rating: PropTypes.number.isRequired,
};

export default ProductCard;
