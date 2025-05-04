import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1A334A] text-[#FFFDF2] pt-10 pb-6 px-6 mt-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide mb-2">
            Sig<span className="text-[#28E5EF]">Ma</span>
          </h2>
          <p className="text-sm leading-relaxed max-w-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, dicta voluptatum? Placeat labore, dolore recusandae asperiores ratione excepturi reiciendis magnam?
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2 text-sm">
          <Link to="/about" className="hover:text-[#28E5EF] transition">About Us</Link>
          <Link to="/contacts" className="hover:text-[#28E5EF] transition">Contact</Link>
          <Link to="/terms" className="hover:text-[#28E5EF] transition">Terms & Conditions</Link>
          <Link to="/privacy" className="hover:text-[#28E5EF] transition">Privacy Policy</Link>
        </div>

        {/* Social Icons */}
        <div className="flex md:justify-end items-center gap-4 text-xl">
          <a href="#" aria-label="Facebook" className="hover:text-[#28E5EF] transition">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-[#28E5EF] transition">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-[#28E5EF] transition">
            <FaInstagram />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-[#28E5EF] transition">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-[#ccc] mt-6">
        &copy; {new Date().getFullYear()} SigMa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
