import { useState } from "react";
const ProjectFilterBar = ({ techs, onFilter }) => {
  const [active, setActive] = useState("all");
  const clickHandler = (e) => {
    setActive(e.target.value);
    onFilter(e.target.value);
  };
  return (
    <div className="flex flex-wrap gap-2 mb-10 ">
      {techs.map((tech) => (
        <button
          key={tech}
          value={tech}
          onClick={clickHandler}
          className={`flex items-center gap-2 ${
            active == tech ? "bg-sky-500 text-white" : ""
          } border border-sky-500 text-sky-500 rounded-sm py-2 px-4 text-sm sm:text-base hover:bg-sky-500 hover:text-white hover:cursor-pointer`}
        >
          {tech}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilterBar;
