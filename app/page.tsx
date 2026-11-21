import Link from "next/link";
import PageIntro from "@/components/motion/PageIntro";
import RequestTrace from "@/components/motion/RequestTrace";
import CapabilityList from "@/components/profile/CapabilityList";
import Timeline from "@/components/profile/Timeline";
import ProjectList from "@/components/projects/ProjectList";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

const featuredProjects = projects.slice(0, 2);

export default function Home() {
  return (
    <PageIntro>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-status">
          <span aria-hidden="true" />
          {profile.availability}
        </div>

        <h1 id="hero-title">{profile.role}.</h1>
        <p className="hero-summary">{profile.summary}</p>

        <RequestTrace />

        <div className="hero-actions">
          <Link className="primary-link" href="/projects">
            View my work
          </Link>
          <a className="secondary-link" href={`mailto:${profile.email}`}>
            Email me
          </a>
        </div>
      </section>

      <section className="content-section" aria-labelledby="capabilities-title">
        <SectionHeading
          id="capabilities-title"
          title="What I work with"
        />
        <CapabilityList />
      </section>

      <section className="content-section" aria-labelledby="work-title">
        <div className="section-heading-row">
          <SectionHeading
            id="work-title"
            title="My work"
          />
          <Link className="text-link" href="/projects">
            All projects
          </Link>
        </div>
        <ProjectList projects={featuredProjects} />
      </section>

      <section className="content-section" aria-labelledby="timeline-title">
        <SectionHeading id="timeline-title" title="Experience" />
        <Timeline />
      </section>

      <section
        className="content-section direction-section"
        aria-labelledby="direction-title"
      >
        <SectionHeading id="direction-title" title="Current direction" />
        <div className="direction-row">
          <p className="direction-label">Now</p>
          <p className="direction-copy">
            I am growing deeper into backend systems: service design, reliable
            data flows, and the decisions that keep applications understandable
            as they expand.
          </p>
        </div>
      </section>
    </PageIntro>
  );
}
