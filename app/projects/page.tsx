import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <div className="mb-10">
        <Link href="/" className="text-sm link-muted">
          ← Back to home
        </Link>
        <h1 className="text-3xl font-bold mt-4 text-primary">Projects</h1>
        <p className="text-muted mt-2 text-sm">
          A complete list of my work and project case studies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
