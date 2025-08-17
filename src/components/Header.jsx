import { useState, useEffect } from "react";
import profile from "../assets/img/Hanifa.jpg";
function Header() {
  const [quote, setQuote] = useState("");

  // Array of motivational quotes
  const quotes = [
    "Believe in yourself and all that you are.",
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "It always seems impossible until it's done.",
    "The future belongs to those who believe in the beauty of their dreams.",
  ];

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };
  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);
  return (
    <>
      <header
        id="hero-section"
        className="min-h-screen flex items-center justify-center px-4 py-10 sm:px-6"
      >
        <div className="custom-container w-full max-w-2xl mx-auto text-center">
          <img
            src={profile}
            alt="Hanifa"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover rounded-full mx-auto mb-6 sm:mb-8"
          />
          <div className="mb-[48px]">
            <h3 className="text-neutral-300 text-base sm:text-lg font-semibold mb-2 sm:mb-3">
              Hi, I am
              <span className="text-sky-500 mx-2">Hanifa Tavassoli.</span>
            </h3>
            <h1 className="text-white text-2xl  mb-10 sm:text-3xl md:text-4xl font-bold">
              Front-end Web Developer
            </h1>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
