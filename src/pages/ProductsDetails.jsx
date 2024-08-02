import { Helmet } from "react-helmet";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const ProductDetails = () => {
  return (
    <>
      <Helmet>
        <title>Products Details | African Vibes</title>
      </Helmet>

      <div className="max-w-7xl md:mx-auto px-5 md:px-10 lg:px-20">
        <div className="bg-primary h-12 sm:h-52 flex items-center justify-center mb-4 text-sm sm:text-xl md:text-2xl text-white rounded-md">
          <NavLink to="#" className="hover:underline">
            Products
          </NavLink>{" "}
          /
          <NavLink to="#" className="hover:underline">
            Pottery
          </NavLink>{" "}
          /<span className="">Product Details</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img
              src="https://via.placeholder.com/400"
              alt="Pottery"
              className="w-full rounded-lg"
            />
            <div className="flex mt-4 gap-2 overflow-x-scroll">
              <img
                src="https://via.placeholder.com/100"
                alt="Thumbnail"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <img
                src="https://via.placeholder.com/100"
                alt="Thumbnail"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <img
                src="https://via.placeholder.com/100"
                alt="Thumbnail"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <img
                src="https://via.placeholder.com/100"
                alt="Thumbnail"
                className="w-24 h-24 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <h1 className="text-2xl font-bold">Pottery</h1>
            <p className="mt-2 text-gray-600">
              This piece is characterized by intricate designs, traditional
              patterns, and cultural significance, making it not only functional
              but also beautiful pieces of art.
            </p>
            <p className="mt-4 text-3xl font-bold text-gray-900">$40.56</p>
            <p className="mt-1 text-gray-600">Product Code: CDMP1 In Stock</p>

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
                defaultValue="1"
                className="w-16 p-2 text-center border rounded-md"
              />
              <button className="ml-4 px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md">
                Buy Now
              </button>
              <button className="ml-2 px-4 py-2 border border-gray-300 text-gray-900 hover:bg-gray-100 rounded-md">
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
          <p className="mt-2">
            Our Pottery Collection, where traditional craftsmanship meets
            artistic elegance. Each piece is meticulously handcrafted by skilled
            artisans, reflecting the rich cultural heritage and timeless beauty
            of indigenous pottery techniques. We take pride in offering a
            diverse and exquisite collection of pottery that showcases the
            richness of cultural heritage and masterful craftsmanship of
            indigenous artisans. Our pottery items are not just functional but
            also beautiful works of art that tell stories of tradition, skill,
            and creativity.
          </p>
          <p className="mt-2">
            Pottery is one of the oldest human crafts, with a history that
            stretches back thousands of years. It involves the shaping and
            firing of clay to create durable and often beautiful items. These
            can range from everyday functional objects like bowls and mugs to
            intricate decorative pieces and sculptures. Pottery is not just an
            art form but a cultural heritage, reflecting the traditions,
            stories, and skills of different communities around the world.
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ProductDetails;
