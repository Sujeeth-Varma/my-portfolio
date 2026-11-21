import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageIntro from "@/components/motion/PageIntro";
import ArchitectureDiagram from "@/components/projects/ArchitectureDiagram";
import ProjectActions from "@/components/projects/ProjectActions";
import TagList from "@/components/ui/TagList";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.name,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.name} — Sujeeth Varma`,
      description: project.summary,
      type: "article",
      images: [
        {
          url: project.image.src,
          alt: project.image.alt,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject = projects[projectIndex - 1];
  const nextProject = projects[projectIndex + 1];

  return (
    <PageIntro>
      <article className="case-study">
        <Link className="back-link" href="/projects">
          Back to projects
        </Link>

        <header className="case-study-header">
          <p className="page-kicker">{project.systemFocus}</p>
          <h1>{project.name}</h1>
          <p className="case-study-summary">{project.summary}</p>
          <div className="case-study-header-meta">
            <TagList tags={project.stack} />
            <ProjectActions project={project} />
          </div>
        </header>

        <figure className="project-figure">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1080px"
          />
        </figure>

        <div className="case-study-grid">
          <aside className="case-study-facts" aria-label="Project facts">
            <dl>
              <div>
                <dt>Role</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>System focus</dt>
                <dd>{project.systemFocus}</dd>
              </div>
              <div>
                <dt>Capabilities</dt>
                <dd>{project.capabilities.join(", ")}</dd>
              </div>
            </dl>
          </aside>

          <div className="case-study-body">
            <section aria-labelledby="problem-title">
              <h2 id="problem-title">The problem</h2>
              <p>{project.problem}</p>
            </section>

            <section aria-labelledby="solution-title">
              <h2 id="solution-title">The approach</h2>
              <p>{project.solution}</p>
            </section>

            <section aria-labelledby="architecture-title">
              <h2 id="architecture-title">System flow</h2>
              <ArchitectureDiagram nodes={project.architecture} />
            </section>

            <section aria-labelledby="decisions-title">
              <h2 id="decisions-title">Engineering decisions</h2>
              <div className="decision-list">
                {project.decisions.map((decision) => (
                  <div className="decision" key={decision.title}>
                    <h3>{decision.title}</h3>
                    <p>{decision.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="challenges-title">
              <h2 id="challenges-title">Challenges and tradeoffs</h2>
              <ul className="challenge-list">
                {project.challenges.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <nav className="project-pagination" aria-label="Project navigation">
          <div>
            {previousProject ? (
              <Link href={`/projects/${previousProject.slug}`}>
                <span>Previous project</span>
                {previousProject.name}
              </Link>
            ) : null}
          </div>
          <div>
            {nextProject ? (
              <Link href={`/projects/${nextProject.slug}`}>
                <span>Next project</span>
                {nextProject.name}
              </Link>
            ) : null}
          </div>
        </nav>
      </article>
    </PageIntro>
  );
}
