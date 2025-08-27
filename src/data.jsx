import omnifood from "../assets/img/Projects/omnifood.png";
import portfolio from "../assets/img/Projects/portfolio.png";
import natours from "../assets/img/Projects/natours.png";
import calculator from "../assets/img/Projects/calculator.png";
import travana from "../assets/img/Projects/travana.png";
import furnivo from "../assets/img/Projects/furnivo-homepage.png";

import html from "./assets/img/skills/html-5.svg";
import css from "./assets/img/skills/css-3.svg";
import js from "./assets/img/skills/js.svg";
import sass from "./assets/img/skills/sass.svg";
import bootstrap from "./assets/img/skills/bootstrap.svg";
import tailwind from "./assets/img/skills/tailwind.svg";
import react from "./assets/img/skills/react.svg";
import mysql from "./assets/img/skills/mysql.svg";
import git from "./assets/img/skills/git.svg";
import wordpress from "./assets/img/skills/wordpress.png";

export const techStacks = {
  html: html,
  css: css,
  js: js,
  sass: sass,
  bootstrap: bootstrap,
  tailwind: tailwind,
  react: react,
  mysql: mysql,
  git: git,
  wordpress: wordpress,
};

export const projects = [
  {
    name: "omnifood",
    image: omnifood,
    description: "a custom healthy meal delivered website.",
    codeLink: "https://github.com/HanifaTavassoli/Omnifood",
    liveUrl: "https://hanifa-omnifood.netlify.app",
    featured: true,
    stacks: [techStacks.css, techStacks.js],
  },
  {
    name: "portfolio",
    image: portfolio,
    description:
      "A personal portfolio website to showcase my skills and projects.",
    codeLink: "https://github.com/HanifaTavassoli/Portfolio",
    liveUrl: "https://hanifatavassoli-portfolio.netlify.app",
    featured: true,
    stacks: [techStacks.css, techStacks.tailwind],
  },
  {
    name: "Natours",
    image: natours,
    description:
      "A custom nature tour experience website for adventurous travelers.",
    codeLink: "https://github.com/HanifaTavassoli/Natours",
    liveUrl: "https://hanifa-natours.netlify.app",
    featured: true,
    stacks: [techStacks.css, techStacks.sass, techStacks.js],
  },
  {
    name: "Calculator",
    image: calculator,
    description:
      "calculator app with a user-friendly interface for quick calculations.",
    codeLink: "https://github.com/HanifaTavassoli/Calculator",
    liveUrl: "https://hanifatavassoli-calculator.vercel.app",
    featured: true,
    stacks: [techStacks.css, techStacks.react],
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
    description: "A custom travel service with personalized luxury vacations.",
    codeLink: "#",
    liveUrl: "https://dahlia.afghanpathways.com",
    featured: false,
    stacks: [techStacks.wordpress],
  },
];
