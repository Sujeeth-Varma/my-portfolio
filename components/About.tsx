"use client";

import { motion } from "motion/react";

export default function About() {
  const DESCRIPTION = `I am a passionate and dedicated computer science student with a strong foundation in software development and a keen interest in exploring new technologies. I thrive in collaborative environments and enjoy tackling complex problems through innovative solutions. With hands-on experience in various programming languages and frameworks, I am eager to contribute my skills and grow as a developer in the tech industry.`;
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-12"
    >
      <h2 className="text-lg font-semibold text-white mb-2">About</h2>
      <p className="text-zinc-400 leading-relaxed max-w-2xl">
        {DESCRIPTION.split(" ").map((word, idx) => (
          <motion.span
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.2 + idx / 50 }}
            viewport={{ once: true }}
            key={`${word}-${idx}`}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </p>
    </motion.section>
  );
}
