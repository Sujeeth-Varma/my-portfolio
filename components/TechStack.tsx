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
  { name: "Java", icon: <FaJava className="w-4 h-4 text-red-600" /> },
  {
    name: "Spring Boot",
    icon: <SiSpringboot className="w-4 h-4 text-green-600" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-4 h-4 text-blue-400" />,
  },
  { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-green-500" /> },
  { name: "Python", icon: <FaPython className="w-4 h-4 text-yellow-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-green-400" /> },
  { name: "React", icon: <FaReact className="w-4 h-4 text-cyan-400" /> },
  { name: "Express.js", icon: <SiExpress className="w-4 h-4 text-gray-500" /> },
  { name: "Docker", icon: <FaDocker className="w-4 h-4 text-blue-600" /> },
  {
    name: "Microservices",
    icon: <FaServer className="w-4 h-4 text-gray-600" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-4 h-4 text-blue-700" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-4 h-4 text-yellow-300" />,
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
      <h2 className="text-lg font-semibold text-white mb-6">Tech Stack</h2>

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
                className="flex items-center gap-2 text-zinc-400 whitespace-nowrap"
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
                className="flex items-center gap-2 text-zinc-400 whitespace-nowrap"
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
