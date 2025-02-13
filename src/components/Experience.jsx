import React from "react";
import { experiences } from "../constants/constant";
import { motion } from "motion/react";

const Experience = () => {
  return (
    <div className="border-b  border-neutral-900 pb-4 lg:mb-36">
      <motion.h2
        whileInView={{ opacity: 1,y:0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-4xl text-center"
      >
        Experience
      </motion.h2>
      <div>
        {experiences.map((experience, ind) => (
          <div
            key={ind}
            className="mb-8 flex flex-wrap lg:flex-justify-center "
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span 
                whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
                className="text-sm text-purple-400 hover:text-green-200">
                  {experience.company}
                </span>
              </h6>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="mb-4 text-neutral-500"
              >
                {experience.description}
              </motion.p>
              <div className="flex flex-wrap">
                {experience.technologies.map((tech, ind) => (
                  <span
                    key={ind}
                    className="mb-2 border-1 border-neutral-600 rounded-2xl mt-4 mr-2 py-2 px-4 text-sm font-medium text-neutral-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
