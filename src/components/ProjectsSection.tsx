"use client";
import { useRef, useState } from "react";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetail } from "./ProjectDetail";

export default function ProjectsSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (id: string) => {
    if (activeId === id) {
      setActiveId(null);
      return;
    }
    setActiveId(id);
    // Smooth scroll to detail panel after state update
    setTimeout(() => {
      detailRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 50);
  };

  const activeProject = projects.find((p) => p.id === activeId) ?? null;

  return (
    <section id="work" className="py-20 px-6 max-w-6xl mx-auto">
      {/* Section heading */}
      <h2 className="text-4xl font-black text-white mb-2 font-sans">
        Projects
      </h2>
      <p className="text-white/40 text-sm mb-10 font-sans">
        Click any project to see the full breakdown
      </p>

      {/* 3-column card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isActive={activeId === project.id}
            onClick={() => handleCardClick(project.id)}
          />
        ))}
      </div>

      {/* Detail panel — renders below the full grid */}
      <div ref={detailRef}>
        {activeProject && (
          <ProjectDetail
            project={activeProject}
            onClose={() => setActiveId(null)}
          />
        )}
      </div>
    </section>
  );
}
