/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @next/next/no-img-element */
import { ChevronRightIcon, XIcon } from "@heroicons/react/solid";
import type { NextPageContext } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { ProjectPageDetails, projects } from "../utils/data";

type Props = {
  project: ProjectPageDetails[];
  projectName: string;
};

function Project({ project, projectName }: Props) {
  const router = useRouter();
  const [corousalState, setCorousalState] = useState(0);
  const [projectData, setProjectData] = useState<ProjectPageDetails | null>(
    null
  );

  const escFunction = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        router.replace("/").then(console.log).catch(console.error);
      }
    },
    [router]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  useEffect(() => {
    const unsubscribe = () => {
      const res = project.filter(
        (item) => parseInt(item.id) === corousalState
      )[0];
      res && setProjectData(res);
    };
    return unsubscribe();
  }, [corousalState, project]);

  return (
    <div className="relative h-auto min-h-screen bg-gradient-to-r from-slate-800 to-gray-900 text-slate-50">
      <Head>
        <title>{projectName} | CodingWithRaj</title>
        <link rel="shortcut icon" href="/img/me.ico" type="image/x-icon" />
      </Head>

      <button
        onClick={() => {
          router.replace("/").then(console.log).catch(console.error);
        }}
        className="h-15 w-15 absolute top-2 right-2 z-50 cursor-pointer">
        <XIcon className="z-50 h-6" />
      </button>

      <main className="mx-auto h-full max-w-7xl py-11">
        <section className="relative w-full overflow-hidden rounded-xl shadow-xl md:h-[34rem]">
          <Carousel
            autoPlay
            infiniteLoop
            interval={20000}
            onChange={(index) => setCorousalState(index)}
            swipeable
            useKeyboardArrows
            // @ts-ignore
            verticalSwipe>
            {project?.map((data) => (
              <div key={data.id} className="relative max-w-7xl md:h-[34rem]">
                <img
                  className="h-full w-full object-contain"
                  src={data.img}
                  alt=""
                />
              </div>
            ))}
          </Carousel>
        </section>

        <section className="mt-11 flex animate-slide-up items-center">
          <div className="z-50 mx-5 flex w-screen flex-col items-start justify-start space-y-9 sm:space-y-14 lg:mx-0">
            <div className="flex flex-col items-start space-y-7">
              <h1 className="sectionHeading">{projectData?.pageName}</h1>
              <ul className="">
                {projectData?.descriptionList.map((desc, i) => (
                  <div key={i} className="flex space-x-2">
                    <div className="h-5 w-5">
                      <ChevronRightIcon className="h-5" />
                    </div>
                    <li className="break-words text-left">{desc.desc}</li>
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

export function getServerSideProps(context: NextPageContext) {
  const project = projects.filter(
    (project) => project.id === context.query["id"]
  )[0]?.projectPagesDetails;

  const projectName = projects.filter(
    (project) => project.id === context.query["id"]
  )[0]?.projectName;

  if (!project || !projectName) {
    return {
      redirect: {
        permanent: false,
        destination: "/"
      },
      props: {}
    };
  }

  return {
    props: {
      project,
      projectName
    }
  };
}
