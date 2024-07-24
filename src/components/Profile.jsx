import { useState, useEffect, useRef } from "react";
import { useAuth } from "../services/authService";
import ProfileImg from "../assets/profile.jpg";
import { LuUser2, LuLayoutDashboard } from "react-icons/lu";
import { SlSettings } from "react-icons/sl";
import { CgLogOut } from "react-icons/cg";
import { Link } from "react-router-dom";

const Profile = () => {
  const { logout } = useAuth();
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuRef = useRef(null);

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
    <>
      <div
        className="rounded-full w-7 h-7 border-solid border-2 cursor-pointer"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <button className="border-gray-300">
          <img src={ProfileImg} alt="User profile picture" />
        </button>
      </div>

      <div
        ref={menuRef}
        className={`fixed top-20 -mt-1 right-3 z-40 w-80 bg-gray-100 overflow-hidden flex-col gap-12  origin-top duration-700 ${
          !toggleMenu ? "h-0" : "h-44"
        } xl:right-20`}
      >
        <div className="px-5 pt-1">
          <div className="flex flex-col items-center font-bold tracking-wider pt-1">
            <Link
              to="#"
              className="flex items-center w-full py-2 px-4 hover:bg-secondary"
            >
              <LuUser2 size={18} className="mr-2" /> Profile
            </Link>
            <Link
              to="#"
              className="flex items-center w-full py-2 px-4 hover:bg-secondary"
            >
              <LuLayoutDashboard size={18} className="mr-2" /> Dashboard
            </Link>
            <Link
              to="#"
              className="flex items-center w-full py-2 px-4 hover:bg-secondary"
            >
              <SlSettings size={18} className="mr-2" /> Settings
            </Link>
            <Link
              to="/"
              onClick={logout}
              className="flex items-center w-full py-2 px-4 hover:bg-secondary"
            >
              <CgLogOut size={18} className="mr-2" /> Log Out
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
