import { ChevronRightIcon } from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";

function ProjectItem({
  id,
  name,
  descriptionList,
  technologiesUsed,
  demoLink,
  bgImg,
}) {
  const router = useRouter();

  return (
    <div className="">
      <div className="clipScreenImageGradient overflow-hidden" />
      <div
        className={`${bgImg} clipScreenImage opacity-40 lg:opacity-90 overflow-hidden z-10`}
      />
      <div className="flex items-center sectionSize z-40 h-screen">
        <div className="flex flex-col justify-start items-start space-y-9 sm:space-y-14 z-50 mx-5 lg:mx-0 w-screen">
          <div className="flex flex-col items-start space-y-7">
            <h1 className="sectionHeading">{name}</h1>
            <ul className="">
              {descriptionList.map((desc) => (
                <div className="flex space-x-2">
                  <div className="h-5 w-5">
                    <ChevronRightIcon className="h-5" />
                  </div>
                  <li className="text-left break-words">{desc.desc}</li>
                </div>
              ))}
            </ul>
            <div className="flex justify-start items-start space-x-3">
              {technologiesUsed.map((tech) => (
                <div className="w-10 h-10 md:w-20 md:h-20 bg-white/40 backdrop-blur-md rounded-full p-2 flex justify-center items-center">
                  <img
                    className="animate-spin-slow"
                    src={tech.techImgSrc}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex space-x-3 items-center">
            <a
              href={demoLink}
              target="_blank"
              tabIndex="0"
              className="w-max z-50 bg-blue-600 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-md transition-all focus:outline-none focus:ring focus:ring-cyan-500 active:ring-4 active:ring-cyan-500 active:ring-offset-2 active:ring-offset-indigo-700 hover:ring-2 hover:bg-blue-500 cursor-pointer"
            >
              Live Demo
            </a>
            {/* <p
              onClick={() => router.push(`/${id}`)}
              className="text-xs text-gray-200 italic z-40 cursor-pointer hover:underline hover:text-cyan-500"
            >
              more details &rarr;
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
