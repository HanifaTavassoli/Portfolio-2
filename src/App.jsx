import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

import animation from "./assets/img/animation.gif";

function App() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newValue = !prev;
      localStorage.setItem("theme", newValue ? "dark" : "light");
      document.documentElement.classList.toggle("dark", newValue);
      return newValue;
    });
  };
  return (
    <>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Header message="Welcome to my Personal Website!" isDark={isDark} />
      <About animation={animation} />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer isDark={isDark} />
    </>
  );
}

export default App;
