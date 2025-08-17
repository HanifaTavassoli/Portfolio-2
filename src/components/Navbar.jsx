import logo from "../assets/img/logo.png";
function Navbar() {
  return (
    <>
      <nav
        className="mx-auto flex items-center justify-around py-2 lg:shadow-md lg:shadow-sky-500/50 bg-neutral-950 w-full lg:fixed lg:top-0"
        aria-label="Global"
      >
        <div className="hidden lg:flex bg-neutral-950">
          <a href="#">
            <span className="sr-only">Hanifa Tavassoli</span>
            <img
              src={logo}
              alt="logo"
              className="h-12 w-auto rounded-full border-2 border-neutral-950"
            />
          </a>
        </div>
        <div className="hidden lg:flex w-100">
          <ul className="flex items-center justify-around w-full lg:gap-x-12">
            <li>
              <a href="#hero-section" className="hover:text-sky-500">
                Home
              </a>
            </li>
            <li>
              <a href="#skills-section" className="hover:text-sky-500">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects-section" className="hover:text-sky-500">
                Projects
              </a>
            </li>
            <li>
              <a href="#contacts-section" className="hover:text-sky-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- Mobile menu toggle button --> */}
        <div className="flex items-center w-full px-4 py-2 lg:hidden bg-neutral-950 fixed top-0 justify-between">
          <a href="#">
            <span className="sr-only">Hanifa Tavassoli</span>
            <img
              src={logo}
              alt="logo"
              className="h-12 w-auto rounded-full border-2 border-neutral-950"
            />
          </a>
          <button
            id="open-menu"
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-100 cursor-pointer"
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
        className="hidden fixed inset-0 z-50 bg-neutral-900/95 lg:hidden"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex justify-between items-center p-6">
          <a href="#">
            <span className="sr-only">Hanifa Tavassoli</span>
            <img
              src={logo}
              alt="logo"
              className="h-12 w-auto rounded-full border-2 border-neutral-950"
            />
          </a>
          <button
            id="close-menu"
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-100 cursor-pointer"
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
      </div>
    </>
  );
}

export default Navbar;
