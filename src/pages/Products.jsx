import FilterSection from "../components/Filters.jsx";
import ProductsCard from "../components/ProductsCard";
import FlashSale from "../components/FlashSale";
import Footer from "../components/Footer.jsx";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import Loading from "../components/Loading.jsx";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // const [filteredProducts, setFilteredProducts] = useState([]);

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
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.categoryId == selectedCategory[0])
    : products;

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
          <FilterSection CategorySelected={setSelectedCategory} />

          <main className="p-4 w-full md:w-3/4">
            <h1 className="text-2xl font-bold mb-4">
              {selectedCategory
                ? `${selectedCategory[1]} (${filteredProducts.length})`
                : `All Products (${products.length})`}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredProducts.map((product) => (
                <Link key={product.id} to={`/shop/products/${product.id}`}>
                  <ProductsCard
                    name={product.name}
                    image={`/api/assets/images/${product.img}`}
                    price={product.price}
                  />
                </Link>
              ))}
            </div>
            <div className="text-center">
              <button className="mt-2 px-4 py-2 bg-primary text-white rounded">
                Browse more
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
