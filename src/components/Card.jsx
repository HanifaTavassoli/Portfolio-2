import { Link } from "react-router-dom";
function Card({ project }) {
  const { id, image, name, shortDesc, liveUrl, featured } = project;

  return (
    <div className="bg-gray-100 text-black dark:bg-neutral-900 dark:text-white rounded-sm overflow-hidden w-full max-w-[320px]">
      <a href={liveUrl} className="">
        {image ? (
          <img
            src={image}
            alt={`${name} project`}
            className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="w-full h-48 bg-sky-500 text-white flex items-center justify-center text-4xl font-bold">
            {name
              .split(" ")
              .map((word) => word)
              .join("")}
          </div>
        )}
      </a>
      <div className="text-start p-5">
        <div className="d-flex mb-2">
          <h3 className="text-xl font-bold mr-2 inline-block">{name}</h3>
          {featured && (
            <i className="bi bi-patch-check-fill inline text-sky-500 text-lg"></i>
          )}
        </div>
        <p className="mb-3">{shortDesc}</p>

        <div className="flex flex-wrap sm:flex-nowrap sm:flex-row gap-4 items-center justify-center text-sm">
          <Link
            to={`/projects/${id}`}
            state={project}
            className="w-full py-2 text-center rounded-xs bg-slate-700 text-sky-500 hover:bg-slate-900"
          >
            See Details
          </Link>
          {/* <a
            href={codeLink}
            target="_blank"
            className="px-8 py-2 rounded-xs bg-slate-700 text-sky-500 hover:bg-slate-900"
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
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
