import "bootstrap-icons/font/bootstrap-icons.css";

import "./components/Navbar";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

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

function App() {
  const techStacks = {
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

  return (
    <>
      <Navbar />
      <Header message="Welcome to my Personal Website!" />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
