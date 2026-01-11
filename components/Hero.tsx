"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Hero() {
  const NAME = "Hi, I'm Sujeeth Varma";
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4 mb-8"
    >
      <div className="w-20 h-20 rounded-full bg-zinc-800 overflow-hidden border border-zinc-700 flex items-center justify-center shrink-0">
        {/* Placeholder for avatar */}
        <Image
          src={"/image.png"}
          width={100}
          height={10070}
          className="inset-0"
          alt="profile"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
          {NAME.split(" ").map((word, idx) => (
            <motion.span
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.1 + idx / 10 }}
              viewport={{ once: true }}
              key={`${word}-${idx}`}
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <div className="mt-2 inline-flex items-center px-2 py-1 bg-zinc-900 border border-zinc-800 rounded-md hover:bg-zinc-800 cursor-pointer transition-colors">
          <span className="bg-emerald-500 w-2 h-2 rounded-full mr-2"></span>
          <span className="text-zinc-400 text-sm font-mono">
            aka agentx_dev
          </span>
        </div>
      </div>
    </motion.section>
  );
}
