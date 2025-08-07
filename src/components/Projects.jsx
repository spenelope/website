import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  width={300}
                  height={300}
                  alt={project.title}
                  className="mb-6 rounded hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="md:ml-8 w-full max-w-xl lg:w-3/4"
            >
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2 font-semibold hover:underline cursor-pointer"
              >
                {project.title}
              </a>
              <ul>
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              {/* <p className="mb-4 text-neutral-400">{project.description}</p> */}
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-4 rounded bg-purple-700 px-4 py-2 text-white hover:bg-purple-800 transition-colors">
                    See Demo
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
