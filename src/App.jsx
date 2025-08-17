import "bootstrap-icons/font/bootstrap-icons.css";

import "./components/Navbar";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Header message="Welcome to my Personal Website!" />
      <Footer />
    </>
  );
}

export default App;
