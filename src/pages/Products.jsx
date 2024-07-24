import FilterSection from "../components/Filters.jsx";
import ProductsCard from "../components/ProductsCard";
import FlashSale from "../components/FlashSale";
import Footer from "../components/Footer.jsx";
import { Helmet } from "react-helmet";

const Products = () => {
  const products = [
    { image: "/assets/product-1.jpg", title: "Product 1", price: 450 },
    { image: "/assets/product-1.jpg", title: "Product 2", price: 500 },
    { image: "/assets/product-1.jpg", title: "Product 3", price: 650 },
    { image: "/assets/product-1.jpg", title: "Product 4", price: 700 },
    { image: "/assets/product-1.jpg", title: "Product 5", price: 850 },
    { image: "/assets/product-1.jpg", title: "Product 6", price: 400 },
    // Add more products as needed
  ];

  return (
    <>
      <Helmet>
        <title>Products | African Vibes</title>
      </Helmet>
      <section className="max-w-7xl md:mx-auto px-5 md:px-10 lg:px-20">
        <div className="flex flex-col mb-6">
          <h2 className="text-4xl mb-1">Shop With Us</h2>
          <p className="">Browse from 500 latest items.</p>
        </div>
        <div className="flex flex-col md:flex-row">
          <FilterSection />
          <main className="p-4 w-full md:w-3/4">
            <h1 className="text-2xl font-bold mb-4">
              Clothings and Textiles (250)
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {products.map((product, index) => (
                <ProductsCard
                  key={index}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                />
              ))}
            </div>
            <div className="text-center mt-6">
              <button className="px-4 py-2 bg-primary text-white rounded">
                Browse More
              </button>
            </div>
          </main>
        </div>
        <FlashSale />
        <Footer />
      </section>
    </>
  );
};

export default Products;
