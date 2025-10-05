import darkLogo from "../assets/img/dark_logo.png";
import lightLogo from "../assets/img/light_logo.png";
function Footer({ isDark }) {
  return (
    <footer className="bg-gray-100 text-black dark:bg-neutral-900 dark:text-white py-16">
      <div className="custom-container grid grid-rows-3 gap-3 justify-items-center  text-center">
        <div>
          <a href="#">
            <img
              src={isDark ? darkLogo : lightLogo}
              alt="logo"
              className="h-16 rounded-full"
            />
          </a>
        </div>
        <ul className="flex gap-5 items-center">
          <li>
            <a
              href="https://github.com/hanifatavassoli"
              className="text-2xl hover:text-sky-500"
              target="_blank"
            >
              <i className="bi bi-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/hanifatavassoli"
              className="text-2xl hover:text-sky-500"
              target="_blank"
            >
              <i className="bi bi-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/hanifatavassoli"
              className="text-2xl hover:text-sky-500"
              target="_blank"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://t.me/hnf_HANI"
              className="text-2xl hover:text-sky-500"
              target="_blank"
            >
              <i className="bi bi-telegram"></i>
            </a>
          </li>
        </ul>
        <div>
          <p>
            Designed and developed by
            <a href="https://github.com/hanifatavassoli"> Hanifa Tavassoli </a>
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
