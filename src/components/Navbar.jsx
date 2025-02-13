import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src="./kevinRushLogo.png" alt="logo" />
      </div>
      <div className="flex items-center p-2 space-x-4 size-2xl text-white">
        <a href="#">
          <FaLinkedin
            size={24}
            className="hover:scale-150 transition-transform duration-300 ease-in-out hover:text-purple-400"
          />
        </a>

        <a href="#">
          <FaTwitterSquare
            size={24}
            className="hover:scale-150 transition-transform duration-300 ease-in-out hover:text-purple-400"
          />
        </a>

        <a href="#">
          <FaGithub
            size={24}
            className="hover:scale-150 transition-transform duration-300 ease-in-out hover:text-purple-400"
          />
        </a>

        <a href="#">
          <FaInstagram
            size={24}
            className="hover:scale-150 transition-transform duration-300 ease-in-out hover:text-purple-400"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
