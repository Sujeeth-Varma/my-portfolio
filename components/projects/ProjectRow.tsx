import Link from "next/link";
import type { Project } from "@/data/projects";
import ProjectActions from "@/components/projects/ProjectActions";
import TagList from "@/components/ui/TagList";

export default function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="project-row">
      <div className="project-index" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="project-copy">
        <p className="project-focus">{project.systemFocus}</p>
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.name}</Link>
        </h3>
        <p>{project.summary}</p>
        <TagList tags={project.stack} />
      </div>

      <div className="project-row-actions">
        <Link className="case-study-link" href={`/projects/${project.slug}`}>
          Read case study
        </Link>
        <ProjectActions project={project} compact />
      </div>
    </article>
  );
}
