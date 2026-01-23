"use client";

import { motion } from "motion/react";
import { Home, Github, Linkedin, Twitter, FileText } from "lucide-react";
import Link from "next/link";

export default function Dock() {
  const icons = [
    { icon: <Home className="w-5 h-5" />, label: "Home", href: "/" },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/Sujeeth-Varma/",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sujeeth-varma/",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      href: "https://x.com/agentX_dev",
    },
    // {
    //   icon: <FileText className="w-5 h-5" />,
    //   label: "Resume",
    //   href: "/resume/Sujeeth_Resume.pdf",
    // },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hover:scale-105 duration-200 transition ease-in-out"
    >
      <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900/80 backdrop-blur-md border border-zinc-800/50 rounded-full shadow-lg shadow-black/50">
        {icons.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            target={item.href == "/" ? "_self" : "_blank"}
            rel="noopener noreferrer"
          >
            <button
              key={index}
              className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer relative group"
              aria-label={item.label}
            >
              {item.icon}
              <span className="absolute top-0 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 text-xs text-white rounded opacity-0 group-hover:opacity-100 group-hover:-top-10 duration-200 transition-all whitespace-nowrap pointer-events-none border border-zinc-700 ">
                {item.label}
              </span>
            </button>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
