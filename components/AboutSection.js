import { DownloadIcon } from "@heroicons/react/outline";
import { LightningBoltIcon } from "@heroicons/react/solid";

const SKILLS = [
  { techImgSrc: "/react-logo.png" },
  { techImgSrc: "/next-logo.png" },
  { techImgSrc: "/firebase-logo.png" },
  { techImgSrc: "/tailwind-logo.svg" },
  { techImgSrc: "/materialui-logo.png" },
];

function AboutSection() {
  return (
    <div id="about" className="relative">
      <div className="hidden md:block clipScreenImageGradient overflow-hidden" />
      <div className="hidden md:block bg-me-img clipScreenImage lg:opacity-90 backdrop-blur-md overflow-hidden z-10" />
      <div className="flex items-center py-5 3xl:max-w-screen-2xl max-w-screen-xl mx-5 sm:mx-auto h-screen z-40 min-h-screen overflow-hidden">
        <div className="flex flex-col items-start space-y-7 w-screen lg:w-3/5 z-40">
          <h1 className="text-2xl sm:text-6xl font-semibold break-words">
            What I Do?
          </h1>
          <div className="flex flex-col space-y-3">
            <p>FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
            <div className="flex space-x-3">
              {SKILLS.map((tech) => (
                <div className="w-10 h-10 md:w-20 md:h-20 bg-white/40 backdrop-blur-md rounded-full p-2 flex justify-center items-center">
                  <img
                    className="animate-spin-slow"
                    src={tech.techImgSrc}
                    alt=""
                  />
                </div>
              ))}
            </div>
            <ul className="flex flex-col space-y-2 text-sm text-white break-words z-40">
              <div className="flex space-x-2">
                <div className="h-5 w-5">
                  <LightningBoltIcon className="h-5 text-yellow-500" />
                </div>
                <li>
                  Develop highly interactive Front end / User Interfaces for
                  your web and mobile applications
                </li>
              </div>
              <div className="flex space-x-2">
                <div className="h-5 w-5">
                  <LightningBoltIcon className="h-5 text-yellow-500" />
                </div>
                <li>
                  Progressive Web Applications ( PWA ) in normal and SPA Stacks
                </li>
              </div>
              <div className="flex space-x-2">
                <div className="h-5 w-5">
                  <LightningBoltIcon className="h-5 text-yellow-500" />
                </div>
                <li>
                  Integration of third party services such as Firebase/ AWS /
                  Digital Ocean
                </li>
              </div>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 z-40">
            <a
              tabIndex="0"
              href="/raj-resume-2021.pdf"
              className="relative flex space-x-1 items-center w-max bg-blue-600 text-white px-6 py-3 rounded-md transition-all focus:outline-none focus:ring focus:ring-cyan-500 active:ring-4 active:ring-cyan-500 active:ring-offset-2 active:ring-offset-indigo-700 hover:ring-2 hover:bg-blue-500 cursor-pointer"
              download
            >
              <DownloadIcon className="h-6" />
              <button className="outline-none">Download Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
