import Head from "next/head";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import ProjectsSection from "../components/ProjectsSection";
import ResumeSection from "../components/ResumeSection";

export default function Home({ projects, colleges, whatIDo }) {
  return (
    <div className="bg-gradient-to-r from-blueGray-800 to-coolGray-900 text-white h-auto max-w-screen">
      <div className="clipScreenTW overflow-hidden"></div>
      <Head>
        <title>CodingWithRaj | Portfolio</title>
      </Head>

      <Header />
      <HomeSection />
      <ProjectsSection projects={projects} />
      <AboutSection whatIDo={whatIDo} />
      <ResumeSection colleges={colleges} />
      <ContactSection />
      <Footer />
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

  const colleges = [
    {
      name: "Kakatiya University college of Engineering and Technologies",
      course: "Bachelors of Technology in Computer Science",
      period: "July 2020 - Present",
      desc: "Currently pursuing, completion of course will be on 2023",
      reviews: {
        0: "No hostel for first year joing students",
        1: "No placements provided",
      },
      img: "ku-clg.png",
    },
    {
      name: "Government Institute Of Electronics",
      course: "Diploma in Computer Science",
      period: "July 2016 - November 2019",
      desc: "Passed with distinction. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      reviews: {
        0: "Good college with ugly hostel",
      },
      img: "gioe-clg.jpg",
    },
  ];

  const whatIDo = [
    {
      work: "Develop highly interactive Front end / User Interfaces for your web and mobile applications",
    },
    {
      work: "Progressive Web Applications ( PWA ) in normal and SPA Stacks",
    },
    {
      work: "Integration of third party services such as Firebase/ AWS / Digital Ocean",
    },
  ];

  return {
    props: {
      projects,
      colleges,
      whatIDo,
    },
  };
}
