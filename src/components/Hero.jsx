import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slide1 from "../assets/hero.jpg";
import Slide2 from "../assets/sec-img.jpg";

const slides = [
  {
    url: Slide1,
    text: "Your Premier Destination for Authentic Indigenous and Traditional Products.",
  },
  {
    url: Slide2,
    text: "Explore Our Unique Collection of Handcrafted Items.",
  },
  // Add more slides as needed
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="relative w-full h-[500px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.url}
            alt={slide.text}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <h1 className="text-white text-2xl md:text-4xl font-bold text-center px-4 mb-10">
              {slide.text}
            </h1>
            <Link
              to="/shop/products"
              className="bg-white text-black py-2 px-6 rounded-md hover:bg-primary hover:text-white"
            >
              Explore Collections
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;
