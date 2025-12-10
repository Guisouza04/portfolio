import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { TechMarquee } from "./TechMarquee";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">{t.about.title}</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-16">
            {t.about.bio}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">{t.about.techStack}</h3>
          <TechMarquee />
        </motion.div>
      </div>
    </section>
  );
}
