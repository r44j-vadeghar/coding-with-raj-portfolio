import { Carousel } from "react-responsive-carousel";
import ProjectItem from "./ProjectItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useMediaQuery from "../utils/useMediaQuery";
import ProjectItemSmallScreen from "./ProjectItemSmallScreen";

function ProjectsSection({ projects }) {
  const [width] = useMediaQuery();

  return (
    <div id="projects" className="md:h-screen overflow-hidden">
      {width > 768 ? (
        <Carousel autoPlay infiniteLoop interval={5000}>
          {projects.map((project) => (
            <div>
              <ProjectItem
                id={project.id}
                name={project.projectName}
                descriptionList={project.descriptionList}
                technologiesUsed={project.technologiesUsed}
                demoLink={project.demoLink}
                bgImg={project.bgImg}
              />
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="flex flex-col space-y-11 w-screen max-w-screen-xl z-50 h-auto overflow-hidden">
          {projects.map((project) => (
            <ProjectItemSmallScreen
              id={project.id}
              name={project.projectName}
              technologiesUsed={project.technologiesUsed}
              demoLink={project.demoLink}
              bgImg={project.bgImg}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectsSection;
