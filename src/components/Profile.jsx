import { useState } from "react";
import { UserRound, LayoutDashboard, Settings, LogOut } from "lucide-react";

const Profile = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div
        className="rounded-full w-7 h-7 border-solid border-2 cursor-pointer"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <button className="border-gray-300"></button>
      </div>

      <div
        className={`fixed top-20 -mt-1 right-3 z-40 w-80 bg-gray-100 overflow-hidden flex-col gap-12  origin-top duration-700 ${
          !toggleMenu ? "h-0" : "h-44"
        } xl:right-36`}
      >
        <div className="px-5 pt-1">
          <div className="flex flex-col items-center font-bold tracking-wider pt-1">
            <a
              href="#"
              className="flex items-center w-full py-2 px-4 hover:bg-secondary"
            >
              <UserRound size={18} className="mr-2" /> Profile
            </a>
            <a
              href="#"
              className="flex items-center w-full py-2 px-4 hover:bg-secondary"
            >
              <LayoutDashboard size={18} className="mr-2" /> Dashboard
            </a>
            <a
              href="#"
              className="flex items-center w-full py-2 px-4 hover:bg-secondary"
            >
              <Settings size={18} className="mr-2" /> Settings
            </a>
            <a
              href="#"
              className="flex items-center w-full py-2 px-4 hover:bg-secondary"
            >
              <LogOut size={18} className="mr-2" /> Log Out
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
