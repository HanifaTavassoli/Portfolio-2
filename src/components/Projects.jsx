import Card from "./Card";
import { projects } from "../data";

function Projects() {
  const myprojects = projects;

  return (
    <section id="projects-section" className="py-20 mt-5 bg-neutral-800">
      <div className="custom-container py-5 px-4 text-center mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-[48px]">
          My Projects
        </h2>
        <div className="grid gap-x-0 md:gap-x-8 gap-y-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mx-auto">
          {myprojects.map((project) => (
            <Card {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
