function Card({ image, name, description, liveUrl, codeLink, featured }) {
  return (
    <>
      <div className="bg-neutral-800 rounded-sm overflow-hidden w-full max-w-[320px]">
        <a href={liveUrl} className="">
          <img
            src={image}
            alt={`${name} project`}
            className="transition-transform duration-500 hover:scale-105"
          />
        </a>
        <div className="text-start p-5">
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <div className="flex flex-row mb-4 gap-3"></div>
          <p className="mb-8">{description}</p>
          <div className="flex flex-wrap sm:flex-nowrap sm:flex-row gap-4 items-center justify-center text-sm">
            <a
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
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
