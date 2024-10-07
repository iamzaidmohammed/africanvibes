import { useEffect, useState } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaStar } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useCart } from "../services/cartService";
import { useAuth } from "../services/authService";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useProduct } from "../services/productService";
import { toast } from "react-toastify";
import Loading from "../components/Loading";

const ProductDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { addToCart } = useCart();
  const { likedProducts, fetchLikedProducts } = useProduct();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const getSingleProduct = async () => {
    try {
      const response = await fetch(`/backend/products?id=${id}`);
      const data = await response.json();
      setProduct(() => data[0]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product details:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  useEffect(() => {
    if (likedProducts.length > 0) {
      setLiked(
        likedProducts
          .map((product) => product.product_id)
          .includes(parseInt(id))
      );
    }
  }, [likedProducts, id]);

  if (loading) {
    return <Loading />;
  }

  const handleLike = async () => {
    const like = !liked;

    const response = await fetch("/backend/likes", {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleAddToCart = async () => {
    if (!user) {
      navigate("/users/signin", {
        state: { from: location },
      });
      return;
    }

    addToCart(product.id, parseInt(quantity));
  };

  const updateQuantity = (e) => {
    const newQuatity = parseInt(e.target.value);
    setQuantity(newQuatity);
  };

  return (
    <>
      <Helmet>
        <title>
          {product.name
            ? `${product.name} | African Vibes`
            : "Product | African Vibes"}
        </title>
      </Helmet>

      <div className="max-w-7xl md:mx-auto px-5 md:px-10 lg:px-20">
        <div className="bg-primary h-12 sm:h-52 flex items-center justify-center mb-4 text-sm sm:text-xl md:text-2xl text-white rounded-md">
          <Link to="/shop/products" className="hover:underline">
            Products
          </Link>{" "}
          /<span>{product.name}</span>
        </div>

        <Link to="/shop/products" className="flex items-center gap-1 my-2">
          <FaArrowLeftLong />{" "}
          <p className="hover:underline">Back to products</p>
        </Link>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            {product.imgs && product.imgs.includes(",") ? (
              <Slider {...settings}>
                {product.imgs.split(",").map((img, index) => (
                  <div key={index} inert="true">
                    <img
                      src={`/backend/assets/${img}`}
                      alt={product.name}
                      className="w-full rounded-lg"
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              <div inert="true">
                <img
                  src={`/backend/assets/${product.imgs}`}
                  alt={product.name}
                  className="w-full rounded-lg"
                />
              </div>
            )}
          </div>

          <div className="md:w-1/2">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="mt-2 text-gray-600"></p>

            <div className="flex items-center gap-28 mt-4">
              <p className="text-3xl font-bold text-gray-900">
                ${product.price}
              </p>

              {liked ? (
                <FaHeart
                  className="text-red-500 font-bold rounded-full p-1 cursor-pointer text-3xl  top-2 right-2 z-10"
                  onClick={handleLike}
                />
              ) : (
                <FaRegHeart
                  className="text-black font-bold rounded-full p-1 cursor-pointer text-3xl  top-2 right-2 z-10"
                  onClick={handleLike}
                />
              )}
            </div>

            <p className="mt-1 text-gray-600">
              Product Code: {product.code} | {product.stock} left in stock
            </p>

            <div className="flex items-center mt-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="ml-2 text-gray-600">4.9 (493 reviews) 621 Sold</p>
            </div>

            <div className="mt-4 flex items-center">
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={updateQuantity}
                className="w-16 p-2 text-center border rounded-md"
              />
              <button className="ml-4 px-4 py-2 text-white bg-primary rounded-md">
                Buy Now
              </button>
              <button
                className="ml-2 px-4 py-2 bg-primary text-white rounded-md"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-8 bg-gray-100 p-4 rounded-md">
              <h2 className="text-lg font-bold">Coupon & Discount</h2>
              <div className="mt-2 text-gray-700">
                <p>Get Extra 15% Off on purchase of 2+ Styles</p>
                <p>Use Code: TWD45</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <button className="mr-4 px-4 py-2 border-b-2 border-red-500 text-red-500 font-bold">
            Description
          </button>
          <button className="mr-4 px-4 py-2 text-gray-700 font-bold">
            Additional Information
          </button>
          <button className="px-4 py-2 text-gray-700 font-bold">Reviews</button>
        </div>
        <div className="mt-4 text-gray-700">
          <h3 className="font-bold">About this Item</h3>
          <p className="mt-2">{product.desc}</p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductDetails;
