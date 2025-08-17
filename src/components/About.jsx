import { useState } from "react";
function About({ animation }) {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore((showMore) => !showMore);
  };
  return (
    <section className="py-20 bg-neutral-800 " id="about-section">
      <div className="custom-container">
        <div className="flex flex-col md:flex-row gap-10">
          <img
            alt="GIF"
            src={animation}
            className="rounded-sm mx-auto md:mx-0"
            width="500"
            height="250"
          />
          <div className="text-left mt-4 md:mt-0 md:ml-8">
            <h2 className=" mb-10 text-xl sm:text-2xl md:text-3xl font-bold">
              About Me
            </h2>
            <div className="sm:text-base md:text-lg hyphenate text-base">
              <span>
                I'm
                <a href="#" className="text-sky-500 mx-1">
                  Hanifa Tavassoli
                </a>
                from Herat, Afghanistan. I'm a third-year Computer Science
                student at Herat University. As a programmer, I thrive on coding
                and solving challenges. My goal is to become a professional
                software engineer and contribute to innovative projects that
                will shape the future of the tech industry.
              </span>
              {showMore && (
                <span>
                  Right now, I'm focused on learning React and JavaScript to
                  enhance my front-end development skills. I’m excited to
                  continue this journey of growth and look forward to creating
                  meaningful contributions to the world of technology!
                </span>
              )}
              <button
                className="text-sky-500 hover:text-sky-600 ml-1 cursor-pointer transition-all"
                onClick={toggleShowMore}
              >
                {showMore ? "Hide Details" : "More Details"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
