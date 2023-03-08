import { DownloadIcon, LightningBoltIcon } from "@heroicons/react/solid";
import type { LottiePlayer } from "lottie-web";
import { useEffect, useRef, useState } from "react";

const SKILLS = [
  { techImgSrc: "/img/react-logo.png" },
  { techImgSrc: "/img/next-logo.png" },
  { techImgSrc: "/img/firebase-logo.png" },
  { techImgSrc: "/img/tailwind-logo.svg" },
  { techImgSrc: "/img/materialui-logo.png" },
  { techImgSrc: "/img/mongo-logo.png" },
  { techImgSrc: "/img/typescript-logo.png" }
];

function AboutSection({ whatIDo }: { whatIDo: string[] }) {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);

  useEffect(() => {
    import("lottie-web")
      .then((Lottie) => setLottie(Lottie.default))
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (lottie && aboutRef.current) {
      const animation = lottie.loadAnimation({
        container: aboutRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/lottie/about.json"
      });

      return () => animation.destroy();
    }
    return;
  }, [lottie]);

  return (
    <div id="about" className="relative">
      {/* <div className="clipScreenImageGradient hidden overflow-hidden md:block" />
      <div className="clipScreenImage z-10 hidden overflow-hidden bg-me-img md:block lg:opacity-90" /> */}
      <div className="sectionSize z-40 mx-5 my-10 flex items-center justify-between gap-5 overflow-hidden py-5 md:mx-auto md:my-0 md:h-screen">
        <div
          className="z-40 my-auto mr-auto hidden h-96 w-96 lg:flex"
          ref={aboutRef}
        />

        <div className="z-40 flex w-screen flex-col items-start space-y-7 lg:w-auto">
          <div className="flex w-full flex-col items-center gap-5 sm:flex-row sm:items-end">
            <h1 className="sectionHeading">What I Do?</h1>
          </div>

          <div className="flex flex-col space-y-3">
            <p>FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
            <div className="flex space-x-3">
              {SKILLS.map((tech, i) => (
                <div
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/40 p-2 backdrop-blur-md md:h-20 md:w-20">
                  <img
                    className="animate-spin-slow"
                    src={tech.techImgSrc}
                    alt=""
                  />
                </div>
              ))}
            </div>
            <ul className="z-40 flex flex-col space-y-2 break-words text-sm text-white">
              {whatIDo.map((work, i) => (
                <div key={i} className="flex space-x-2">
                  <div className="h-5 w-5">
                    <LightningBoltIcon className="h-5 text-yellow-500" />
                  </div>
                  <li>{work}</li>
                </div>
              ))}
            </ul>
          </div>

          <a href="/raj-resume-2023.pdf" className="blueButton" download>
            <DownloadIcon className="h-6" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
