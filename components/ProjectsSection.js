import { Carousel } from "react-responsive-carousel";
import ProjectItem from "./ProjectItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useMediaQuery from "../utils/useMediaQuery";
import ProjectItemSmallScreen from "./ProjectItemSmallScreen";
import { useState } from "react";
import Image from "next/image";

function ProjectsSection({ projects }) {
  const [width] = useMediaQuery();
  const [index, setIndex] = useState(0);
  console.log(projects);

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : projects.length);
    }
    if (direction === "r") {
      setIndex(index !== projects.length ? index + 1 : 0);
    }
  };

  return (
    <div id="projects" className="md:h-screen overflow-hidden">
      {width > 768 ? (
        <Carousel autoPlay infiniteLoop interval={5000}>
          {projects.map((project) => (
            <div className="w-screen">
              <ProjectItem
                key={project.id}
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
        // <div className="relative overflow-hidden">
        //   <div
        //     className="absolute w-16 h-16 top-0 bottom-0 m-auto cursor-pointer z-10"
        //     style={{ left: 0 }}
        //     onClick={() => handleArrow("l")}
        //   >
        //     <Image
        //       src="/img/arrowl.png"
        //       alt=""
        //       layout="fill"
        //       objectFit="contain"
        //     />
        //   </div>
        //   <div
        //     className="h-full flex transition-all duration-300 ease-in-out"
        //     style={{
        //       transform: `translateX(${-100 * index}vw)`,
        //       width: `${projects.length * 100}vw`,
        //     }}
        //   >
        //     {projects.map((project) => (
        //       <div className="w-screen">
        //         <ProjectItem
        //           key={project.id}
        //           id={project.id}
        //           name={project.projectName}
        //           descriptionList={project.descriptionList}
        //           technologiesUsed={project.technologiesUsed}
        //           demoLink={project.demoLink}
        //         />
        //       </div>
        //     ))}
        //   </div>
        //   <div
        //     className="absolute h-16 w-16 top-0 bottom-0 my-auto cursor-pointer z-10"
        //     style={{ right: 0 }}
        //     onClick={() => handleArrow("r")}
        //   >
        //     <div className="relative h-16 w-16">
        //       <img
        //         src="/img/arrowr.png"
        //         className="object-contain"
        //         alt=""
        //         layout="fill"
        //       />
        //     </div>
        //   </div>
        // </div>
        <div className="flex flex-col space-y-11 w-screen max-w-screen-xl z-50 h-auto overflow-hidden">
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
      )}
    </div>
  );
}

export default ProjectsSection;
