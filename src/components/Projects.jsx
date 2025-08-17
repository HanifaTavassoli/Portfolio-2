import Card from "./Card";
function Projects() {
  const projects = [
    {
      name: "omnifood",
      image: "../assets/img/Projects/omnifood.png",
      descipriton: "a custom healthy meal delivered website.",
      codeLink: "https://github.com/HanifaTavassoli/Omnifood",
      liveUrl: "https://hanifa-omnifood.netlify.app",
      featured: true,
    },
    {
      name: "portfolio",
      image: "../assets/img/Projects/omnifood.png",
      descipriton:
        "A personal portfolio website to showcase my skills and projects.",
      codeLink: "https://github.com/HanifaTavassoli/Portfolio",
      liveUrl: "https://hanifatavassoli-portfolio.netlify.app",
      featured: true,
    },
    {
      name: "Natours",
      image: "../assets/img/Projects/natours.png",
      descipriton:
        "A custom nature tour experience website for adventurous travelers.",
      codeLink: "https://github.com/HanifaTavassoli/Natours",
      liveUrl: "https://hanifa-natours.netlify.app",
      featured: true,
    },
    {
      name: "Furnivo",
      image: "../assets/img/Projects/furnivo-homepage.png",
      descipriton: "A WordPress site showcasing stylish furniture collections.",
      codeLink: "#",
      liveUrl: "https://dahlia-finalproject.afghanpathways.com",
      featured: true,
    },
    {
      name: "Travana",
      image: "../assets/img/Projects/travana.png",
      descipriton:
        "A custom travel service with personalized luxury vacations.",
      codeLink: "#",
      liveUrl: "https://dahlia.afghanpathways.com",
      featured: false,
    },
  ];
  return (
    <section id="projects-section" class="py-20 mt-5">
      <div class="custom-container py-5 px-4 text-center mx-auto">
        <h2 class="text-xl sm:text-2xl md:text-3xl font-bold mb-[48px]">
          My Projects
        </h2>
        <div class="grid gap-x-0 md:gap-x-8 gap-y-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mx-auto"></div>
      </div>
    </section>
  );
}

export default Projects;
