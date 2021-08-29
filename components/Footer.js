import { ChevronUpIcon } from "@heroicons/react/solid";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative bg-blueGray-900 h-40 mt-11">
      <div className="absolute flex items-center justify-center left-0 right-0 -top-4 md:-top-5">
        <div
          onClick={scrollToTop}
          className="grid place-content-center place-items-center p-5 md:p-6 h-8 w-8 bg-blueGray-700 rounded-full cursor-pointer"
        >
          <ChevronUpIcon className="h-8 text-white/90 font-bold" />
        </div>
      </div>

      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm uppercase text-gray-500">
            Designed and coded by Raj Vadeghar
          </p>
          <div className="flex items-center space-x-3 h-10 opacity-60">
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
        </div>
      </div>
    </div>
  );
}

export default Footer;
