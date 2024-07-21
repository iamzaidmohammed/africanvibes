import Logo from "../assets/logo.png";
import SecImg from "../assets/sec-img-2.jpg";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Newsletter */}
      <section className="mt-6">
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-center text-4xl mb-2">Stay Updated</h2>
          <div className="bg-black w-24 h-0.5"></div>
        </div>
        <div className="flex flex-col items-center text-center bg-white mt-6 px-6 md:flex-row">
          <div className="bg-secondary p-6 md:py-10">
            <p className="mb-4">
              Subscribe to Our Newsletter to receive Exclusive Deals and New
              Arrival.
            </p>
            <div className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Enter your Email"
                className="p-2 outline-none bg-primary text-white placeholder-secondary rounded-l-lg pl-6"
              />
              <button className="p-2 pr-6 bg-primary text-white rounded-r-lg">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <img
              src={SecImg}
              alt="African Vibes"
              className="hidden md:block mb-4 rounded-lg md:w-3/4"
            />
          </div>
        </div>
      </section>
      {/* Footer */}
      <section>
        <div className="mt-8 text-center bg-secondary p-6 xl:flex">
          <div className="xl:basis-2/4">
            <img src={Logo} alt="African Vibes Logo" className="mx-auto mb-4" />
            <p className="mb-4">
              Every product on our site is a testament to the skill and
              dedication of artisans who have preserved their ancestral
              techniques through generations.
            </p>
            <div className="flex justify-center space-x-4 mb-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <AiFillInstagram />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaYoutube />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaXTwitter />
              </a>
            </div>
          </div>

          <div className="md:flex md:gap-16 md:items-center md:justify-center">
            <div className="flex gap-10 items-center justify-center md:gap-16">
              <div className="mb-2">
                <h3 className="font-bold">Our Services</h3>
                <div className="flex flex-col items-center">
                  <a href="#">Sales</a>
                  <a href="#">Museum</a>
                  <a href="#">Gift Card</a>
                  <a href="#">Tour Guide</a>
                </div>
              </div>

              <div className="mb-2">
                <h3 className="font-bold">Company</h3>
                <div className="flex flex-col items-center">
                  <a href="/about">About Us</a>
                  <a href="#">Pricing</a>
                  <a href="#">Career</a>
                  <a href="#">Blogs</a>
                </div>
              </div>
            </div>

            <div className="mb-2">
              <h3 className="font-bold">Contact Us</h3>
              <div className="flex flex-col items-center">
                <a href="#">africanvibes@hotmail.com</a>
                <p>Alakan ayokango no 301 </p>
                <p>Nagasam Kebi</p>
                <a href="#">www.africavibes.org</a>
              </div>
            </div>
          </div>
        </div>

        <div className="my-4 text-center">
          2024 African Vibes (&copy;) All Rights Reserved.
        </div>
      </section>
    </>
  );
};

export default Footer;
