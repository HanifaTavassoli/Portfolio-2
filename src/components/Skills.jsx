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

          <div className="flex space-x-16 overflow-hidden p-5"></div>
        </div>
      </section>
    </>
  );
}

export default Skills;
