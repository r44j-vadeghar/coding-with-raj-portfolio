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
        show && "bg-black w-full"
      } w-screen fixed top-0 z-50 text-white/80`}
    >
      <div
        className={`${
          !navVisible && "relative"
        } h-16 flex sm:items-center sm:justify-between sectionSize`}
      >
        <div className="flex items-center justify-between mx-5 sm:mx-0 w-full">
          <SocialItems />
          <div
            onClick={() => setNavVisible((navVisible) => !navVisible)}
            className={`${
              navVisible ? "h-[3px]" : "h-4"
            } relative w-6 bgflex flex-col -space-y-1 cursor-pointer sm:hidden`}
          >
            <div
              className={`absolute inset-x-0 w-6 h-[3px] transition-all top-0 bg-white/90 ${
                navVisible && "rotate-45"
              }`}
            />
            <div
              className={`absolute inset-x-0 w-6 h-[3px] transition-all bottom-0 bg-white/90 ${
                navVisible && "-rotate-45"
              }`}
            />
          </div>
        </div>
        <div
          className={`${
            !navVisible && "hidden sm:flex"
          } absolute sm:relative top-14 sm:top-0 right-4 sm:right-0 justify-center w-max bg-gray-800 sm:bg-transparent p-2 px-4 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5 items-center animate-menu-down z-50`}
        >
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
