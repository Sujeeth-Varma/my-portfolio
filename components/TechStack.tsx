"use client";

import { motion } from "motion/react";
import {
  FaDocker,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
  FaServer,
} from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";

const techs = [
  { name: "Java", icon: <FaJava className="w-4 h-4 text-tech-java" /> },
  {
    name: "Spring Boot",
    icon: <SiSpringboot className="w-4 h-4 text-tech-spring" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-4 h-4 text-tech-typescript" />,
  },
  { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-tech-node" /> },
  {
    name: "Python",
    icon: <FaPython className="w-4 h-4 text-tech-python" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="w-4 h-4 text-tech-mongodb" />,
  },
  { name: "React", icon: <FaReact className="w-4 h-4 text-tech-react" /> },
  {
    name: "Express.js",
    icon: <SiExpress className="w-4 h-4 text-tech-express" />,
  },
  {
    name: "Docker",
    icon: <FaDocker className="w-4 h-4 text-tech-docker" />,
  },
  {
    name: "Microservices",
    icon: <FaServer className="w-4 h-4 text-tech-microservices" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-4 h-4 text-tech-postgres" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-4 h-4 text-tech-javascript" />,
  },
];

export default function TechStack() {
  const row1 = techs.slice(0, techs.length / 2);
  const row2 = techs.slice(techs.length / 2);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mb-12"
    >
      <h2 className="text-lg font-semibold text-primary mb-6">Tech Stack</h2>

      <div className="flex flex-col gap-4 overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* Row 1 - Moves Left */}
        <div className="flex">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-8 pr-8 shrink-0"
          >
            {[...row1, ...row1, ...row1, ...row1].map((tech, index) => (
              <div
                key={`row1-${index}`}
                className="flex items-center gap-2 text-muted whitespace-nowrap"
              >
                {tech.icon}
                <span className="text-md font-bold">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Moves Right */}
        <div className="flex">
          <motion.div
            initial={{ x: "-50%" }}
            animate={{ x: 0 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-8 pr-8 shrink-0"
          >
            {[...row2, ...row2, ...row2, ...row2].map((tech, index) => (
              <div
                key={`row2-${index}`}
                className="flex items-center gap-2 text-muted whitespace-nowrap"
              >
                {tech.icon}
                <span className="text-md font-bold">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
