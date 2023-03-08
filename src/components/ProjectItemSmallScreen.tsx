import type { Project } from "@/utils/data";
import { useRouter } from "next/dist/client/router";

function ProjectItemSmallScreen({
  id,
  projectName: name,
  technologiesUsed,
  demoLink,
  bgImg
}: Partial<Project>) {
  const router = useRouter();

  return (
    <div
      key={id}
      style={{ backgroundImage: bgImg && `url('${bgImg}')` }}
      className={`group relative mx-5 h-56 w-auto overflow-hidden rounded-md bg-contain`}>
      <div className="absolute inset-0 bg-black/50 shadow-md" />
      {id && (
        <button
          onClick={() => {
            router.push(`/${id}`).then(console.log).catch(console.error);
          }}
          className="absolute top-2 right-2 z-40 cursor-pointer text-xs italic text-gray-200">
          more details &rarr;
        </button>
      )}
      <div className="flex h-full flex-col items-start justify-end space-y-2 p-5">
        <h1 className="z-40 text-2xl font-semibold">{name}</h1>
        <div className="flex items-center space-x-2">
          {technologiesUsed?.map((tech, i) => (
            <div
              key={i}
              className="z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/40 p-2 backdrop-blur-md md:h-20 md:w-20">
              <img className="animate-spin-slow" src={tech.techImgSrc} alt="" />
            </div>
          ))}
        </div>
        <a
          href={demoLink}
          target="_blank"
          rel="noreferrer"
          className="z-40 mt-5 w-max cursor-pointer rounded-md bg-blue-600 px-4 py-1 text-white hover:bg-blue-500 hover:ring-2 focus:outline-none focus:ring focus:ring-cyan-500 active:ring-4 active:ring-cyan-500 active:ring-offset-2 active:ring-offset-indigo-700 sm:px-6 sm:py-2">
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectItemSmallScreen;
