import ProductCard from "./ProductCard";
import img1 from "../assets/card-img.jpg";
import img2 from "../assets/sec-img.jpg";

const featuredItems = [
  { img: img1, title: "Tie & Dye", price: "$40.50" },
  {
    img: img2,
    title: "Traditional Art",
    price: "$50.50",
  },
  { img: img1, title: "Tie & Dye", price: "$40.50" },
  {
    img: img2,
    title: "Traditional Art",
    price: "$50.50",
  },
  { img: img2, title: "Tie & Dye", price: "$40.50" },

  // Add more items as needed
];

const FeaturedItems = () => {
  return (
    <div className="py-8">
      <div className="flex items-center justify-center flex-col mb-6">
        <h2 className="text-center text-4xl mb-1">Featured Items</h2>
        <div className="bg-black w-24 h-0.5"></div>
      </div>

      <div className="flex gap-4 overflow-x-auto px-4">
        {featuredItems.map((item, index) => (
          <ProductCard
            key={index}
            image={item.img}
            name={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedItems;
