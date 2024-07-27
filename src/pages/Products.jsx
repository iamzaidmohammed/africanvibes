import FilterSection from "../components/Filters.jsx";
import ProductsCard from "../components/ProductsCard";
import FlashSale from "../components/FlashSale";
import Footer from "../components/Footer.jsx";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/routes/products.php")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(() => data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl md:mx-auto px-5 md:px-10 lg:px-20 flex items-center justify-center h-screen">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Helmet>
        <title>Products | African Vibes</title>
      </Helmet>

      <section className="max-w-7xl md:mx-auto px-5 md:px-10 lg:px-20">
        <div className="flex flex-col mb-6">
          <h2 className="text-4xl mb-1">Shop With Us</h2>
          <p>Browse from 500 latest items.</p>
        </div>
        <div className="flex flex-col md:flex-row">
          <FilterSection />
          <main className="p-4 w-full md:w-3/4">
            <h1 className="text-2xl font-bold mb-4">
              Clothings and Textiles (250)
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {products.map((product) => (
                <ProductsCard
                  key={product.id}
                  image={`/api/assets/images/${product.img}`}
                  title={product.name}
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
