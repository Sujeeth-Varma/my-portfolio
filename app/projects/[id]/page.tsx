import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Github, Globe } from "lucide-react";
import { projects } from "@/data/projects";

type ProjectDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Link href="/projects" className="text-sm link-muted">
        ← Back to projects
      </Link>

      <div className="mt-6 relative h-56 rounded-xl overflow-hidden border border-zinc-800">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-3xl font-bold mt-6">{project.name}</h1>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-chip bg-chip px-2 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-muted mt-6 leading-7">{project.description}</p>

      <div className="flex gap-3 mt-8 flex-wrap">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium btn-solid px-4 py-2 rounded transition-colors"
        >
          <Github className="w-4 h-4" /> GitHub Repository
        </a>
        {project.websiteLink && (
          <a
            href={project.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium btn-contrast px-4 py-2 rounded transition-colors"
          >
            <Globe className="w-4 h-4" /> Live Website
          </a>
        )}
      </div>
    </>
  );
}
