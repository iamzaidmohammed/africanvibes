import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

// src/components/NewCollections.js
const newCollections = [
  { img: "/src/assets/card-img.jpg", title: "Tie & Dye", price: "$40.50" },
  {
    img: "/src/assets/sec-img.jpg",
    title: "Traditional Art",
    price: "$50.50",
  },
  { img: "/src/assets/card-img.jpg", title: "Tie & Dye", price: "$40.50" },
  {
    img: "/src/assets/sec-img.jpg",
    title: "Traditional Art",
    price: "$50.50",
  },
  { img: "/src/assets/sec-img.jpg", title: "Tie & Dye", price: "$40.50" },
  { img: "/src/assets/card-img.jpg", title: "Tie & Dye", price: "$40.50" },
  // Add more collections as needed
];

const NewCollections = () => {
  return (
    <div className="py-8">
      <div className="flex items-center justify-center flex-col mb-6">
        <h2 className="text-center text-4xl mb-1">New Collections</h2>
        <div className="bg-black w-24 h-0.5"></div>
      </div>
      <div className="grid grid-cols-1 gap-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {newCollections.map((item, index) => (
          <ProductCard
            key={index}
            image={item.img}
            name={item.title}
            price={item.price}
          />
        ))}
      </div>
      <div className="text-center mt-4">
        <Link
          to="/shop/products"
          className="bg-primary text-white py-2 px-20 rounded-md"
        >
          Browse More
        </Link>
      </div>
    </div>
  );
};

export default NewCollections;
