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
    accent: "text-[#06d6a0]",
    bg: "from-[#06d6a0]/15 to-[#06d6a0]/5",
    border: "group-hover:border-[#06d6a0]/30",
  },
  indigo: {
    accent: "text-[#6366f1]",
    bg: "from-[#6366f1]/15 to-[#6366f1]/5",
    border: "group-hover:border-[#6366f1]/30",
  },
  violet: {
    accent: "text-[#8b5cf6]",
    bg: "from-[#8b5cf6]/15 to-[#8b5cf6]/5",
    border: "group-hover:border-[#8b5cf6]/30",
  },
  emerald: {
    accent: "text-[#10b981]",
    bg: "from-[#10b981]/15 to-[#10b981]/5",
    border: "group-hover:border-[#10b981]/30",
  },
  blue: {
    accent: "text-[#3b82f6]",
    bg: "from-[#3b82f6]/15 to-[#3b82f6]/5",
    border: "group-hover:border-[#3b82f6]/30",
  },
  amber: {
    accent: "text-[#f59e0b]",
    bg: "from-[#f59e0b]/15 to-[#f59e0b]/5",
    border: "group-hover:border-[#f59e0b]/30",
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
            <span className="w-8 h-px bg-[#06d6a0]" />
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#eeeef5]">
            {sectionTexts.skills.title}
          </h2>
          <p className="text-[#7a7a9e] mt-3 text-lg">
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
                className={`glass-card p-6 group transition-all duration-400 cursor-default hover:bg-[#161630]/80 hover:border-white/10 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 ${colors.border}`}
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center`}
                  >
                    <Icon size={20} className={colors.accent} />
                  </div>
                  <h3 className="font-bold text-[#eeeef5] text-base">
                    {category.title}
                  </h3>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/[0.04] text-[#7a7a9e] border border-white/[0.06] hover:bg-white/[0.08] hover:text-[#eeeef5] hover:border-white/[0.12] transition-all duration-300 cursor-default"
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
