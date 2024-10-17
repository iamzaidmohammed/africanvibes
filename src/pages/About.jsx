import Hero from "../assets/about.png";
import Offer1 from "../assets/offer-1.png";
import Offer2 from "../assets/offer-2.png";
import Offer3 from "../assets/offer-3.png";
import { GiShoppingBag } from "react-icons/gi";
import { CgSupport } from "react-icons/cg";
import { FaTruck } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { VscPackage } from "react-icons/vsc";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | African Vibes</title>
      </Helmet>
      <main className="max-w-7xl md:mx-auto px-5 md:px-10 lg:px-20">
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center flex-col mb-6">
              <h2 className="text-center text-4xl mb-1">About Us</h2>
              <div className="bg-black w-24 h-0.5"></div>
            </div>
            <div className="flex flex-col md:flex-row mt-6 items-center">
              <div className="md:w-1/2">
                <img
                  src={Hero}
                  alt="About Us"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-10 text-center md:text-left">
                <p className="mt-4 text-lg leading-relaxed mb-6">
                  At <strong>Africa Vibes</strong>, we are passionate about
                  preserving and promoting the rich heritage of traditional and
                  indigenous products. Our mission is to bring you closer to the
                  authentic beauty, craftsmanship, and culture of diverse
                  communities around the world.
                </p>
                <Link
                  to="/shop/products"
                  className="mt-6 px-5 py-3 bg-primary text-white font-semibold rounded-md"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="our-story py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center flex-col mb-6">
              <h2 className="text-center text-4xl mb-1">Our Story</h2>
              <div className="bg-black w-24 h-0.5"></div>
            </div>
            <p className="mt-4 text-lg leading-relaxed max-w-3xl mx-auto">
              Founded with a deep appreciation for traditional arts and crafts,
              African Vibes was born out of a desire to celebrate and sustain
              indigenous craftsmanship. We have traveled far and wide,
              connecting with skilled artisans and craftsmen who pour their
              heart and soul into every piece they create. Our journey has taken
              us to remote villages and bustling marketplaces, where we have
              discovered the stories and traditions behind each product.
            </p>
          </div>
        </section>

        <section className="what-we-offer py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center flex-col mb-6">
              <h2 className="text-center text-4xl mb-1">What We Offer</h2>
              <div className="bg-black w-24 h-0.5"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
              <div className="offer-item">
                <img
                  src={Offer1}
                  alt="Hardware Textiles"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="mt-2 font-semibold">Hardware Textiles</h3>
              </div>
              <div className="offer-item">
                <img
                  src={Offer2}
                  alt="Artisanal Jewelry"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="mt-2 font-semibold">Artisanal Jewelry</h3>
              </div>
              <div className="offer-item">
                <img
                  src={Offer3}
                  alt="Home Deco"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="mt-2 font-semibold">Home Deco</h3>
              </div>
              <div className="offer-item">
                <img
                  src={Offer1}
                  alt="Pottery"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="mt-2 font-semibold">Pottery</h3>
              </div>
              <div className="offer-item">
                <img
                  src={Offer1}
                  alt="Fashion & Accessories"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="mt-2 font-semibold">Fashion & Accessories</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="why-choose-us py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center flex-col mb-6">
              <h2 className="text-center text-4xl mb-1">Why Choose Us</h2>
              <div className="bg-black w-24 h-0.5"></div>
            </div>
            <div className="bg-secondary px-6 py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
              <div className="choose-item">
                <div className="flex items-center justify-center bg-primary text-white h-10 w-10 rounded-full mx-auto">
                  <GiShoppingBag />
                </div>
                <h3 className="mt-2 font-semibold">Fast and Easy Shopping</h3>
              </div>
              <div className="choose-item">
                <div className="flex items-center justify-center bg-primary text-white h-10 w-10 rounded-full mx-auto">
                  <CgSupport />
                </div>
                <h3 className="mt-2 font-semibold">24/7 Support</h3>
              </div>
              <div className="choose-item">
                <div className="flex items-center justify-center bg-primary text-white h-10 w-10 rounded-full mx-auto">
                  <FaTruck />
                </div>
                <h3 className="mt-2 font-semibold">Fast Shipping</h3>
              </div>
              <div className="choose-item">
                <div className="flex items-center justify-center bg-primary text-white h-10 w-10 rounded-full mx-auto">
                  <VscPackage />
                </div>
                <h3 className="mt-2 font-semibold">Easy to Shop</h3>
              </div>
              <div className="choose-item">
                <div className="flex items-center justify-center bg-primary text-white h-10 w-10 rounded-full mx-auto">
                  <GiReturnArrow />
                </div>
                <h3 className="mt-2 font-semibold">Hassle-Free Returns</h3>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default About;
