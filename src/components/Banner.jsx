import { Link } from "react-router-dom";

// src/components/Banner.js
const Banner = () => {
  return (
    <section className="bg-secondary p-6 md:px-12 rounded-lg flex items-center justify-between flex-col md:flex-row mt-6">
      <div className="max-w-md mb-4 md:mb-0">
        <p className="text-lg text-gray-800 mb-4">
          Our platform celebrates the rich cultural heritage and craftsmanship
          of communities from around the world, offering you unique, handcrafted
          items that tell a story.
        </p>
        <Link
          to="/shop/products"
          className="mt-4 bg-primary text-white px-4 py-2 rounded-md"
        >
          Shop Now
        </Link>
      </div>
      <img
        src="/src/assets/sec-img.jpg"
        alt="Pottery"
        className="w-full md:w-40 h-auto rounded-lg object-cover"
      />
    </section>
  );
};

export default Banner;
