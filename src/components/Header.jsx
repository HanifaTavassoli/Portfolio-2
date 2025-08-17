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
  return <p>Header</p>;
}

export default Header;
