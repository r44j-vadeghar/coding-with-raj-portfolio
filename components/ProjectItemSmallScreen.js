import { useRouter } from "next/dist/client/router";

function ProjectItemSmallScreen({
  id,
  name,
  technologiesUsed,
  demoLink,
  bgImg,
}) {
  const router = useRouter();

  return (
    <div
      key={id}
      style={{ backgroundImage: `url('${bgImg}')` }}
      className={`relative w-auto mx-5 overflow-hidden h-56 bg-contain rounded-md group`}
    >
      <div className="absolute inset-0 bg-black/50 shadow-md" />
      <p
        onClick={() => router.push(`/${id}`)}
        className="absolute text-xs text-gray-200 italic top-2 right-2 z-40 cursor-pointer"
      >
        more details &rarr;
      </p>
      <div className="h-full flex flex-col justify-end items-start space-y-2 p-5">
        <h1 className="text-2xl font-semibold z-40">{name}</h1>
        <div className="flex items-center space-x-2">
          {technologiesUsed.map((tech, i) => (
            <div
              key={i}
              className="w-10 h-10 md:w-20 md:h-20 bg-white/40 backdrop-blur-md rounded-full p-2 flex justify-center items-center z-30"
            >
              <img className="animate-spin-slow" src={tech.techImgSrc} alt="" />
            </div>
          ))}
        </div>
        <a
          href={demoLink}
          target="_blank"
          tabIndex="0"
          className="w-max bg-blue-600 text-white px-4 sm:px-6 py-1 sm:py-2 mt-5 rounded-md focus:outline-none focus:ring focus:ring-cyan-500 active:ring-4 active:ring-cyan-500 active:ring-offset-2 active:ring-offset-indigo-700 hover:ring-2 hover:bg-blue-500 cursor-pointer z-40"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectItemSmallScreen;
