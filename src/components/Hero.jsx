import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slide1 from "../assets/slide1.jpg";
import Slide2 from "../assets/slide2.jpg";
import Slide3 from "../assets/slide3.jpg";
import Slide4 from "../assets/slide4.jpg";
import Slide5 from "../assets/slide5.jpg";

const slides = [
  {
    url: Slide1,
    text: "Your Premier Destination for Authentic Indigenous and Traditional Products.",
  },
  {
    url: Slide2,
    text: "Explore Our Unique Collection of Handcrafted Items.",
  },
  {
    url: Slide3,
    text: "Explore Our Unique Collection of Handcrafted Items.",
  },
  {
    url: Slide4,
    text: "Explore Our Unique Collection of Handcrafted Items.",
  },
  {
    url: Slide5,
    text: "Explore Our Unique Collection of Handcrafted Items.",
  },
  // Add more slides as needed
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

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
