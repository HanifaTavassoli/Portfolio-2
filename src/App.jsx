import "bootstrap-icons/font/bootstrap-icons.css";

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
  return (
    <>
      <Navbar />
      <Header message="Welcome to my Personal Website!" />
      <About animation={animation} />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
