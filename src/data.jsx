import omnifood from "./assets/img/Projects/omnifood.png";
import numGuesser from "./assets/img/Projects/number-guesser.png";
import portfolio from "./assets/img/Projects/portfolio.png";
import natours from "./assets/img/Projects/natours.png";
import calculator from "./assets/img/Projects/calculator.png";
import mortgageCalc from "./assets/img/Projects/mortgage-calculator.jpg";
import faqAccordion from "./assets/img/Projects/faq-accordion.jpg";
import notificationpage from "./assets/img/Projects/notification-page.jpg";
import tipCalculator from "./assets/img/Projects/tip-calculator-app.jpg";
import travana from "./assets/img/Projects/travana.png";
import furnivo from "./assets/img/Projects/furnivo-homepage.png";

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
    id: 1,
    name: "omnifood",
    image: omnifood,
    shortDesc: "a custom healthy meal delivered website.",
    longDesc:
      "OmniFood is a custom healthy meal delivery service that empowers users to enjoy nutritious, personalized meals delivered straight to their doorstep. With a focus on convenience, taste, and nutrition, OmniFood allows customers to tailor their meal plans according to specific dietary preferences, such as vegan, gluten-free, or keto. The platform offers a wide variety of fresh, locally sourced ingredients that are expertly prepared by chefs to ensure each meal is not only delicious but also aligned with health goals. OmniFood also promotes sustainability by using eco-friendly packaging and reducing food waste. Whether you’re looking to maintain a balanced diet, lose weight, or fuel your workouts, OmniFood provides a convenient and flexible solution that makes healthy eating easy and accessible.",
    codeLink: "https://github.com/HanifaTavassoli/Omnifood",
    liveUrl: "https://hanifa-omnifood.netlify.app",
    featured: true,
    status: "Completed",
    stacks: { css, js },
  },
  {
    id: 2,
    name: "Number Guesser Game",
    image: numGuesser,
    shortDesc: "A tiny HTML, CSS ans javascript number guesser game",
    longDesc:
      "The Number Guesser Game is a simple yet addictive game built with HTML, CSS, and JavaScript. Players are tasked with guessing a randomly generated number within a specified range. After each guess, the game provides feedback—whether the guess is too high, too low, or correct—helping players refine their next guess. The game continues until the correct number is guessed, and it tracks the total number of attempts. With its clean and minimalistic design, this game is perfect for anyone looking to improve their number-guessing skills or enjoy a fun, quick challenge. It's an excellent project for web development beginners and those wanting to practice JavaScript in a playful, engaging way.",
    codeLink: "https://github.com/HanifaTavassoli/number-guesser-game",
    liveUrl: "https://hanifa-guess-number.netlify.app",
    featured: false,
    status: "Completed",
    stacks: { css, js },
  },
  {
    id: 3,
    name: "portfolio",
    image: portfolio,
    shortDesc:
      "A personal portfolio website to showcase my skills and projects.",
    longDesc:
      "The Portfolio website is a personal space designed to showcase my skills, projects, and achievements as a developer. Created using modern web technologies, it serves as an online resume where visitors can explore my work, understand my development journey, and get a glimpse of my technical expertise. The website highlights key projects, each with detailed descriptions and links to live demos or GitHub repositories. It also includes sections about my background, skills, and contact information, allowing potential clients or employers to reach out easily. With a sleek, responsive design and a user-friendly interface, the Portfolio site provides a professional yet personal showcase of my capabilities as a developer.",
    codeLink: "https://github.com/HanifaTavassoli/Portfolio",
    liveUrl: "https://hanifatavassoli-portfolio.netlify.app",
    featured: true,
    status: "In progress",
    stacks: { css, tailwind },
  },
  {
    id: 4,
    name: "Natours",
    image: natours,
    shortDesc:
      "A custom nature tour experience website for adventurous travelers.",
    longDesc:
      "Natours is a custom-built website dedicated to providing adventurous travelers with unique nature tour experiences. Whether you're exploring serene forests, hiking through rugged mountains, or embarking on wildlife safaris, Natours offers carefully crafted itineraries that immerse you in the beauty of the natural world. The website features a variety of tours, from guided eco-treks to luxurious nature escapes, all designed to offer unforgettable adventures while promoting sustainability and environmental conservation. With detailed descriptions, high-quality images, and expert tour guides, Natours ensures that each journey is filled with adventure, discovery, and connection to nature. Perfect for those seeking to break free from the ordinary and explore the wild, Natours is your gateway to nature’s most breathtaking destinations.",
    codeLink: "https://github.com/HanifaTavassoli/Natours",
    liveUrl: "https://hanifa-natours.netlify.app",
    featured: true,
    status: "In progress",
    stacks: { css, sass, js },
  },
  {
    id: 5,
    name: "Calculator",
    image: calculator,
    shortDesc:
      "calculator app with a user-friendly interface for quick calculations.",
    longDesc:
      "The Calculator app is a sleek and efficient tool designed with a user-friendly interface to provide quick and accurate calculations. Whether you're performing basic arithmetic or more complex mathematical operations, the app ensures a smooth and intuitive experience. Built with modern web technologies, it features large, easy-to-read buttons, a clean layout, and responsive design, making it accessible across various devices. The app handles standard calculations, including addition, subtraction, multiplication, and division, with additional support for more advanced functions. Perfect for daily use, the Calculator app combines practicality and simplicity to help users perform calculations effortlessly, all within a few clicks.",
    codeLink: "https://github.com/HanifaTavassoli/Calculator",
    liveUrl: "https://hanifatavassoli-calculator.vercel.app",
    featured: true,
    status: "Completed",
    stacks: { css, react },
  },
  {
    id: 6,
    name: "Mortgage Calculator",
    image: mortgageCalc,
    shortDesc: "Simple Mortgage Calculator for monthly and total repayments.",
    longDesc:
      "The Mortgage Calculator is a straightforward tool designed to help users calculate their monthly and total mortgage repayments. By inputting basic details such as loan amount, interest rate, and loan term, the calculator provides an instant breakdown of monthly payments, total repayments, and the interest over the life of the loan. Its intuitive and clean interface ensures an easy-to-use experience, making it a perfect tool for potential homebuyers, real estate investors, or anyone looking to get a clear understanding of their mortgage obligations. Built with accuracy in mind, the Mortgage Calculator offers a quick, reliable way to estimate mortgage payments and plan for the future.",
    codeLink: "https://github.com/HanifaTavassoli/mortgage-calculator",
    liveUrl: "https://hanifatavassoli-mortgage-calculator.vercel.app",
    featured: false,
    status: "Completed",

    stacks: { css, react },
  },
  {
    id: 7,
    name: "FAQ accordion",
    image: faqAccordion,
    shortDesc: "A collapsible FAQ component that expands and hides answers.",
    longDesc:
      "This FAQ Accordion is a versatile, interactive component designed to streamline the user experience by allowing users to easily access answers to frequently asked questions. The accordion enables users to hide and show answers with a simple click, improving navigation and saving valuable screen space. With a strong focus on accessibility, this component supports keyboard navigation, allowing users to expand or collapse answers using the keyboard alone. The design is fully responsive, ensuring an optimal user experience across all devices, from mobile phones to desktop screens. Each interactive element, such as clickable questions, includes hover and focus states to improve usability and provide visual feedback. Whether you’re building a website, app, or dashboard, this FAQ accordion provides a clean, user-friendly way to present information that enhances user engagement and accessibility.",
    codeLink: "https://github.com/HanifaTavassoli/faq-accordion",
    liveUrl: "https://hanifatavassoli-faqaccordion.netlify.app",
    featured: true,
    status: "Completed",

    stacks: { tailwind, react },
  },
  {
    id: 8,
    name: "Notification Page",
    image: notificationpage,
    shortDesc: "A Notification that displays and marks unread items as read.",
    longDesc:
      "The Notification Page is a practical tool designed to help users manage and track their notifications efficiently. By displaying both read and unread messages, it ensures users can quickly identify which notifications need attention. With features like the 'Mark all as read' button, users can instantly update the status of all unread messages, providing a clear overview of their notification inbox. The page is designed to adapt seamlessly across devices, offering an optimal viewing experience on both mobile and desktop screens. Its clean, user-friendly interface and interactive elements, such as hover and focus states, make it easy for users to navigate through their notifications. Ideal for anyone managing large volumes of alerts or updates, the Notification Page delivers a simple, organized way to keep track of important information and stay on top of notifications with ease.",
    codeLink: "https://github.com/HanifaTavassoli/notifications-page",
    liveUrl: "https://hanifatavassoli-notifications-page.vercel.app",
    featured: false,
    status: "Completed",

    stacks: { tailwind, react },
  },
  {
    id: 9,
    name: "Tip Calculator App",
    image: tipCalculator,
    shortDesc:
      "A Calculator to  calculate tip amounts based on the bill and percentage.",
    longDesc:
      "The Tip Calculator App is a simple yet powerful tool designed to help users quickly calculate tip amounts and split the total bill. By entering the bill amount and selecting the tip percentage, the app instantly provides the total tip amount, the total cost including the tip, and the cost per person if the bill is being shared. With a clean, user-friendly interface, it ensures a seamless experience for anyone looking to accurately calculate their tip and manage their dining expenses. Ideal for group meals, restaurants, or anyone looking to simplify the process of calculating tips, the Tip Calculator App is a reliable and convenient tool to make tipping straightforward and hassle-free.",
    liveUrl: "https://hanifatavassoli-tip-calculator.netlify.app",
    featured: true,
    status: "Completed",

    stacks: { tailwind, react },
  },
  {
    id: 10,
    name: "Furnivo",
    image: furnivo,
    shortDesc: "A WordPress site showcasing stylish furniture collections.",
    longDesc:
      "Furnivo is a beautifully designed WordPress site that showcases an extensive collection of stylish and modern furniture. The site offers an elegant, user-friendly experience, making it easy for visitors to browse through various furniture categories, including living room, bedroom, office, and outdoor collections. Each product is presented with high-quality images, detailed descriptions, and pricing information, allowing users to make informed decisions. Furnivo is not only a platform for showcasing furniture but also a space for inspiration, with design tips, trends, and style guides to help customers create the perfect living spaces. Whether you’re looking for minimalist designs or luxurious pieces, Furnivo offers a curated selection that caters to diverse tastes and home décor needs.",
    codeLink: "#",
    liveUrl: "https://dahlia-finalproject.afghanpathways.com",
    featured: true,
    status: "Completed",
    stacks: { wordpress },
  },
  {
    id: 11,
    name: "Travana",
    image: travana,
    shortDesc: "A custom travel service with personalized luxury vacations.",
    longDesc:
      "Travana is a bespoke travel service designed to offer personalized luxury vacation experiences tailored to the unique preferences of each traveler. Whether you’re seeking an exotic beach getaway, a cultural city tour, or an adventurous mountain retreat, Travana curates exclusive travel packages that cater to your specific needs and desires. The platform provides expert recommendations on destinations, accommodations, and activities, ensuring that every detail of your trip is carefully planned for maximum comfort and enjoyment. With a focus on luxury, convenience, and personalized service, Travana offers a seamless travel experience, allowing you to explore the world in style and with ease. Perfect for those seeking a truly unique and unforgettable vacation, Travana makes every journey a memorable escape.",
    codeLink: "#",
    liveUrl: "https://dahlia.afghanpathways.com",
    featured: false,
    status: "In progress",
    stacks: { wordpress },
  },
];
