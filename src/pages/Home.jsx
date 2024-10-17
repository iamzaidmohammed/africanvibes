import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import FeaturedItems from "../components/FeaturedItems";
import Banner from "../components/Banner";
import NewCollections from "../components/NewCollections";
import ConnectWithCulture from "../components/ConnectWithCulture";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Helmet>
        <title>Welcome to African Vibes Ecommerce Store</title>
      </Helmet>

      <main className="max-w-7xl md:mx-auto px-5 md:px-10 lg:px-20">
        <Hero />
        <FeaturedItems />
        <Banner />
        <NewCollections />
        <ConnectWithCulture />
        <Footer />
      </main>
    </>
  );
}

export default App;
