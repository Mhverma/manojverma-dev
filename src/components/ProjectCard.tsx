import type { Project } from "../data/projects";
import { Badge } from "./Badge";

interface Props {
  project: Project;
  isActive: boolean;
  onClick: () => void;
}

export function ProjectCard({ project, isActive, onClick }: Props) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-expanded={isActive}
      aria-label={`View details for ${project.title}`}
      className={`
        relative rounded-xl p-5 cursor-pointer border transition-all duration-200
        hover:-translate-y-1 hover:border-blue-500 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#111827]
        ${
          isActive
            ? "bg-[#0f1e35] border-blue-500"
            : "bg-[#111827] border-white/10"
        }
      `}
    >
      {/* Top row: badge + arrow */}
      <div className="flex justify-between items-start mb-3">
        <Badge label={project.badge} color={project.badgeColor} />
        <span
          className={`text-sm transition-colors ${isActive ? "text-blue-400" : "text-white/20"}`}
        >
          ↗
        </span>
      </div>

      {/* Title */}
      <h3 className="text-white font-bold text-sm leading-snug mb-2">
        {project.title}
      </h3>

      {/* Summary */}
      <p className="text-white/50 text-xs leading-relaxed mb-3">
        {project.summary}
      </p>

      {/* Tech stack pills (first 4 only) */}
      <div className="flex flex-wrap gap-1 mb-3">
        {project.stack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="text-[10px] font-mono text-white/40 border border-white/15 rounded px-1.5 py-0.5"
          >
            {tech}
          </span>
        ))}
        {project.stack.length > 4 && (
          <span className="text-[10px] font-mono text-white/25 px-1.5 py-0.5">
            +{project.stack.length - 4} more
          </span>
        )}
      </div>

      {/* Impact line */}
      <p className="text-blue-400 text-[11px] font-semibold">⚡ {project.impact}</p>
    </div>
  );
}
