import { motion } from "framer-motion";
import { AWARD } from "../constants";
const Award = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Award
      </motion.h2>
      <div>
        {AWARD.map((award, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <a
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={award.image}
                  width={300}
                  height={300}
                  alt={award.title}
                  className="mb-6 rounded hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <a
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className="lg:ml-8 mb-2 font-semibold hover:underline cursor-pointer"
              >
                {award.title}
              </a>
              {/* <p className="mb-4 text-neutral-400">{project.description}</p> */}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Award;
