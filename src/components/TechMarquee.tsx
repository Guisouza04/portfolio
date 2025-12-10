import { motion } from "framer-motion";

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Node.js", icon: "🟢" },
  { name: "Next.js", icon: "▲" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "GraphQL", icon: "◈" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "Figma", icon: "🎯" },
  { name: "Git", icon: "🔀" },
  { name: "Python", icon: "🐍" },
];

export function TechMarquee() {
  const doubled = [...technologies, ...technologies];

  return (
    <div className="relative overflow-hidden py-8">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        className="flex gap-8 animate-marquee pause-animation"
        style={{ width: "fit-content" }}
      >
        {doubled.map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-card/50 hover:border-primary hover:glow-sm transition-all duration-300"
          >
            <span className="text-2xl">{tech.icon}</span>
            <span className="font-medium whitespace-nowrap">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
