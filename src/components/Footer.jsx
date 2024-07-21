import Logo from "../assets/logo.png";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <>
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
                <Facebook strokeWidth={1} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <Instagram strokeWidth={1} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <Youtube strokeWidth={1} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <Twitter strokeWidth={1} />
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
                  <a href="#">About Us</a>
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
