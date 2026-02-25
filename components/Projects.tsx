"use client";

import { motion } from "motion/react";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="mb-24"
    >
      <div className="flex items-center justify-center mb-8">
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold text-primary bg-soft px-4 py-2 rounded w-fit mb-2">
            PROOF OF WORK
          </span>
          <h2 className="text-2xl font-bold text-primary">
            Check out my latest work
          </h2>
          <p className="text-muted text-sm mt-1">
            I&apos;ve worked on a variety of projects, here are some that I
            like.
          </p>
          <Link href="/projects" className="text-sm link-muted mt-3">
            All projects →
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.slice(0, 2).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </motion.section>
  );
}
