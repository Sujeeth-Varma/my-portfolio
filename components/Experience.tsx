"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Experience() {
  const experiences = [
    {
      company: "CodTech IT Solutions",
      role: "Java Developer Intern",
      duration: "JULY 2025 - SEP 2025",
      logo: "/CDTI.png",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-8"
    >
      <h2 className="text-lg font-semibold text-white mb-6">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="flex justify-between items-start">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold border border-zinc-700">
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  width={32}
                  height={32}
                />
              </div>
              <div>
                <h3 className="text-white font-medium">{exp.company}</h3>
                <p className="text-zinc-500 text-sm">{exp.role}</p>
              </div>
            </div>
            <span className="text-zinc-500 text-sm">{exp.duration}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
