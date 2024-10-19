import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../Home/Menu";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "@images/Website_logo 1.png";
export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMdScreen, setIsMdScreen] = useState(false);
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/about" },
    { label: "Extras", link: "/treatments" },
  ];
  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginClick = () => {
    navigate("/login");
    setIsMenuOpen(false);
  };

  // Close the menu when a link is clicked if screen size is below md
  const handleLinkClick = () => {
    if (!isMdScreen) {
      setIsMenuOpen(false); // Close menu
    }
  };
  return (
    <>
      <nav className=" bg-opacity-70 backdrop-blur-md backdrop-opacity-50 text-black py-2 px-8 flex justify-between items-center fixed w-full z-50">
        <div className="flex items-center gap-3">
          <img className="w-[20%] cursor-pointer" src={logo} />
          <div
            className="text-sm font-bold cursor-pointer lg:text-base xl:text-lg"
            onClick={() => {
              navigate("/");
            }}
          >
            Care Plus
          </div>
        </div>
        <Menu
          menuItems={menuItems}
          isMdScreen={isMdScreen}
          isMenuOpen={isMenuOpen}
          handleBookClick={handleLoginClick}
          handleLinkClick={handleLinkClick}
        />
        {isMdScreen && (
          <div className="gap-2">
            <button
              className="border-2 rounded-md text-blue-900 font-bold py-2 px-4 lg:py-1.5 hover:bg-yellow-300 md:text-[10px] text-xs lg:text-base xl:text-base"
              onClick={handleLoginClick}
            >
              Login
            </button>
            <button
              className="bg-yellow-400 text-blue-900 font-bold py-2 px-4 lg:py-1.5  rounded hover:bg-yellow-300 md:text-[10px] text-xs lg:text-base xl:text-base"
              onClick={handleLoginClick}
            >
              Signup
            </button>
          </div>
        )}

        <button className="md:hidden flex" onClick={toggleMenu}>
          {isMenuOpen ? (
            <HiX size={40} className="z-50 text-black" />
          ) : (
            <HiMenu size={40} />
          )}
        </button>
      </nav>
    </>
  );
};
