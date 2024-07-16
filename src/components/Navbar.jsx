import { useState } from "react";
import { Menu, ShoppingCart, Search, Heart } from "lucide-react";
import Logo from "../assets/logo.png";
import Profile from "./Profile";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
      <div className="max-w-7xl flex items-center xl:mx-auto">
        <div className="flex justify-between items-center w-full px-5 ">
          {/* Primary menu and logo */}
          <div className="flex items-center gap-16 my-2">
            {/* logo */}
            <div>
              <a
                href="/"
                className="flex gap-1 font-bold text-gray-700 items-center "
              >
                <img
                  src={Logo}
                  style={{ width: "150px" }}
                  alt="African vibes logo"
                />
              </a>
            </div>

            <div className="hidden md:flex gap-8 ">
              <a href="/" className="py-2 px-4 hover:bg-secondary">
                Home
              </a>
              <a href="#" className="py-2 px-4 hover:bg-secondary">
                Shop
              </a>
              <a href="#" className="py-2 px-4 hover:bg-secondary">
                Blog
              </a>
              <a href="#" className="py-2 px-4 hover:bg-secondary">
                Contact Us
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden xs:flex items-center gap-10">
              <div className="hidden md:flex items-center gap-2">
                <a
                  href="#"
                  className="w-full py-2 px-4 bg-secondary text-center hover:bg-red-300"
                >
                  Shop Now
                </a>
              </div>
            </div>

            {/* Mobile navigation toggle */}
            <div className="flex items-center gap-4">
              <Search className="hidden sm:block" size={22} />
              <Heart className="hidden sm:block" size={22} />
              <ShoppingCart size={22} />

              <Profile />

              <div className="md:hidden flex items-center">
                <Menu
                  size={32}
                  className="cursor-pointer"
                  onClick={() => setToggleMenu(!toggleMenu)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile navigation */}
      <div
        className={`fixed right-3 z-40 w-80 bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700  ${
          !toggleMenu ? "h-0" : "h-56"
        }`}
      >
        <div className="px-5 pt-1">
          <div className="flex flex-col items-center font-bold tracking-wider pt-1">
            <a href="/" className="w-full py-2 px-4 hover:bg-secondary">
              Home
            </a>
            <a href="#" className="w-full py-2 px-4 hover:bg-secondary">
              Shop
            </a>
            <a href="#" className="w-full py-2 px-4 hover:bg-secondary">
              Blog
            </a>
            <a href="#" className="w-full py-2 px-4 hover:bg-secondary">
              Contact Us
            </a>
            <a href="#" className="w-full py-2 px-4 bg-secondary text-center">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
