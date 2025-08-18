function Skills({ techStacks }) {
  const stacks = Object.values(techStacks);

  return (
    <>
      <section
        id="skills-section"
        className="py-20 bg-neutral-800 overflow-hidden"
      >
        <div className="custom-container py-5 mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-12 text-white">
            My Web Skills
          </h2>

          <div className="flex space-x-16 overflow-hidden p-5">
            <ul className="flex space-x-16 animation">
              {stacks.map((stack) => (
                <li className="shadow-[0_0_5px_0.5px] shadow-sky-500/50 border-1 border-sky-500 rounded-md p-5 transition-transform duration-300 hover:scale-120 hover:shadow-[0_0_5px_2.5px]">
                  <img
                    src={stack}
                    alt={`${stack} logo`}
                    className="max-w-25"
                    width="50"
                  />
                </li>
              ))}
            </ul>

            {/* <!-- render two times manually --> */}
            <ul className="flex space-x-16 animation">
              {stacks.map((stack) => (
                <li className="shadow-[0_0_5px_0.5px] shadow-sky-500/50 border-1 border-sky-500 rounded-md p-5 transition-transform duration-300 hover:scale-120 hover:shadow-[0_0_5px_2.5px]">
                  <img
                    src={stack}
                    alt={`${stack} logo`}
                    className="max-w-25"
                    width="50"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
