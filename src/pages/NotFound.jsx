import Layout from "./Layout";
import notFoundimg from "../assets/img/page-not-found.svg";
import { Link } from "react-router-dom";
function NotFound({ isDark, toggleTheme }) {
  return (
    <Layout isDark={isDark} toggleTheme={toggleTheme}>
      <section
        className="py-10  bg-gray-200 text-black dark:bg-neutral-800 dark:text-white "
        id="notFound-section"
      >
        <div className="flex flex-col justify-between items-center gap-10 text-center">
          <img src={notFoundimg} alt="not found page" className="h-50" />
          <div>
            <p className="mb-10">We can't find the page you're looking for.</p>
            <Link to="/" className="py-2 px-5 bg-sky-500 text-white rounded-sm">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default NotFound;
