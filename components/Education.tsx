"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mb-12"
    >
      <h2 className="text-lg font-semibold text-white mb-6">Education</h2>
      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold border border-zinc-700">
            <Image
              src="/sietk.png"
              alt="Siddharth Institute of Engineering and Technology"
              width={32}
              height={32}
            />
          </div>
          <div>
            <h3 className="text-white font-medium">
              Siddharth Institute of Engineering and Technology
            </h3>
            <p className="text-zinc-500 text-sm">
              B.Tech in Computer Science and Engineering
            </p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-zinc-500 text-sm block">2022 - 2026</span>
          <span className="text-zinc-500 text-sm block">CGPA: 9.01/10</span>
        </div>
      </div>
    </motion.section>
  );
}
