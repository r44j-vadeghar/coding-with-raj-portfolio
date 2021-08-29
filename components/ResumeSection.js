import { ChevronRightIcon } from "@heroicons/react/outline";

const COLLEGES = [
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

function ResumeSection() {
  return (
    <div id="resume" className="relative h-auto md:h-screen overflow-hidden">
      <div className="hidden md:block clipScreenImageGradient overflow-hidden" />
      <div className="hidden md:block bg-education-img clipScreenImage lg:opacity-90 backdrop-blur-md overflow-hidden z-10" />
      <div className="flex items-center py-5 3xl:max-w-screen-2xl max-w-screen-xl mx-5 sm:mx-auto h-full z-40">
        <div className="flex flex-col space-y-11 z-40">
          <h1 className="text-2xl sm:text-6xl font-semibold break-words z-40">
            Education
          </h1>
          {COLLEGES.map((college) => (
            <div className="flex flex-col items-center space-y-3 md:flex-row md:space-y-0 md:space-x-5 z-40 border md:border-0 hover:shadow-lg md:hover:shadow-none border-opacity-60 p-5">
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
                    <div className="flex space-x-1 items-center">
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
