import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import animation from "./assets/img/animation.gif";
import NotFound from "./pages/NotFound";
import ProjectDetails from "./pages/ProjectDetails";

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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home isDark={isDark} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/about"
          element={
            <About
              isDark={isDark}
              toggleTheme={toggleTheme}
              animation={animation}
            />
          }
        />
        <Route
          path="/contact"
          element={<Contact isDark={isDark} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/projects"
          element={<Projects isDark={isDark} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/projects/:projectId"
          element={<ProjectDetails isDark={isDark} toggleTheme />}
        />
        <Route
          path="/*"
          element={<NotFound isDark={isDark} toggleTheme={toggleTheme} />}
        />

        {/* <About animation={animation} />
        <Skills />
        <Projects />
        <ContactForm />
        <Footer isDark={isDark} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
