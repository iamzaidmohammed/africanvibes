import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useProduct } from "../services/productService.jsx";
import ProductsCard from "../components/ProductsCard";
import FilterSection from "../components/Filters.jsx";
import FlashSale from "../components/FlashSale";
import Footer from "../components/Footer.jsx";
import { useLocation } from "react-router-dom";

const Products = () => {
  const { products } = useProduct();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get("search");
    if (search) {
      setSearchQuery(search.toLowerCase());
    }
  }, [location.search]);

  // Filter products based on the selected category and search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory
      ? product.categoryId === selectedCategory[0]
      : true;
    const matchesSearchQuery = searchQuery
      ? product.product_name.toLowerCase().includes(searchQuery)
      : true;

    return matchesCategory && matchesSearchQuery;
  });

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
                : `All Products (${filteredProducts.length})`}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredProducts.map((product) => (
                <ProductsCard
                  key={product.id}
                  name={product.name}
                  image={
                    product.imgs && product.imgs.includes(",")
                      ? `/api/assets/${product.imgs.split(",")[0]}`
                      : `/api/assets/${product.imgs || "default-image.jpg"}`
                  }
                  price={product.price}
                  id={product.id}
                />
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
