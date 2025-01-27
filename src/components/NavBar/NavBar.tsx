import React, { useEffect, useRef, useState } from "react";
import { assets } from "../../../assets/assets";
import Image from "next/image";

const NavBar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef<HTMLUListElement>({} as HTMLUListElement);

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt="background"
          className="w-full"
        />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white bg-opacity-100 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="#top">
          <Image
            alt="logo"
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className="w-28 cursor-pointer mr-14"
          ></Image>
        </a>
        <ul
          className={`hidden md:flex items-center justify-between gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About Me
            </a>
          </li>
          {/* <li>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li> */}
          <li>
            <a className="font-Ovo" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              setIsDarkMode((prev: boolean) => !prev);
            }}
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="dark mode"
              className="w-6"
            ></Image>
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="arrow icon"
              className="w-3"
            ></Image>
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="menu"
              className="w-6"
            ></Image>
          </button>
        </div>
        {/*------------Mobile Burger Menu-----------*/}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt="close menu"
              className="w-5 cursor-pointer"
            />
          </div>
          <li onClick={closeMenu}>
            <a className="font-Ovo" href="#top">
              Home
            </a>{" "}
          </li>
          <li onClick={closeMenu}>
            {" "}
            <a className="font-Ovo" href="#about">
              About Me
            </a>
          </li>
          {/* <li onClick={closeMenu}>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li> */}
          <li onClick={closeMenu}>
            <a className="font-Ovo" href="#projects">
              Projects
            </a>
          </li>
          <li onClick={closeMenu}>
            <a className="font-Ovo" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
