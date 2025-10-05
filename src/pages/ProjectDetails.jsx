import Layout from "./Layout";
import { useLocation } from "react-router-dom";
function ProjectDetails({ isDark, toggleTheme }) {
  const project = useLocation().state;

  const {
    image,
    name,
    shortDesc,
    longDesc,
    liveUrl,
    codeLink,
    featured,
    stacks,
    status,
  } = project;

  return (
    <Layout isDark={isDark} toggleTheme={toggleTheme}>
      <section
        className="py-20 bg-gray-200 text-black dark:bg-neutral-800 dark:text-white"
        id="projectDetails-section"
      >
        <div className="custom-container py-5 ">
          <div className="flex items-center justify-between">
            <div className="flex-1 ">
              <div className="bg-gray-100 h-full text-black dark:bg-neutral-900 dark:text-white rounded-xl w-full max-w-100 shadow-lg mx-auto">
                <a
                  href={liveUrl}
                  className="rounded-lg inline-block mt-[-25px]"
                >
                  {image ? (
                    <img
                      src={image}
                      alt={`${name} project`}
                      className="w-85 h-45 mx-auto rounded-xl shadow-sm object-cover transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <div className="w-85 h-45 bg-sky-500 text-white flex items-center justify-center text-4xl font-bold rounded-lg">
                      {name
                        .split(" ")
                        .map((word) => word)
                        .join("")}
                    </div>
                  )}
                </a>
                <div className="text-center p-5">
                  <div className="d-flex mb-2">
                    <h3 className="text-xl font-bold mr-2 inline-block">
                      {name}
                    </h3>
                    {featured && (
                      <i className="bi bi-patch-check-fill inline text-sky-500 text-lg"></i>
                    )}
                  </div>
                  <div className="flex flex-row justify-center mb-4 gap-3">
                    {Object.values(stacks).map((stack) => (
                      <img src={stack} alt={`${stack} logo`} className="w-7" />
                    ))}
                  </div>
                  <div className="mb-3">
                    <span class="inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-sky-500 rounded-full">
                      {status === "Completed" ? (
                        <>
                          <i class="bi bi-check-circle-fill mr-1"></i> Completed
                        </>
                      ) : (
                        <>
                          <i class="bi bi-hourglass-split mr-1"></i> In Progress
                        </>
                      )}
                    </span>
                  </div>
                  <p className="mb-3 ">{shortDesc}</p>

                  <div className="flex flex-wrap sm:flex-nowrap sm:flex-row gap-4 items-center justify-around text-sm mt-10 border-t border-gray-200 pt-5">
                    <a
                      href={codeLink}
                      target="_blank"
                      className="px-8 py-2 rounded-sm bg-slate-700 text-sky-500 hover:bg-slate-900"
                    >
                      <i className="fa-brands fa-github"></i> Github
                    </a>
                    <a
                      href={liveUrl}
                      target="_blank"
                      className="px-8 py-2 rounded-sm bg-slate-700 text-sky-500 hover:bg-slate-900"
                    >
                      <i className="fa fa-link"></i>
                      Visit
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 self-start">
              <p className="mb-3 text-justify">{longDesc}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ProjectDetails;
