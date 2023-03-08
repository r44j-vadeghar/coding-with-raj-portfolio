import { ClipboardCopyIcon } from "@heroicons/react/solid";
import type { LottiePlayer } from "lottie-web";
import { useEffect, useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Typewriter } from "react-simple-typewriter";

function HomeSection() {
  const [isCopied, setIsCopied] = useState(false);
  const lottieRef = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  useEffect(() => {
    import("lottie-web")
      .then((Lottie) => setLottie(Lottie.default))
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (lottie && lottieRef.current) {
      const animation = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/lottie/hello.json"
      });

      return () => animation.destroy();
    }
    return;
  }, [lottie]);

  return (
    <div id="home" className="sectionSize flex gap-5">
      <div className="z-10 mx-5 flex h-screen flex-1 animate-slide-up flex-col justify-center space-y-12 md:mx-0 md:space-y-20 lg:w-1/2">
        <div className="flex flex-col space-y-1 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-11">
          <span className="text-gray-900 md:text-lg md:font-semibold md:tracking-widest lg:text-cyan-600">
            Available for Freelance project / full time job
          </span>
        </div>

        <div className="flex w-[95%] max-w-screen-lg flex-col items-start justify-center space-y-5">
          <h3 className="text-4xl font-semibold md:text-6xl">
            Hi, I am{" "}
            <span className="whitespace-nowrap">a React Developer.</span>
          </h3>

          <h3 className="text-lg md:text-3xl">
            A skilled developer with a passion for building intuitive and
            user-friendly web applications that help your business{" "}
            <span className="font-bold text-rose-600">
              <Typewriter
                words={["succeed", "thrive"]}
                loop={0}
                cursor={false}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h3>
        </div>

        <CopyToClipboard text="vadegharraj@gmail.com" onCopy={onCopyText}>
          <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-3">
            <div className="blueButton">
              <ClipboardCopyIcon className="h-6" />
              <button className="outline-none">vadegharraj@gmail.com</button>
            </div>
            {isCopied && (
              <p className="w-max rounded-lg bg-black/70 p-1 px-2">
                Copied to clipboard!
              </p>
            )}
          </div>
        </CopyToClipboard>
      </div>

      <div
        className="mt-auto mr-auto mb-10 hidden h-96 w-96 items-end justify-end lg:flex"
        ref={lottieRef}
      />
    </div>
  );
}

export default HomeSection;
