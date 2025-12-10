import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Projects() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const gridPositions = [
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-2",
    "col-span-2 row-span-1",
  ];

  const colors = [
    "from-amber-500/20 to-orange-500/20",
    "from-blue-500/20 to-cyan-500/20",
    "from-purple-500/20 to-pink-500/20",
    "from-emerald-500/20 to-teal-500/20",
  ];

  return (
    <section id="projects" className="py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.projects.title}</h2>
          <p className="text-xl text-muted-foreground">{t.projects.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {t.projects.items.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`group relative rounded-2xl border border-border bg-card overflow-hidden cursor-pointer ${
                gridPositions[index % gridPositions.length]
              }`}
              whileHover={{ scale: 1.02 }}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${colors[index % colors.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative h-full p-6 flex flex-col justify-between z-10">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover indicator */}
                <motion.div
                  className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ rotate: 45 }}
                >
                  <ExternalLink size={20} className="text-primary" />
                </motion.div>
              </div>

              {/* Bottom glow on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
