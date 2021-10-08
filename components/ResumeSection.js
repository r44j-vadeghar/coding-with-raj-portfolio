import { ChevronRightIcon } from "@heroicons/react/outline";

function ResumeSection({ colleges }) {
  return (
    <div id="resume" className="relative md:h-screen overflow-hidden">
      <div className="hidden md:block clipScreenImageGradient overflow-hidden" />
      <div className="hidden md:block bg-education-img clipScreenImage lg:opacity-90 backdrop-blur-md overflow-hidden z-10" />
      <div className="flex items-center py-5 sectionSize mx-5 md:mx-auto h-full z-40">
        <div className="flex flex-col space-y-11 z-40">
          <h1 className="sectionHeading">Education</h1>
          {colleges.map((college) => (
            <div
              key={college.id}
              className="flex flex-col items-center space-y-3 md:flex-row md:space-y-0 md:space-x-5 z-40 border md:border-0 hover:shadow-lg md:hover:shadow-none border-opacity-60 p-5"
            >
              <div className="h-36 w-36 z-40">
                <img className="rounded-full" src={college.img} alt="" />
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg md:text-2xl font-semi-bold">
                  {college.name}
                </h3>
                <h5 className="md:text-xl font-semi-bold">{college.course}</h5>
                <p className="text-sm md:text-lg text-gray-300">
                  {college.period}
                </p>
                <p className="text-xs md:text-base text-gray-300">
                  {college.desc}
                </p>
                <ul className="flex flex-col space-y-1 pl-8">
                  {Object.keys(college.reviews).map((review, i) => (
                    <div key={i} className="flex space-x-1 items-center">
                      <div className="h-4 w-4">
                        <ChevronRightIcon className="h-4 text-gray-500" />
                      </div>
                      <li className="text-xs md:text-sm text-gray-500" key={i}>
                        {college.reviews[review]}
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResumeSection;
