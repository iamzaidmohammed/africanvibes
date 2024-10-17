import { useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import BlogImg1 from "../assets/Rectangle 121.png";
import BlogImg2 from "../assets/Rectangle 122.png";
import BlogImg3 from "../assets/Rectangle 123.png";
import BlogImg4 from "../assets/Rectangle 124.png";
import BlogImg5 from "../assets/Rectangle 125.png";
import BlogImg6 from "../assets/Rectangle 126 (1).png";

const Blog = () => {
  const sampleText =
    "Traditional and indigenous products are more than just items; they are a reflection of the cultural heritage and history of the communities that create them";
  const sampleImage = BlogImg1;
  const sampleImage1 = BlogImg2;
  const sampleImage2 = BlogImg3;
  const sampleImage3 = BlogImg4;
  const sampleImage4 = BlogImg5;
  const sampleImage5 = BlogImg6;

  const [isExpanded, setIsExpanded] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleReadMore = (index) => {
    setIsExpanded((prevState) =>
      prevState.map((state, i) => (i === index ? !state : state))
    );
  };

  const firstRowImages = [sampleImage, sampleImage1, sampleImage2];
  const secondRowImages = [sampleImage3, sampleImage4, sampleImage5];

  const renderCards = (images) => {
    return images.map((image, index) => (
      <div
        key={index}
        className="max-w-sm sm:max-w-xs md:max-w-sm rounded overflow-hidden shadow-lg bg-white"
      >
        <img className="w-full" src={image} alt="Card" />
        <div className="px-6 py-4">
          <p className="pb-1 text-gray-400">06/07/2024</p>
          <p className="font-bold text-gray-800">
            Connecting with History and Culture
          </p>
          <div className="relative">
            <p
              className={`text-gray-700 text-base text-justify transition-all duration-300 ${
                isExpanded[index] ? "max-h-screen" : "max-h-24 overflow-hidden"
              }`}
            >
              {sampleText}
            </p>
            <button
              onClick={() => toggleReadMore(index)}
              className="relative bottom-0 left-0 mt-2 text-gray-600 text-opacity-50 flex justify-between w-full"
            >
              <span>By Tolu Bally</span>
              <span>{isExpanded[index] ? "Read Less" : "Read More..."}</span>
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <Helmet>
        <title>Blog | African Vibes</title>
      </Helmet>

      <main className="max-w-7xl md:mx-auto px-5 md:px-10 lg:px-20">
        <div className="flex items-center justify-center flex-col mb-6">
          <h2 className="text-center text-4xl mb-1">Blog</h2>
          <div className="bg-black w-12 h-0.5"></div>
        </div>

        <main>
          <div className="flex flex-col sm:flex-row justify-center items-center pt-8 gap-3 mx-4 sm:mx-8 md:mx-16">
            {renderCards(firstRowImages)}
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center pt-8 gap-3 mx-4 sm:mx-8 md:mx-16">
            {renderCards(secondRowImages)}
          </div>
        </main>
        <div className="py-8">
          <h1 className="text-3xl font-bold text-center py-2">Testimonial</h1>
          <span className="w-24 h-1 bg-black flex justify-center mx-auto"></span>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-x-8 md:space-y-0 md:ml-24">
          <div className="flex flex-col space-y-4 ml-10">
            <div className="w-[250px] h-[320px] text-center mx-auto md:mx-0">
              <h1 className="font-satoshi font-normal text-[20px] leading-[40px] ">
                Here’s what our valued customers have to say about their
                experiences with our traditional and indigenous products. We’re
                proud to share their stories and appreciate their support.
              </h1>
            </div>
            <div className="flex justify-center space-x-4 items-center mb-4">
              <img src="/src/assets/Frame 2310.png" alt="Image 1" />
              <img src="/src/assets/Frame 2398.png" alt="Image 2" />
            </div>
          </div>

          <div className="w-full md:w-[690px]">
            <img src="/src/assets/Frame 2409.png" alt="Image 3" />
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default Blog;
