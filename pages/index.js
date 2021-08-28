import Head from "next/head";
import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import ProjectsSection from "../components/ProjectsSection";

export default function Home({ projects }) {
  return (
    <div className="bg-gradient-to-r from-blueGray-800 to-coolGray-900 text-white h-auto max-w-screen">
      <div className="clipScreenTW overflow-hidden"></div>
      <Head>
        <title>CodingWithRaj | Portfolio</title>
      </Head>

      <Header />
      <HomeSection />
      <hr className="opacity-20" />
      <ProjectsSection projects={projects} />
      <hr className="opacity-20" />

      {/* <footer className="flex items-center justify-center w-full h-24 border-t"></footer> */}
    </div>
  );
}

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
        "https://codingwithraj-todo-app-nzm33nrtb-rajvadeghar.vercel.app/",
      bgImg: "bg-todo-app",
    },
    {
      id: "4",
      projectName: "Instagram Redesign",
      descriptionList: [
        {
          desc: "This is Instagram Redesign, Where we can get complete user experience like instagram",
        },
        {
          desc: "CRUD operations are integrated",
        },
        {
          desc: "Also, users can post images, comment etc",
        },
        {
          desc: "Authentication feature is enabled (Register and login functionalities), Google Login and Facebook Login.",
        },
        {
          desc: "Mobile responsive design.",
        },
      ],
      technologiesUsed: [
        { techImgSrc: "/react-logo.png" },
        { techImgSrc: "/firebase-logo.png" },
        { techImgSrc: "/materialui-logo.png" },
        { techImgSrc: "/insta-logo.png" },
      ],
      demoLink: "https://instagram-redesign-4778b.web.app/",
      bgImg: "bg-instagram-app",
    },
    {
      id: "5",
      projectName: "Covid Tracker",
      descriptionList: [
        {
          desc: "This is Covid Tracker, Where we can track covid cases",
        },
        {
          desc: "This is build using api from disease.sh",
        },
        {
          desc: "Also, users can get track visualizing maps/graphs",
        },
        {
          desc: "Mobile responsive design.",
        },
      ],
      technologiesUsed: [
        { techImgSrc: "/react-logo.png" },
        { techImgSrc: "/firebase-logo.png" },
        { techImgSrc: "/materialui-logo.png" },
      ],
      demoLink: "https://codingwithraj-covid-tracker.web.app/",
      bgImg: "bg-covid-app",
    },
    {
      id: "6",
      projectName: "Netflix Clone",
      descriptionList: [
        {
          desc: "This is Netflix Clone, Where we can get latest movies with categories",
        },
        {
          desc: "This is build using api from TMDB",
        },
        {
          desc: "Also, users can watch trailers by clicking any movie item. Although some may not work.",
        },
        {
          desc: "Authentication feature is enabled (Register and login functionalities)",
        },
      ],
      technologiesUsed: [
        { techImgSrc: "/react-logo.png" },
        { techImgSrc: "/netflix-logo.png" },
      ],
      demoLink: "https://codingwithraj-netflix-clone.web.app/",
      bgImg: "bg-netflix-app",
    },
  ];

  return {
    props: {
      projects,
    },
  };
}
