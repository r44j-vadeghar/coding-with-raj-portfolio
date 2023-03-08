import { ChevronUpIcon } from "@heroicons/react/solid";
import SocialItems from "./SocialItems";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative mt-11 h-40 bg-slate-900 md:mt-0">
      <div className="absolute left-0 right-0 -top-4 flex items-center justify-center md:-top-5">
        <button
          onClick={scrollToTop}
          className="z-50 grid h-8 w-8 cursor-pointer place-content-center place-items-center rounded-full bg-slate-700 p-5 transition-all hover:bg-yellow-500 md:p-6">
          <ChevronUpIcon className="h-8 font-bold text-white/90" />
        </button>
      </div>

      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm uppercase text-gray-500">
            Designed and coded by{" "}
            <a
              className="hover:text-yellow-500"
              href="https://github.com/RajVadeghar">
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
