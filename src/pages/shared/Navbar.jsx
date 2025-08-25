import React, { useState, useEffect } from "react";
import { CiMail, CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { FaCode, FaServicestack, FaUser } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import { MdOutlineFileDownload } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "home", to: "/", icon: <IoHomeOutline size={20} /> },
    { name: "about", to: "#about", icon: <FaUser size={18} /> },
    { name: "skills", to: "#skills", icon: <FaCode size={18} /> },
    { name: "service", to: "#service", icon: <FaServicestack size={18} /> },
    { name: "contact", to: "#contact", icon: <CiMail size={20} /> }
  ];

  useEffect(() => {
    Aos.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="roboto-serif-font">
      <header className="w-full fixed z-20 top-0 left-0 bg-[#001c3f] shadow-md opacity-90">
        {/* Navbar */}
        <nav className="w-11/12 mx-auto flex justify-between items-center py-4 md:py-4 md:px-2">
          {/* Logo */}
          <div
            className="flex items-center gap-1"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <h3 className="text-2xl md:text-[28px] font-semibold text-white leading-none">
              Mizanur
            </h3>
            {/* Animated Colorful Dot */}
            <motion.div
              className="w-2 h-2 rounded-full mt-3"
              initial={{ scale: 0.8 }}
              animate={{
                scale: [1, 1.3, 1],
                backgroundColor: [
                  "#0ef",    // cyan
                  "#ff5733", // orange-red
                  "#ff0",    // yellow
                  "#00ff88", // green
                  "#0ef"     // back to cyan
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 items-center">
            {navLinks.map((link, index) => (
              <a
                key={link.to}
                href={link.to}
                className="text-xl font-semibold hover:text-[#0ef] flex items-center gap-2 
                hover:underline transition-all"
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                {link.icon} {link.name}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div
            className="flex items-center gap-3"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <a
              href="/resume.pdf"
              download="Mizanur_Resume.pdf"
              className="hidden md:inline-flex relative items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="relative flex items-center gap-[6px] px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                <MdOutlineFileDownload size={22} /> Resume
              </span>
            </a>

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
          className={`md:hidden flex flex-col gap-4 px-4 md:px-12 py-4 transition-all ${menuOpen ? "block" : "hidden"
            } bg-[#001f3fc4] text-white`}
        >
          {navLinks.map((link, index) => (
            <a
              key={link.to}
              href={link.to}
              onClick={() => setMenuOpen(false)}
              className="capitalize text-lg font-semibold hover:text-[#ffa600] hover:underline underline-offset-4 flex items-center gap-2 transition-all"
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
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
