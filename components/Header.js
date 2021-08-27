import Link from "next/link";
import { useEffect, useState } from "react";

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
        } h-12 flex sm:items-center sm:justify-between 3xl:max-w-screen-2xl max-w-screen-xl mx-auto`}
      >
        <div className="flex items-center justify-between mx-5 sm:mx-0 w-full">
          <div className="flex items-center space-x-3 h-10">
            <div className="rounded-full hover:scale-125 transition-all cursor-pointer">
              <a
                href="https://www.linkedin.com/in/rajvadeghar2000/"
                target="_blank"
              >
                <img
                  loading="lazy"
                  className="headerImage"
                  src="/linkedin-round.svg"
                />
              </a>
            </div>
            <div className="rounded-full hover:scale-125 transition-all cursor-pointer">
              <a href="https://github.com/RajVadeghar" target="_blank">
                <img loading="lazy" className="headerImage" src="/github.svg" />
              </a>
            </div>
            <div className="rounded-full hover:scale-125 transition-all cursor-pointer">
              <a href="#" target="_blank">
                <img
                  loading="lazy"
                  className="headerImage"
                  src="/instagram-round.svg"
                />
              </a>
            </div>
            <div className="rounded-full hover:scale-125 transition-all cursor-pointer">
              <a href="https://twitter.com/VadegharRaj" target="_blank">
                <img
                  loading="lazy"
                  className="headerImage"
                  src="/twitter-round.svg"
                />
              </a>
            </div>
            <div className="rounded-full hover:scale-125 transition-all cursor-pointer">
              <a href="https://www.facebook.com/raj.vadeghar.3" target="_blank">
                <img
                  loading="lazy"
                  className="headerImage"
                  src="/facebook-round.svg"
                />
              </a>
            </div>
          </div>
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
