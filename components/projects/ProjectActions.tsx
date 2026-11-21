import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectActions({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "project-actions project-actions-compact" : "project-actions"}>
      <Link
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub<span className="sr-only"> (opens in a new tab)</span>
      </Link>
      {project.websiteLink ? (
        <Link
          href={project.websiteLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live site<span className="sr-only"> (opens in a new tab)</span>
        </Link>
      ) : null}
    </div>
  );
}
