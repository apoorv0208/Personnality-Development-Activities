import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white min-h-[80px] py-4 px-6 flex flex-col md:flex-row justify-between items-center relative">
      {/* Left Section */}
      <div className="flex items-center space-x-3">
        <h3 className="text-lg font-semibold">Professional Development Activity</h3>
        <div className="w-[2px] h-6 bg-gray-500"></div>
        <p className="text-sm text-gray-400">© 2025 PDA — @pict</p>
      </div>

      {/* Center Section - Page View Counter (Now perfectly centered) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-center text-gray-400">
        <p className="text-sm">This page was viewed</p>
        <div className="flex space-x-1 justify-center text-green-400 text-xl font-mono">
          <span className="bg-black px-2 py-1 rounded">0</span>
          <span className="bg-black px-2 py-1 rounded">0</span>
          <span className="bg-black px-2 py-1 rounded">0</span>
          <span className="bg-black px-2 py-1 rounded">8</span>
          <span className="bg-black px-2 py-1 rounded">7</span>
          <span className="bg-black px-2 py-1 rounded">9</span>
        </div>
        <p className="text-sm">times</p>
      </div>

      {/* Right Section - Social Media Icons */}
      <div className="flex space-x-4 text-xl text-gray-300">
        <a
          href="https://www.facebook.com/PICTOfficial/"
          target="_blank"
          rel="noopener noreferrer"
        ><FaFacebookF className="hover:text-white cursor-pointer" /></a>

        <a
          href="https://x.com/punepict?lang=en&mx=2"
          target="_blank"
          rel="noopener noreferrer"
        ><FaTwitter className="hover:text-white cursor-pointer" /></a>

        <a
          href="https://www.instagram.com/pict.pune/"
          target="_blank"
          rel="noopener noreferrer"
        ><FaInstagram className="hover:text-white cursor-pointer" /></a>
        
        <a
          href="https://in.linkedin.com/school/pune-institute-of-computer-technology/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-white cursor-pointer" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
