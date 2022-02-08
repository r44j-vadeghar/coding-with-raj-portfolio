import { ChevronUpIcon } from "@heroicons/react/solid";
import SocialItems from "./SocialItems";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative bg-slate-900 h-40 mt-11 md:mt-0">
      <div className="absolute flex items-center justify-center left-0 right-0 -top-4 md:-top-5">
        <div
          onClick={scrollToTop}
          className="z-50 grid place-content-center place-items-center p-5 md:p-6 h-8 w-8 bg-slate-700 rounded-full cursor-pointer transition-all hover:bg-yellow-500"
        >
          <ChevronUpIcon className="h-8 text-white/90 font-bold" />
        </div>
      </div>

      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm uppercase text-gray-500">
            Designed and coded by{" "}
            <a
              className="hover:text-yellow-500"
              href="https://github.com/RajVadeghar"
            >
              Raj Vadeghar
            </a>
          </p>
          <SocialItems />
        </div>
      </div>
    </div>
  );
}

export default Footer;
