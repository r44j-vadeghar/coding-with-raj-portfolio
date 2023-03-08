import type { College } from "@/utils/data";
import { ChevronRightIcon } from "@heroicons/react/outline";
import type { LottiePlayer } from "lottie-web";
import { useEffect, useRef, useState } from "react";

function ResumeSection({ colleges }: { colleges: College[] }) {
  const eduRef = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);

  useEffect(() => {
    import("lottie-web")
      .then((Lottie) => setLottie(Lottie.default))
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (lottie && eduRef.current) {
      const animation = lottie.loadAnimation({
        container: eduRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/lottie/education.json"
      });

      return () => animation.destroy();
    }
    return;
  }, [lottie]);

  return (
    <div id="resume" className="relative overflow-hidden md:h-screen">
      {/* <div className="clipScreenImageGradient hidden overflow-hidden md:block" /> */}
      {/* <div className="clipScreenImage z-10 hidden overflow-hidden bg-education-img md:block lg:opacity-90" /> */}
      <div className="sectionSize z-40 mx-5 flex h-full items-center py-5 md:mx-auto">
        <div
          style={{
            width: "75%"
          }}
          className="z-40 flex w-[1/3] flex-col space-y-11">
          <h1 className="sectionHeading">Education</h1>
          {colleges.map((college) => (
            <div
              key={college.id}
              className="z-40 flex flex-col items-center space-y-3 border border-opacity-60 p-5 hover:shadow-lg md:flex-row md:space-y-0 md:space-x-5 md:border-0 md:hover:shadow-none">
              <img
                className="z-40 h-36 w-36 rounded-full"
                src={college.img}
                alt=""
              />
              <div className="flex flex-col space-y-2">
                <h3 className="font-semi-bold text-lg md:text-2xl">
                  {college.name}
                </h3>
                <h5 className="font-semi-bold md:text-xl">{college.course}</h5>
                <p className="text-sm text-gray-300 md:text-lg">
                  {college.period}
                </p>
                <p className="text-xs text-gray-300 md:text-base">
                  {college.desc}
                </p>
                <ul className="flex flex-col space-y-1 pl-8">
                  {college.reviews.map((review, i) => (
                    <div key={i} className="flex items-center space-x-1">
                      <div className="h-4 w-4">
                        <ChevronRightIcon className="h-4 text-gray-500" />
                      </div>
                      <li className="text-xs text-gray-500 md:text-sm">
                        {review}
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div
          className="z-40 my-auto mr-auto hidden h-96 w-96 lg:flex"
          ref={eduRef}
        />
      </div>
    </div>
  );
}

export default ResumeSection;
