/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Project } from "@/utils/data";
import { Carousel } from "react-responsive-carousel";
import ProjectItem from "./ProjectItem";
import ProjectItemSmallScreen from "./ProjectItemSmallScreen";

function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <div id="projects" className="overflow-hidden md:h-screen">
      <div className="hidden md:block">
        <Carousel
          autoPlay
          infiniteLoop
          interval={5000}
          showThumbs={false}
          swipeable
          useKeyboardArrows
          // @ts-ignore
          verticalSwipe>
          {projects.map((project) => (
            <div key={project.id} className="w-screen">
              <div
                style={{ backgroundImage: `url('${project.bgImg}')` }}
                className={`clipScreenImage z-50 flex h-full w-full overflow-hidden opacity-40 lg:opacity-90`}
              />
              <ProjectItem
                id={project.id}
                projectName={project.projectName}
                descriptionList={project.descriptionList}
                technologiesUsed={project.technologiesUsed}
                demoLink={project.demoLink}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="z-50 flex h-auto w-screen max-w-screen-xl flex-col space-y-11 overflow-hidden md:hidden">
        {projects.map((project) => (
          <ProjectItemSmallScreen
            key={project.id}
            id={project.id}
            projectName={project.projectName}
            technologiesUsed={project.technologiesUsed}
            demoLink={project.demoLink}
            bgImg={project.bgImg}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
