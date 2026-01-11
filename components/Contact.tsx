"use client";

import { motion } from "motion/react";
import { Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mb-16 flex flex-col items-center text-center"
    >
      <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s Connect</h2>
      <p className="text-zinc-400 max-w-md mb-8 leading-relaxed">
        I&apos;m currently looking for new opportunities. Whether you have a
        question or just want to say hi, my inbox is always open.
      </p>
      <a
        href="mailto:sujeethvarma27@gmail.com"
        className="group flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 text-white font-medium rounded-full hover:bg-zinc-800 transition-all hover:pr-8 relative overflow-hidden"
      >
        <Mail className="w-4 h-4" />
        <span>Say Hello</span>
        <ArrowRight className="w-4 h-4 absolute right-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all" />
      </a>

      <div className="mt-16 text-xs text-zinc-600">
        <p>© {new Date().getFullYear()} Sujeeth Varma. All rights reserved.</p>
      </div>
    </motion.section>
  );
}
