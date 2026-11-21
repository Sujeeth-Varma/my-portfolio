import type { Metadata } from "next";
import PageIntro from "@/components/motion/PageIntro";
import ProjectList from "@/components/projects/ProjectList";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Backend and full-stack projects by Sujeeth Varma, including architecture and engineering decisions.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <PageIntro>
      <header className="page-header">
        <p className="page-kicker">Project index</p>
        <h1>Systems I have built.</h1>
        <p>
          A closer look at the problem behind each project, the backend shape,
          and the decisions made along the way.
        </p>
      </header>

      <ProjectList projects={projects} />
    </PageIntro>
  );
}
