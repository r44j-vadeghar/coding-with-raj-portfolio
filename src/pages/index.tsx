import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResumeSection from "@/components/ResumeSection";
import { College, colleges, Project, projects, whatIDo } from "@/utils/data";
import Head from "next/head";

type Props = {
  projects: Project[];
  colleges: College[];
  whatIDo: string[];
};

export default function Home({ projects, colleges, whatIDo }: Props) {
  return (
    <div className="max-w-screen h-auto bg-gradient-to-r from-slate-800 to-slate-900 text-white">
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

export function getServerSideProps() {
  const projectsData = projects;
  const collegesData = colleges;
  const whatIDoData = whatIDo;

  return {
    props: {
      projects: projectsData,
      colleges: collegesData,
      whatIDo: whatIDoData
    }
  };
}
