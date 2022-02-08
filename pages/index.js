import Head from "next/head";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import ProjectsSection from "../components/ProjectsSection";
import ResumeSection from "../components/ResumeSection";
import { colleges, projects, whatIDo } from "../utils/data";

export default function Home({ projects, colleges, whatIDo }) {
  return (
    <div className="bg-gradient-to-r from-slate-800 to-gray-900 text-white h-auto max-w-screen">
      <div className="clipScreenTW overflow-hidden"></div>
      <Head>
        <title>CodingWithRaj | Portfolio</title>
        <link rel="shortcut icon" href="/img/me.ico" type="image/x-icon" />
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
  const projectsData = projects;
  const collegesData = colleges;
  const whatIDoData = whatIDo;

  return {
    props: {
      projects: projectsData,
      colleges: collegesData,
      whatIDo: whatIDoData,
    },
  };
}
