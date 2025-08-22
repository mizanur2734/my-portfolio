import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

import { FaUser } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "home", to: "/home", icon: <IoHomeOutline size={20} /> },
    { name: "about", to: "#about", icon: <FaUser size={18} /> },
    { name: "service", to: "/service" },
    { name: "pricing", to: "/pricing" },
  ];

  return (
    <div className="roboto-serif-font bg-[#001F3F]">
      <header className="z-20 top-0 left-0">
        {/* Navbar */}
        <nav className="w-11/12 mx-auto flex justify-between items-center py-4 md:py-4 md:px-2">
          {/* Logo */}
          <div>
            <h3 className="text-2xl md:text-[30px] font-semibold text-white">
              Mizanur
            </h3>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={link.to}
                className="text-xl font-semibold hover:text-[#0ef] flex items-center gap-2 
                hover:underline  transition-all"
              >
                {link.icon} {link.name}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Sign In Button */}
            <button className="bg-gray-800 text-white px-5 py-2 rounded-full hidden md:block text-base font-semibold hover:bg-gray-700">
              Sign In
            </button>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              {menuOpen ? (
                <RxCross2
                  onClick={toggleMenu}
                  size={28}
                  className="cursor-pointer text-white"
                />
              ) : (
                <CiMenuFries
                  onClick={toggleMenu}
                  size={28}
                  className="cursor-pointer text-white"
                />
              )}
            </div>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden flex flex-col gap-4 px-4 md:px-12 py-4 transition-all ${
            menuOpen ? "block" : "hidden"
          } bg-[#001f3fc4] text-white`}
        >
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              onClick={() => setMenuOpen(false)}
              className="capitalize text-lg font-semibold hover:text-[#ffa600] hover:underline underline-offset-4 flex items-center gap-2 transition-all"
            >
              {link.icon} {link.name}
            </a>
          ))}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
