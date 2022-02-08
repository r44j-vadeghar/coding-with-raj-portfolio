import { ChevronRightIcon, XIcon } from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { projects } from "../utils/data";
import { Carousel } from "react-responsive-carousel";
import { useCallback, useEffect, useState } from "react";

function Project({ project, projectName }) {
  const router = useRouter();
  const [corousalState, setCorousalState] = useState(0);
  const [projectData, setProjectData] = useState(null);

  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      router.replace("/");
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = () => {
      const res = project.filter(
        (item) => parseInt(item.id) === corousalState
      )[0];
      setProjectData(res);
    };
    return unsubscribe();
  }, [corousalState]);

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-slate-800 to-gray-900 text-slate-50 h-auto">
      <Head>
        <title>{projectName} | CodingWithRaj</title>
        <link rel="shortcut icon" href="/img/me.ico" type="image/x-icon" />
      </Head>

      <div
        onClick={() => router.replace("/")}
        className="absolute top-2 right-2 h-15 w-15 z-50 cursor-pointer"
      >
        <XIcon className="h-6 z-50" />
      </div>

      <main className="h-full py-11 max-w-7xl mx-auto">
        <section className="relative md:h-[34rem] w-full rounded-xl overflow-hidden shadow-xl">
          <Carousel
            autoPlay
            infiniteLoop
            interval={20000}
            onChange={(index) => setCorousalState(index)}
            swipeable
            useKeyboardArrows
            verticalSwipe
          >
            {project?.map((data) => (
              <div key={data.id} className="max-w-7xl md:h-[34rem]">
                <img
                  className="h-full object-contain w-full"
                  src={data.img}
                  alt=""
                />
              </div>
            ))}
          </Carousel>
        </section>

        <section className="flex items-center mt-11 animate-slide-up">
          <div className="flex flex-col justify-start items-start space-y-9 sm:space-y-14 z-50 mx-5 lg:mx-0 w-screen">
            <div className="flex flex-col items-start space-y-7">
              <h1 className="sectionHeading">{projectData?.pageName}</h1>
              <ul className="">
                {projectData?.descriptionList.map((desc) => (
                  <div className="flex space-x-2">
                    <div className="h-5 w-5">
                      <ChevronRightIcon className="h-5" />
                    </div>
                    <li className="text-left break-words">{desc.desc}</li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Project;

export async function getServerSideProps(context) {
  const project = projects.filter(
    (project) => project.id === context.query.id
  )[0].projectPagesDetails;

  const projectName = projects.filter(
    (project) => project.id === context.query.id
  )[0].projectName;

  return {
    props: {
      project,
      projectName,
    },
  };
}
