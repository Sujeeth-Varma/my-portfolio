import Image from "next/image";
import Link from "next/link";
import { Github, Globe } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="bg-card border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all duration-200">
      <div className="h-40 bg-project-gradient relative">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h2 className="text-primary font-bold text-lg mb-2">{project.name}</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-chip bg-chip px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-muted text-sm mb-6 line-clamp-3">
          {project.description}
        </p>

        <div className="flex gap-3 flex-wrap">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium btn-solid px-3 py-2 rounded transition-colors"
          >
            <Github className="w-3 h-3" /> GitHub
          </a>
          {project.websiteLink && (
            <a
              href={project.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-medium btn-contrast px-3 py-2 rounded transition-colors"
            >
              <Globe className="w-3 h-3" /> Website
            </a>
          )}
          <Link
            href={`/projects/${project.id}`}
            className="flex items-center gap-2 text-xs font-medium text-muted border border-zinc-700 px-3 py-2 rounded bg-card-hover transition-colors"
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}
