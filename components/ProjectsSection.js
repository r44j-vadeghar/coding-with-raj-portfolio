import { ChevronRightIcon } from "@heroicons/react/solid";
import { Carousel } from "react-responsive-carousel";
import ProjectItem from "./ProjectItem";
import ProjectItemSmallScreen from "./ProjectItemSmallScreen";

function ProjectsSection({ projects }) {
  return (
    <div id="projects" className="md:h-screen overflow-hidden">
      <div className="hidden md:block">
        <Carousel
          autoPlay
          infiniteLoop
          interval={5000}
          showThumbs={false}
          swipeable
          useKeyboardArrows
          verticalSwipe
        >
          {projects.map((project) => (
            <div key={project.id} className="w-screen">
              <div
                style={{ backgroundImage: `url('${project.bgImg}')` }}
                className={`flex h-full w-full clipScreenImage opacity-40 lg:opacity-90 overflow-hidden z-10`}
              />
              <ProjectItem
                id={project.id}
                name={project.projectName}
                descriptionList={project.descriptionList}
                technologiesUsed={project.technologiesUsed}
                demoLink={project.demoLink}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="md:hidden flex flex-col space-y-11 w-screen max-w-screen-xl z-50 h-auto overflow-hidden">
        {projects.map((project) => (
          <ProjectItemSmallScreen
            key={project.id}
            id={project.id}
            name={project.projectName}
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
