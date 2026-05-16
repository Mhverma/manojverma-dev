import type { Project } from "../data/projects";

interface Props {
  project: Project;
  onClose: () => void;
}

export function ProjectDetail({ project, onClose }: Props) {
  return (
    <div className="mt-5 bg-[#0f1e35] border border-blue-500/25 rounded-xl p-6 animate-fadeIn">
      {/* Header */}
      <div className="flex justify-between items-start mb-1">
        <h3 className="text-white font-black text-xl leading-snug flex-1">
          {project.title}
        </h3>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="text-white/30 hover:text-white/70 text-lg ml-4 mt-1 transition-colors flex-shrink-0"
          aria-label="Close detail"
        >
          ✕
        </button>
      </div>

      {/* Company / role line */}
      <p className="text-blue-400 text-xs mb-5">{project.company}</p>

      {/* Bullet points */}
      <ul className="space-y-0 mb-5">
        {project.points.map((point, i) => (
          <li
            key={i}
            className="text-white/70 text-xs leading-relaxed pl-5 relative border-b border-white/5 py-2.5"
          >
            <span className="absolute left-0 top-3 text-blue-400 text-[10px]">
              →
            </span>
            {point}
          </li>
        ))}
      </ul>

      {/* Stats row (only if stats exist) */}
      {project.stats.length > 0 && (
        <div className="flex gap-3 flex-wrap mb-5">
          {project.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-blue-500/10 rounded-lg px-4 py-2.5 text-center min-w-[100px]"
            >
              <span className="block text-blue-400 font-black text-xl">
                {stat.value}
              </span>
              <span className="text-white/40 text-[10px]">{stat.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Full tech stack */}
      <div>
        <p className="text-white/30 text-[10px] uppercase tracking-widest mb-2 font-semibold">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono bg-white/5 text-white/60 border border-white/10 rounded px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
