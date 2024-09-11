import { Helmet } from "react-helmet";
import { useProduct } from "../services/productService";
import ProductCard from "../components/ProductCard";

const Likes = () => {
  const { likedProducts, products } = useProduct();

  const savedProducts = products.filter((product) =>
    likedProducts
      .map((likedProduct) => likedProduct.product_id)
      .includes(product.id)
  );

  return (
    <>
      <Helmet>Saved Products | African Vibes</Helmet>

      <main className="max-w-7xl md:mx-auto px-5 md:px-10 lg:px-20">
        <h1 className="text-3xl font-bold mb-4">Saved Products</h1>

        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {savedProducts.map((product) => (
              <ProductCard
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
        </div>
      </main>
    </>
  );
};

export default Likes;
