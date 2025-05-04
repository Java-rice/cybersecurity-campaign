import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Transition } from "@headlessui/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [dropdown, setDropdown] = useState(null); // current open dropdown
  const location = useLocation(); // used to detect route changes

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setDropdown(null); // close dropdown when menu opens
  };

  const toggleDropdown = (menu) => {
    setDropdown((prev) => (prev === menu ? null : menu));
  };

  // Close dropdown when route changes
  useEffect(() => {
    setDropdown(null);
    setIsOpen(false); // Optionally close mobile nav too
  }, [location.pathname]);

  const navLink =
    "hover:text-gray-300 transition font-medium relative px-2 py-1 cursor-pointer";
  const dropdownLink =
    "block px-4 py-2 hover:bg-gray-100 transition text-[#1A334A]";

  return (
    <header className="bg-[#1A334A] text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-3xl font-bold tracking-wide">
            <Link to="/">Sig<span className="text-[#27E6EC]">Ma</span></Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            <div
              className="relative group"
              onMouseEnter={() => setDropdown("learn")}
              onMouseLeave={() => setDropdown(null)}
            >
              <button
                onClick={() => toggleDropdown("learn")}
                className={navLink}
              >
                Learn
              </button>
              <Transition
                show={dropdown === "learn"}
                enter="transition duration-200 ease-out"
                enterFrom="opacity-0 -translate-y-2"
                enterTo="opacity-100 translate-y-0"
                leave="transition duration-150 ease-in"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-full left-0 mt-2 w-48 bg-white text-[#1A334A] shadow-lg rounded">
                  <Link to="/learn/learning-materials" className={dropdownLink}>
                    Materials
                  </Link>
                  <Link to="/learn/crash-course" className={dropdownLink}>
                    Crash Course
                  </Link>
                  <Link to="/learn/play" className={dropdownLink}>
                    Play
                  </Link>
                </div>
              </Transition>
            </div>

            <div
              className="relative group"
              onMouseEnter={() => setDropdown("community")}
              onMouseLeave={() => setDropdown(null)}
            >
              <button
                onClick={() => toggleDropdown("community")}
                className={navLink}
              >
                Community
              </button>
              <Transition
                show={dropdown === "community"}
                enter="transition duration-200 ease-out"
                enterFrom="opacity-0 -translate-y-2"
                enterTo="opacity-100 translate-y-0"
                leave="transition duration-150 ease-in"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-full left-0 mt-2 w-48 bg-white text-[#1A334A] shadow-lg rounded">
                  <Link to="/community/activities" className={dropdownLink}>
                    Activities
                  </Link>
                  <Link to="/community/partners" className={dropdownLink}>
                    Partners
                  </Link>
                  <Link to="/community/socials" className={dropdownLink}>
                    Socials
                  </Link>
                </div>
              </Transition>
            </div>

            <Link to="/about" className={navLink}>
              About
            </Link>
            <Link to="/contacts" className={navLink}>
              Contact
            </Link>
          </nav>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition duration-200 ease-out"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="md:hidden mt-2 bg-[#1A334A] text-white rounded-b-md shadow-lg pb-4 space-y-2">
            <Link to="/about" className="block px-4 py-2 hover:bg-[#173046]">
              About
            </Link>

            {/* Learn Mobile */}
            <div className="px-4">
              <button
                onClick={() => toggleDropdown("learn")}
                className="w-full text-left py-2 hover:underline cursor-pointer"
              >
                Learn
              </button>
              {dropdown === "learn" && (
                <div className="bg-white text-[#1A334A] rounded ">
                  <Link to="/learn/learning-materials" className={dropdownLink}>
                    Materials
                  </Link>
                  <Link to="/learn/crash-course" className={dropdownLink}>
                    Crash Course
                  </Link>
                  <Link to="/learn/play" className={dropdownLink}>
                    Play
                  </Link>
                </div>
              )}
            </div>

            {/* Community Mobile */}
            <div className="px-4">
              <button
                onClick={() => toggleDropdown("community")}
                className="w-full text-left py-2 hover:underline cursor-pointer"
              >
                Community
              </button>
              {dropdown === "community" && (
                <div className="bg-white text-[#1A334A] rounded">
                  <Link to="/community/activities" className={dropdownLink}>
                    Activities
                  </Link>
                  <Link to="/community/partners" className={dropdownLink}>
                    Partners
                  </Link>
                  <Link to="/community/socials" className={dropdownLink}>
                    Socials
                  </Link>
                </div>
              )}
            </div>

            <Link to="/contacts" className="block px-4 py-2 hover:bg-[#173046]">
              Contact
            </Link>
          </div>
        </Transition>
      </div>
    </header>
  );
};

export default Header;
