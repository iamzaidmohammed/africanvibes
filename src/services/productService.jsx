import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Loading from "../components/Loading";
import { useAuth } from "./authService.jsx";

const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  const [productsName, setProductsName] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const appEnv = import.meta.env.VITE_APP_ENV;
  const api = import.meta.env.VITE_API_URL;

  const fetchProducts = async () => {
    const fetchUrl = appEnv === 'local' ? '/api/products' : `${api}/products`;

    try {
      const response = await fetch(fetchUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProducts(() => data);
      setProductsName(() => data.map((product) => product.name));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(error);
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    const fetchUrl = appEnv === 'local' ? '/api/categories' : `${api}/categories`;

    try {
      const response = await fetch(fetchUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCategories(() => data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setError(error);
      setLoading(false);
    }
  };

  const fetchLikedProducts = async () => {
    const fetchUrl = appEnv === 'local' ? `/api/likes?id=${user.id}` : `${api}/likes?id=${user.id}`;

    try {
      const response = await fetch(fetchUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setLikedProducts(() => data);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching liked products:", error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();

    if (user) {
      fetchLikedProducts();
    }
  }, [user]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        productsName,
        likedProducts,
        fetchLikedProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
