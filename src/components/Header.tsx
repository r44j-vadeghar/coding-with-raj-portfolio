import Link from "next/link";
import { useEffect, useState } from "react";
import SocialItems from "./SocialItems";

function Header() {
  const [navVisible, setNavVisible] = useState(false);
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div
      className={`${
        show ? "w-full bg-black" : ""
      } fixed top-0 z-50 w-screen text-white/80`}>
      <div
        className={`${
          !navVisible ? "relative" : ""
        } sectionSize flex h-16 sm:items-center sm:justify-between`}>
        <div className="mx-5 flex w-full items-center justify-between sm:mx-0">
          <SocialItems />
          <button
            onClick={() => setNavVisible((navVisible) => !navVisible)}
            className={`${
              navVisible ? "h-[3px]" : "h-4"
            } bgflex relative w-6 cursor-pointer flex-col -space-y-1 sm:hidden`}>
            <div
              className={`absolute inset-x-0 top-0 h-[3px] w-6 bg-white/90 transition-all ${
                navVisible ? "rotate-45" : ""
              }`}
            />
            <div
              className={`absolute inset-x-0 bottom-0 h-[3px] w-6 bg-white/90 transition-all ${
                navVisible ? "-rotate-45" : ""
              }`}
            />
          </button>
        </div>
        <div
          className={`${
            !navVisible ? "hidden sm:flex" : ""
          } absolute top-14 right-4 z-50 flex w-max animate-menu-down flex-col items-center justify-center space-y-3 bg-gray-800 p-2 px-4 sm:relative sm:top-0 sm:right-0 sm:flex-row sm:space-y-0 sm:space-x-5 sm:bg-transparent`}>
          <Link href="#home">
            <span className="headerItem">Home</span>
          </Link>
          <Link href="#projects">
            <span className="headerItem">Projects</span>
          </Link>
          <Link href="#about">
            <span className="headerItem">About</span>
          </Link>
          <Link href="#resume">
            <span className="headerItem">Resume</span>
          </Link>
          <Link href="#contact">
            <span className="headerItem">Contact</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
