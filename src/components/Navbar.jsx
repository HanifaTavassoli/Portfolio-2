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
      </nav>
    </>
  );
}

export default Navbar;
