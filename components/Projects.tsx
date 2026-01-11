"use client";

import { motion } from "motion/react";
import { Github, Globe } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      name: "Realtime Chat App",
      tags: ["Java", "Spring Boot", "Next.js", "WebSocket", "MongoDB"],
      description:
        "A real-time chat application built using Java Spring Boot for the backend and Next.js for the frontend. Supports WebSocket-based messaging with MongoDB for data persistence.",
      githubLink: "https://github.com/Sujeeth-Varma/realtime-chat-app",
      websiteLink: "NA",
      image: "/projects/chat.png",
    },
    {
      name: "Movie Ticket Booking App",
      tags: ["Spring Boot", "PostgreSQL", "Next.js", "DB Transactions", "JWT"],
      description:
        "A fullstack movie ticket booking application with a Java Spring Boot backend and a Next.js frontend. It uses PostgreSQL for data persistence. The app supports movie listings, showtimes, seat selection, and ticket booking with JWT-based authentication.",
      githubLink: "https://github.com/Sujeeth-Varma/movie-ticket-booking-app",
      websiteLink: "NA",
      image: "/projects/movieapp.png",
    },
  ];
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="mb-24"
    >
      <div className="flex items-center justify-center mb-8">
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold text-white bg-white/10 px-4 py-2 rounded w-fit mb-2">
            PROOF OF WORK
          </span>
          <h2 className="text-2xl font-bold text-white">
            Check out my latest work
          </h2>
          <p className="text-zinc-500 text-sm mt-1">
            I&apos;ve worked on a variety of projects, here are some that I
            like.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all group hover:scale-101 duration-200"
          >
            <div className="h-40 bg-linear-to-br from-pink-900 via-purple-900 to-indigo-900 relative">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-white font-bold text-lg mb-2">
                {project.name}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-zinc-400 bg-zinc-800 px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-zinc-400 text-sm mb-6 line-clamp-3">
                {project.description}
              </p>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 text-xs font-medium text-white bg-zinc-800 px-3 py-2 rounded hover:bg-zinc-700 transition-colors">
                  <Github className="w-3 h-3" /> GitHub
                </button>
                {project.websiteLink !== "NA" && (
                  <button className="flex items-center gap-2 text-xs font-medium text-black bg-white px-3 py-2 rounded hover:bg-gray-200 transition-colors">
                    <Globe className="w-3 h-3" /> Website
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
