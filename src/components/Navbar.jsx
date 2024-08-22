import { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgShoppingCart } from "react-icons/cg";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import Logo from "../assets/logo.png";
import Profile from "./Profile";
import { useAuth } from "../services/authService";

const Navbar = () => {
  const { user } = useAuth();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const menuRef = useRef(null);
  const searchRef = useRef(null);

  const { pathname } = useLocation();

  useEffect(() => {
    setToggleSearch(false);
  }, [pathname]);

  const linkClass = ({ isActive }) =>
    isActive
      ? "py-2 px-4 bg-secondary text-xs lg:text-lg hover:bg-secondary"
      : "py-2 px-4 text-xs lg:text-lg hover:bg-secondary";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggleMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl flex items-center md:px-5 lg:px-16 xl:mx-auto">
        <div className="flex justify-between items-center w-full px-5 ">
          {/* Primary menu and logo */}
          <div className="flex items-center gap-12 my-2">
            {/* logo */}
            <div>
              <NavLink
                href="/"
                className="flex gap-1 font-bold text-gray-700 items-center "
              >
                <img
                  src={Logo}
                  style={{ width: "150px" }}
                  alt="African vibes logo"
                />
              </NavLink>
            </div>

            <div className="hidden md:flex md:gap-1">
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
              <NavLink to="/shop/products" className={linkClass}>
                Shop
              </NavLink>
              <NavLink to="/blog" className={linkClass}>
                Blog
              </NavLink>
              <NavLink to="/contact" className={linkClass}>
                Contact Us
              </NavLink>
            </div>
          </div>

          {!user ? (
            <div className="flex items-center gap-6">
              <NavLink
                to="/users/signin"
                className="py-1 px-2 hover:bg-secondary border-2 border-secondary text-xs lg:text-lg"
              >
                Sign In
              </NavLink>
              <NavLink
                to="/users/signup"
                className="py-1 px-2 text-xs lg:text-lg bg-secondary hover:bg-secondary border-2 border-secondary"
              >
                Sign Up
              </NavLink>

              <div className="md:hidden flex items-center">
                <GiHamburgerMenu
                  className="cursor-pointer"
                  onClick={() => setToggleMenu(!toggleMenu)}
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              {pathname == "/" || pathname == "/shop/products" ? (
                <FaSearch
                  className="hidden sm:block cursor-pointer"
                  size={22}
                  onClick={() => setToggleSearch(!toggleSearch)}
                />
              ) : (
                ""
              )}

              <Link to="/products/likes">
                <FaRegHeart
                  className="hidden sm:block cursor-pointer"
                  size={22}
                />
              </Link>

              <Link to="/shop/cart">
                <CgShoppingCart className="cursor-pointer" size={22} />
              </Link>

              <Profile />

              <div className="md:hidden flex items-center">
                <GiHamburgerMenu
                  className="cursor-pointer"
                  size={22}
                  onClick={() => setToggleMenu(!toggleMenu)}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Search bar */}
      <div ref={searchRef} className={`${!toggleSearch ? "hidden" : "block"}`}>
        <div className="max-w-7xl md:mx-auto px-5 md:px-10 lg:px-20">
          <div className="w-full my-5 py-2 flex justify-between">
            <input
              type="text"
              className="w-[85%] p-2 outline-none border-2 mr-2 lg:mr-0 focus:border-primary"
              placeholder="Search for products..."
            />
            <button className="bg-primary text-white py-2 px-10 rounded-sm">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* mobile navigation */}
      <div
        ref={menuRef}
        className={`fixed right-3 z-40 w-80 bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700  ${
          !toggleMenu ? "h-0" : "h-44"
        }`}
      >
        <div className="px-5 pt-1">
          <div className="flex flex-col items-center font-bold tracking-wider pt-1">
            <NavLink to="/" className="w-full py-2 px-4 hover:bg-secondary">
              Home
            </NavLink>
            <NavLink
              to="/shop/products"
              className="w-full py-2 px-4 hover:bg-secondary"
            >
              Shop
            </NavLink>
            <NavLink to="/blog" className="w-full py-2 px-4 hover:bg-secondary">
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className="w-full py-2 px-4 hover:bg-secondary"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
