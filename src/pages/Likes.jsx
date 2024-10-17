import { Helmet } from "react-helmet";
import { useProduct } from "../services/productService";
import ProductCard from "../components/ProductCard";

const Likes = () => {
  const { likedProducts, products } = useProduct();
  const imgUrl = import.meta.env.VITE_IMG_URL;

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
          <div
            className={`${
              savedProducts.length > 0
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                : "w-full"
            }`}
          >
            {likedProducts.length > 0 ? (
              savedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  image={
                    product.imgs && product.imgs.includes(",")
                      ? `${imgUrl}/${product.imgs.split(",")[0]}`
                      : `${imgUrl}/${product.imgs || "default-image.jpg"}`
                  }
                  price={product.price}
                  id={product.id}
                />
              ))
            ) : (
              <p className="text-center">No saved products</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Likes;
