import { useState, useEffect } from "react";
import profile from "../assets/img/Hanifa.jpg";
function Header({ message }) {
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
              {message}
            </h3>
            <h1 className="text-white text-2xl  mb-10 sm:text-3xl md:text-4xl font-bold">
              Front-end Web Developer
            </h1>
          </div>
          <div className="flex flex-wrap gap-4 mb-16 justify-center items-center">
            <a
              href="#"
              target="_blank"
              className="flex items-center gap-2 bg-slate-800 text-sky-500 rounded-sm py-2 px-4 text-sm sm:text-base hover:bg-slate-900"
            >
              <span className=""> Github </span>
              <span className="inline-block align-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </span>
            </a>

            <a
              hover:bg-slate-900
              href="#"
              target="_blank"
              className="flex items-center gap-2 bg-slate-800 text-sky-500 rounded-sm py-2 px-4 text-sm sm:text-base hover:bg-slate-900"
            >
              <span className="">Download CV</span>
              <span className="inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </span>
            </a>
          </div>
          <div className="text-neutral-200 italic text-sm sm:text-base">
            <p>"{quote}"</p>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
