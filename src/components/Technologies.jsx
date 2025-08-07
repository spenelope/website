import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiJavascript, SiTypescript, SiPython, SiFastapi, SiPostgresql, SiMysql, SiNginx } from "react-icons/si";
import { DiJava, DiAws } from "react-icons/di";
import { FaNodeJs, FaGit } from "react-icons/fa";
import { TbBrandVue } from "react-icons/tb";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const techData = [
    { icon: <SiPython className="text-7xl text-blue-400" />, name: "Python", duration: 2 },
    { icon: <SiJavascript className="text-7xl text-yellow-500" />, name: "JavaScript", duration: 3 },
    { icon: <SiTypescript className="text-7xl text-blue-600" />, name: "TypeScript", duration: 4 },
    // { icon: <DiJava className="text-7xl text-red-500" />, name: "Java", duration: 5 },
    { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, name: "React.js", duration: 2.5 },
    { icon: <TbBrandNextjs className="text-7xl" />, name: "Next.js", duration: 3 },
    // { icon: <SiFastapi className="text-7xl text-green-500" />, name: "FastAPI", duration: 4.5 },
    { icon: <FaNodeJs className="text-7xl text-green-500" />, name: "Node.js", duration: 6 },
    { icon: <TbBrandVue className="text-7xl text-green-400" />, name: "Vue.js", duration: 4 },
    { icon: <SiPostgresql className="text-7xl text-sky-700" />, name: "PostgreSQL", duration: 3.5 },
    { icon: <SiMysql className="text-7xl text-blue-700" />, name: "MySQL", duration: 5 },
    { icon: <SiMongodb className="text-7xl text-green-500" />, name: "MongoDB", duration: 5 },
    // { icon: <DiAws className="text-7xl text-orange-500" />, name: "Amazon S3", duration: 4 },
    // { icon: <DiAws className="text-7xl text-orange-400" />, name: "DynamoDB", duration: 3 },
    // { icon: <SiNginx className="text-7xl text-green-600" />, name: "Nginx", duration: 4.5 },
    { icon: <FaGit className="text-7xl text-orange-600" />, name: "Git", duration: 3 },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {techData.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(tech.duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
          >
            {tech.icon}
            <p className="mt-2 text-sm font-semibold text-white">{tech.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;