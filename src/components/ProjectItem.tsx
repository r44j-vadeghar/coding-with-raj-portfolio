import type { Project } from "@/utils/data";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";

function ProjectItem({
  id,
  projectName: name,
  descriptionList,
  technologiesUsed,
  demoLink
}: Partial<Project>) {
  const router = useRouter();

  return (
    <div className="">
      <div className="clipScreenImageGradient overflow-hidden" />
      <div className="sectionSize z-40 flex h-screen items-center">
        <div className="z-50 mx-5 flex w-screen flex-col items-start justify-start space-y-9 sm:space-y-14 lg:mx-0">
          <div className="flex flex-col items-start space-y-7">
            <h1 className="sectionHeading">{name}</h1>
            <ul className="">
              {descriptionList?.map((desc, i) => (
                <div key={i} className="flex space-x-2">
                  <div className="h-5 w-5">
                    <ChevronRightIcon className="h-5" />
                  </div>
                  <li className="break-words text-left">{desc.desc}</li>
                </div>
              ))}
            </ul>
            <div className="flex items-start justify-start space-x-3">
              {technologiesUsed?.map((tech, i) => (
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
          </div>
          <div className="flex items-center space-x-3">
            <a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="z-50 w-max cursor-pointer rounded-md bg-blue-600 px-4 py-1 text-white transition-all hover:bg-blue-500 hover:ring-2 focus:outline-none focus:ring focus:ring-cyan-500 active:ring-4 active:ring-cyan-500 active:ring-offset-2 active:ring-offset-indigo-700 sm:px-6 sm:py-2">
              Live Demo
            </a>
            {id && (
              <button
                onClick={() => {
                  router.push(`/${id}`).then(console.log).catch(console.error);
                }}
                className="z-40 cursor-pointer text-xs italic text-gray-200 hover:text-cyan-500 hover:underline">
                more details &rarr;
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
