import Card from "./Card";
import { projects } from "../data";
import ProjectFilterBar from "./ProjectFilterBar";
import { useState } from "react";

function Projects() {
  const techs = [
    "all",
    "css",
    "js",
    "sass",
    "bootstrap",
    "tailwind",
    "react",
    "wordpress",
  ];

  const [filteredProj, setFilteredProj] = useState(projects);

  return (
    <section
      id="projects-section"
      className="py-20 mt-5 bg-gray-200 text-black dark:bg-neutral-800 dark:text-white"
    >
      <div className="custom-container py-5 px-4 text-center mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-[48px]">
          My Projects
        </h2>

        <div className="grid gap-x-0 md:gap-x-8 gap-y-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mx-auto">
          {filteredProj.length == 0 ? (
            <div className="col-span-full text-left text-black dark:text-white w-full mx-auto">
              <p className="text-3xl font-semibold py-8 px-6 bg-gray-100 dark:bg-neutral-700 border-l-8 border-sky-500/50 shadow-sm rounded-lg">
                No projects found
              </p>
            </div>
          ) : (
            filteredProj.map((project) => <Card {...project} />)
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
