import React from "react";
import { assets } from "../../assets/assets";
import Image from "next/image";

const NavBar = () => {
  return (
    <>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <a href="#top">
          <Image
            alt="logo"
            src={assets.logo}
            className="w-28 cursor-pointer mr-14"
          ></Image>
        </a>
        <ul className="hidden md:flex items-center justify-between gap-6 lg:gap-8 rounded-full px-12 py-3">
          <li>
            <a href="#top">Home</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
        <div>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 "
          >
            Contact
            <Image
              src={assets.arrow_icon}
              alt="arrow icon"
              className="w-3"
            ></Image>
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
