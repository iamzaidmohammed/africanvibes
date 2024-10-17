import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | African Vibes</title>
      </Helmet>
      <section className="flex flex-col items-center justify-center h-full text-center mt-10">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">{`Oops! The page you're looking for doesn't exist.`}</p>
        <Link to="/" className="px-4 py-2 bg-primary text-white rounded">
          Go to Homepage
        </Link>
      </section>
    </>
  );
};

export default NotFound;
