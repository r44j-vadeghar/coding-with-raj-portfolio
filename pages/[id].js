import { XIcon } from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import ProjectItem from "../components/ProjectItem";

function Project({ projects }) {
  const router = useRouter();
  const [project, setProject] = useState(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const unsubscribe = async () => {
      await projects.map((project) => {
        project.id === router.query.id && setProject(project);
      });
      setHasMounted(true);
    };
    unsubscribe();
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <div className="relative bg-gradient-to-r from-blueGray-800 to-coolGray-900 text-white h-auto max-w-screen">
      <div
        onClick={() => router.back()}
        className="absolute top-2 right-2 h-15 w-15 z-50 cursor-pointer"
      >
        <XIcon className="h-6 z-50" />
      </div>
      <ProjectItem
        id={project.id}
        name={project.projectName}
        descriptionList={project.descriptionList}
        technologiesUsed={project.technologiesUsed}
        demoLink={project.demoLink}
        bgImg={project.bgImg}
      />
    </div>
  );
}

export default Project;

export async function getServerSideProps(context) {
  const projects = [
    {
      id: "0",
      projectName: "One on One chat Application",
      descriptionList: [
        { desc: "As shown in title, this is one on one chat application." },
        {
          desc: "Users have to sign in and chat with friends placing their email address.",
        },
        {
          desc: "Users can delete chat, reply to particular messages and acn do lot of things.",
        },
        {
          desc: "Authentication is with google. So, no need to waste time creating accounts.",
        },
      ],
      technologiesUsed: [
        { techImgSrc: "/react-logo.png" },
        { techImgSrc: "/next-logo.png" },
        { techImgSrc: "/firebase-logo.png" },
        { techImgSrc: "/tailwind-logo.svg" },
      ],
      demoLink:
        "https://codingwithraj-chat-app-3f0fpr9r1-rajvadeghar.vercel.app/",
      bgImg: "bg-chat-app",
    },
    {
      id: "1",
      projectName: "Google Clone",
      descriptionList: [
        {
          desc: "This is Google Clone, Where we can get google search results.",
        },
        {
          desc: "This is build using Google Custom Search api.",
        },
        {
          desc: "Also, users can get to know news when they search for anything, this is done using newsapi",
        },
        {
          desc: "Mobile responsive design.",
        },
      ],
      technologiesUsed: [
        { techImgSrc: "/google-logo.png" },
        { techImgSrc: "/react-logo.png" },
        { techImgSrc: "/next-logo.png" },
        { techImgSrc: "/firebase-logo.png" },
        { techImgSrc: "/tailwind-logo.svg" },
      ],
      demoLink: "https://coding-with-raj-google.vercel.app/",
      bgImg: "bg-google-app",
    },

    {
      id: "3",
      projectName: "Todo App",
      descriptionList: [
        {
          desc: "This is Todo App, for productivity.",
        },
        {
          desc: "Included total CRUD functionality and google authentication.",
        },
        {
          desc: "Inspired from frontendmentor.io",
        },
        {
          desc: "Mobile responsive design.",
        },
      ],
      technologiesUsed: [
        { techImgSrc: "/react-logo.png" },
        { techImgSrc: "/next-logo.png" },
        { techImgSrc: "/firebase-logo.png" },
        { techImgSrc: "/tailwind-logo.svg" },
      ],
      demoLink:
        "https://codingwithraj-todo-app-gbejf939x-rajvadeghar.vercel.app/",
      bgImg: "bg-todo-app",
    },
  ];

  return {
    props: {
      projects,
    },
  };
}
