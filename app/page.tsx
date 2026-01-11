import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Dock from "@/components/Dock";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000] text-white selection:bg-white/20">
      <div className="relative max-w-3xl border-x border-zinc-800 bg-[#070707]  mx-auto px-6 py-16">
        {/* left Pattern */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-12 -translate-x-full border-l border-zinc-800">
          <div className="h-full w-full pattern-lines" />
        </div>

        {/* Right Pattern */}
        <div className="pointer-events-none absolute top-0 right-0 h-full w-12 translate-x-full border-r border-zinc-800">
          <div className="h-full w-full pattern-lines rotate-180" />
        </div>

        <Hero />
        <About />
        <Experience />
        <Education />
        <TechStack />
        <Projects />
        <Contact />
        <Dock />
      </div>
    </main>
  );
}
