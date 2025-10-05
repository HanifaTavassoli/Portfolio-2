import darkLogo from "../assets/img/dark_logo.png";
import lightLogo from "../assets/img/light_logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function Navbar({ isDark, toggleTheme }) {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuClick = (sectionId) => {
    setOpenMenu(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <nav
        className="mx-auto flex items-center justify-around py-2 lg:shadow-md lg:shadow-sky-500/50 bg-gray-100 text-black dark:bg-neutral-900 dark:text-white w-full lg:fixed lg:top-0"
        aria-label="Global"
      >
        <div className="hidden lg:flex">
          <NavLink to="/">
            <span className="sr-only">Hanifa Tavassoli</span>
            <img
              src={isDark ? darkLogo : lightLogo}
              alt="logo"
              className="h-12 w-auto"
            />
          </NavLink>
        </div>
        <div className="hidden lg:flex w-100">
          <ul className="flex items-center justify-around w-full lg:gap-x-12">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-sky-500 ${isActive ? "text-sky-500" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-sky-500 ${isActive ? "text-sky-500" : ""}`
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `hover:text-sky-500 ${isActive ? "text-sky-500" : ""}`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:text-sky-500 ${isActive ? "text-sky-500" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <button
                className="px-4 py-2 rounded-lg cursor-pointer bg-gray-300  text-neutral-900 dark:bg-neutral-700 dark:text-gray-100 transition-colors duration-300"
                onClick={toggleTheme}
              >
                <i
                  className={`bi ${
                    isDark ? "bi-moon-stars" : "bi-brightness-high"
                  } `}
                ></i>
              </button>
            </li>
          </ul>
        </div>
        {/* <!-- Mobile menu toggle button --> */}
        <div className="flex items-center w-full px-4 py-2 lg:hidden bg-gray-100/50 text-black dark:bg-neutral-900/50 dark:text-white fixed top-0 justify-between">
          <NavLink to="/">
            <span className="sr-only">Hanifa Tavassoli</span>
            <img
              src={isDark ? darkLogo : lightLogo}
              alt="logo"
              className="h-12 w-auto"
            />
          </NavLink>
          <button
            id="open-menu"
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 cursor-pointer"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* <!-- Mobile menu panel (initially hidden) --> */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 bg-gray-200/90 text-black dark:bg-neutral-900/90 dark:text-white  lg:hidden ${
          openMenu ? "block" : "hidden"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex justify-between items-center p-6">
          <NavLink to="/">
            <span className="sr-only">Hanifa Tavassoli</span>
            <img
              src={isDark ? darkLogo : lightLogo}
              alt="logo"
              className="h-12 w-auto"
            />
          </NavLink>
          <button
            id="close-menu"
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 cursor-pointer"
            onClick={() => setOpenMenu(false)}
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col items-start gap-y-6 px-6">
          <li>
            <NavLink
              to="/"
              onClick={() => handleMenuClick("hero-section")}
              className={({ isActive }) =>
                `hover:text-sky-500 ${isActive ? "text-sky-500" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => handleMenuClick("about-section")}
              className={({ isActive }) =>
                `hover:text-sky-500 ${isActive ? "text-sky-500" : ""}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              onClick={() => handleMenuClick("projects-section")}
              className="hover:text-sky-500"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => handleMenuClick("skills-section")}
              className={({ isActive }) =>
                `hover:text-sky-500 ${isActive ? "text-sky-500" : ""}`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <button
              className="px-4 py-2 rounded-lg cursor-pointer bg-gray-300  text-neutral-900 dark:bg-neutral-700 dark:text-gray-100 transition-colors duration-300"
              onClick={toggleTheme}
            >
              <i
                className={`bi ${
                  isDark ? "bi-moon-stars" : "bi-brightness-high"
                } `}
              ></i>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
