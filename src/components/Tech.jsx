import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  useEffect(() => {
    gsap.fromTo(
      ".tech-icon",
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".tech-icons-wrapper",
          start: "top 80%",
          end: "bottom 70%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section>
      <h2 className="text-center text-3xl font-bold mb-10 text-white">Technologies & Tools</h2>
      <div className="tech-icons-wrapper flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-24 h-24 sm:w-28 sm:h-28" key={technology.name}>
            <img
              src={technology.icon}
              alt={technology.name}
              title={technology.name}
              className="tech-icon w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
