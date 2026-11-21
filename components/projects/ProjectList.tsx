import type { Project } from "@/data/projects";
import ProjectRow from "@/components/projects/ProjectRow";

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectRow project={project} index={index} key={project.slug} />
      ))}
    </div>
  );
}
