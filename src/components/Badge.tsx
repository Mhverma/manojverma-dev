import type { BadgeColor } from "../data/projects";

const colorMap: Record<BadgeColor, string> = {
  blue: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  amber: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/30",
};

export function Badge({
  label,
  color,
}: {
  label: string;
  color: BadgeColor;
}) {
  return (
    <span
      className={`text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border font-sans ${colorMap[color]}`}
    >
      {label}
    </span>
  );
}
