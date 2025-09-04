const ProjectFilterBar = ({ techs, onFilter }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-10 ">
      {techs.map((tech) => (
        <button
          key={tech}
          onClick={() => onFilter(tech)}
          className={`flex items-center gap-2 bg-slate-800 text-sky-500 rounded-sm py-2 px-4 text-sm sm:text-base hover:bg-slate-950 hover:cursor-pointer`}
        >
          {tech}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilterBar;
