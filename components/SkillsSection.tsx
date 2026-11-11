"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BarChart3,
  Zap,
  Brain,
  Users,
  Cloud,
  LayoutGrid,
  Server,
} from "lucide-react";
import { skillCategories, sectionTexts } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  "bar-chart-3": BarChart3,
  zap: Zap,
  brain: Brain,
  users: Users,
  cloud: Cloud,
  "layout-grid": LayoutGrid,
  server: Server,
};

const colorMap: Record<string, { accent: string; bg: string; border: string }> = {
  cyan: {
    accent: "text-accent-cyan",
    bg: "from-accent-cyan/15 to-accent-cyan/5",
    border: "group-hover:border-accent-cyan/30",
  },
  indigo: {
    accent: "text-accent-indigo",
    bg: "from-accent-indigo/15 to-accent-indigo/5",
    border: "group-hover:border-accent-indigo/30",
  },
  violet: {
    accent: "text-accent-violet",
    bg: "from-accent-violet/15 to-accent-violet/5",
    border: "group-hover:border-accent-violet/30",
  },
  emerald: {
    accent: "text-accent-emerald",
    bg: "from-accent-emerald/15 to-accent-emerald/5",
    border: "group-hover:border-accent-emerald/30",
  },
  blue: {
    accent: "text-accent-blue",
    bg: "from-accent-blue/15 to-accent-blue/5",
    border: "group-hover:border-accent-blue/30",
  },
  amber: {
    accent: "text-accent-amber",
    bg: "from-accent-amber/15 to-accent-amber/5",
    border: "group-hover:border-accent-amber/30",
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="section-label flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-accent-cyan" />
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            {sectionTexts.skills.title}
          </h2>
          <p className="text-text-secondary mt-3 text-lg">
            {sectionTexts.skills.subtitle}
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skillCategories.map((category, i) => {
            const Icon = iconMap[category.icon] || BarChart3;
            const colors = colorMap[category.color] || colorMap.cyan;

            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className={`glass-card p-6 group transition-all duration-400 cursor-default hover:bg-bg-card-hover/80 hover:border-fg/10 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 ${colors.border}`}
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center`}
                  >
                    <Icon size={20} className={colors.accent} />
                  </div>
                  <h3 className="font-bold text-text-primary text-base">
                    {category.title}
                  </h3>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-fg/[0.04] text-text-secondary border border-fg/[0.06] hover:bg-fg/[0.08] hover:text-text-primary hover:border-fg/[0.12] transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
