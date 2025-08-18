import Card from "./Card";
import omnifood from "../assets/img/Projects/omnifood.png";
import portfolio from "../assets/img/Projects/portfolio.png";
import natours from "../assets/img/Projects/natours.png";
import travana from "../assets/img/Projects/travana.png";
import furnivo from "../assets/img/Projects/furnivo-homepage.png";

function Projects({ techStacks }) {
  const projects = [
    {
      name: "omnifood",
      image: omnifood,
      description: "a custom healthy meal delivered website.",
      codeLink: "https://github.com/HanifaTavassoli/Omnifood",
      liveUrl: "https://hanifa-omnifood.netlify.app",
      featured: true,
      stacks: [techStacks.html, techStacks.css, techStacks.js],
    },
    {
      name: "portfolio",
      image: portfolio,
      description:
        "A personal portfolio website to showcase my skills and projects.",
      codeLink: "https://github.com/HanifaTavassoli/Portfolio",
      liveUrl: "https://hanifatavassoli-portfolio.netlify.app",
      featured: true,
      stacks: [techStacks.html, techStacks.css, techStacks.tailwind],
    },
    {
      name: "Natours",
      image: natours,
      description:
        "A custom nature tour experience website for adventurous travelers.",
      codeLink: "https://github.com/HanifaTavassoli/Natours",
      liveUrl: "https://hanifa-natours.netlify.app",
      featured: true,
      stacks: [techStacks.html, techStacks.css, techStacks.sass, techStacks.js],
    },
    {
      name: "Furnivo",
      image: furnivo,
      description: "A WordPress site showcasing stylish furniture collections.",
      codeLink: "#",
      liveUrl: "https://dahlia-finalproject.afghanpathways.com",
      featured: true,
      stacks: [techStacks.wordpress],
    },
    {
      name: "Travana",
      image: travana,
      description:
        "A custom travel service with personalized luxury vacations.",
      codeLink: "#",
      liveUrl: "https://dahlia.afghanpathways.com",
      featured: false,
      stacks: [techStacks.wordpress],
    },
  ];

  return (
    <section id="projects-section" className="py-20 mt-5 bg-neutral-800">
      <div className="custom-container py-5 px-4 text-center mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-[48px]">
          My Projects
        </h2>
        <div className="grid gap-x-0 md:gap-x-8 gap-y-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mx-auto">
          {projects.map((project) => (
            <Card {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
