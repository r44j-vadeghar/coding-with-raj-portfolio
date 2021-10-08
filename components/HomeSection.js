import { ClipboardCopyIcon } from "@heroicons/react/solid";
import { Typewriter } from "react-simple-typewriter";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

function HomeSection() {
  const [isCopied, setIsCopied] = useState(false);

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div id="home" className="flex sectionSize">
      <div className="lg:w-3/5 flex flex-col space-y-12 md:space-y-20 justify-center h-screen animate-fade-up z-10 mx-5 md:mx-0">
        <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-11 sm:items-center">
          <p className="text-coolGray-900 lg:text-cyan-600 transition-transform lg:hover:scale-125">
            Raj Vadeghar
          </p>
          <p className="text-coolGray-900 lg:text-cyan-600 transition-transform lg:hover:scale-125">
            Available for Freelance project / full time job
          </p>
        </div>

        <div className="flex flex-col space-y-5 justify-center items-start max-w-screen-lg">
          <h3 className="text-4xl md:text-6xl font-semibold">
            Hi, I am <span className="whitespace-nowrap">a Web Developer.</span>
          </h3>

          <h3 className="text-lg md:text-3xl leading-relaxed">
            Let us turn our ideas into real solutions using Digital assets.
            Which helps your business{" "}
            <span className="text-3xl md:text-6xl font-bold text-rose-600">
              <Typewriter
                words={["build", "grow"]}
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
          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
            <div tabIndex="0" className="blueButton">
              <ClipboardCopyIcon className="h-6" />
              <button className="outline-none">vadegharraj@gmail.com</button>
            </div>
            {isCopied && (
              <p className="p-1 px-2 bg-black/70 rounded-lg w-max">
                Copied to clipboard!
              </p>
            )}
          </div>
        </CopyToClipboard>
      </div>
    </div>
  );
}

export default HomeSection;
