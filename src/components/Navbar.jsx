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
      </nav>
    </>
  );
}

export default Navbar;
