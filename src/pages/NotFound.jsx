import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found | Your Website Name";
  }, []);

  return (
    <section className="flex flex-col items-center justify-center h-full text-center mt-10">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">{`Oops! The page you're looking for doesn't exist.`}</p>
      <NavLink to="/" className="px-4 py-2 bg-primary text-white rounded">
        Go to Homepage
      </NavLink>
    </section>
  );
};

export default NotFound;
