"use client";

import { motion } from "motion/react";

export default function About() {
  const DESCRIPTION = `An aspiring Full Stack Developer specialized in the Java ecosystem and Gen-AI applications. Gained
hands-on experience through internships and academic projects. Looking for Full Stack or SDE roles to
contribute to software development and grow as a developer.`;
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-12"
    >
      <h2 className="text-lg font-semibold text-primary mb-2">About</h2>
      <p className="text-muted leading-relaxed">
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
