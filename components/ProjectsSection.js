import { Carousel } from "react-responsive-carousel";
import ProjectItem from "./ProjectItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ProjectsSection({ projects }) {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={3000}
    >
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
  );
}

export default ProjectsSection;
