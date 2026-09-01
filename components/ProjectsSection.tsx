"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { projects } from "@/lib/data";

const colorMap: Record<string, { accent: string; bg: string; border: string; badge: string; glow: string }> = {
  cyan: {
    accent: "text-[#06d6a0]",
    bg: "from-[#06d6a0]/15 to-[#06d6a0]/5",
    border: "group-hover:border-[#06d6a0]/30",
    badge: "bg-[#06d6a0]/15 text-[#06d6a0] border-[#06d6a0]/30",
    glow: "group-hover:shadow-[#06d6a0]/10",
  },
  indigo: {
    accent: "text-[#6366f1]",
    bg: "from-[#6366f1]/15 to-[#6366f1]/5",
    border: "group-hover:border-[#6366f1]/30",
    badge: "bg-[#6366f1]/15 text-[#6366f1] border-[#6366f1]/30",
    glow: "group-hover:shadow-[#6366f1]/10",
  },
  violet: {
    accent: "text-[#8b5cf6]",
    bg: "from-[#8b5cf6]/15 to-[#8b5cf6]/5",
    border: "group-hover:border-[#8b5cf6]/30",
    badge: "bg-[#8b5cf6]/15 text-[#8b5cf6] border-[#8b5cf6]/30",
    glow: "group-hover:shadow-[#8b5cf6]/10",
  },
  emerald: {
    accent: "text-[#10b981]",
    bg: "from-[#10b981]/15 to-[#10b981]/5",
    border: "group-hover:border-[#10b981]/30",
    badge: "bg-[#10b981]/15 text-[#10b981] border-[#10b981]/30",
    glow: "group-hover:shadow-[#10b981]/10",
  },
  blue: {
    accent: "text-[#3b82f6]",
    bg: "from-[#3b82f6]/15 to-[#3b82f6]/5",
    border: "group-hover:border-[#3b82f6]/30",
    badge: "bg-[#3b82f6]/15 text-[#3b82f6] border-[#3b82f6]/30",
    glow: "group-hover:shadow-[#3b82f6]/10",
  },
  amber: {
    accent: "text-[#f59e0b]",
    bg: "from-[#f59e0b]/15 to-[#f59e0b]/5",
    border: "group-hover:border-[#f59e0b]/30",
    badge: "bg-[#f59e0b]/15 text-[#f59e0b] border-[#f59e0b]/30",
    glow: "group-hover:shadow-[#f59e0b]/10",
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="relative py-24 sm:py-32">
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
            Projetos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#eeeef5]">
            Produtos que Construí
          </h2>
          <p className="text-[#7a7a9e] mt-3 text-lg">
            Do conceito ao deploy — projetos reais, em produção
          </p>
        </motion.div>

        {/* Project cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {projects.map((project) => {
            const colors = colorMap[project.color] || colorMap.cyan;

            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className={`glass-card p-7 group flex flex-col gap-5 transition-all duration-400 hover:bg-[#161630]/80 hover:border-white/10 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 ${colors.border} ${colors.glow}`}
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {/* Icon accent */}
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center shrink-0`}
                    >
                      <Sparkles size={20} className={colors.accent} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#eeeef5] leading-tight">
                        {project.name}
                      </h3>
                      <p className={`text-sm font-medium ${colors.accent}`}>
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Badge */}
                  {project.badge && (
                    <span
                      className={`shrink-0 px-3 py-1 text-xs font-semibold rounded-full border ${colors.badge} flex items-center gap-1.5`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-[#7a7a9e] text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white/[0.04] text-[#7a7a9e] border border-white/[0.06] hover:bg-white/[0.08] hover:text-[#eeeef5] transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-3 pt-1">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r ${colors.bg} ${colors.accent} border border-current/20 hover:brightness-110 transition-all duration-300`}
                    >
                      <ExternalLink size={14} />
                      Ver ao vivo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-white/[0.04] text-[#7a7a9e] border border-white/[0.08] hover:bg-white/[0.08] hover:text-[#eeeef5] transition-all duration-300"
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
