"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Rocket } from "lucide-react";
import { projects, sectionTexts } from "@/lib/data";

function GithubIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const colorMap: Record<
  string,
  {
    accent: string;
    bgGlow: string;
    border: string;
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
    pingBg: string;
    dotBg: string;
  }
> = {
  cyan: {
    accent: "text-[#06d6a0]",
    bgGlow: "from-[#06d6a0]/15 via-[#3b82f6]/10 to-transparent",
    border: "group-hover:border-[#06d6a0]/30",
    badgeBg: "bg-[#06d6a0]/10",
    badgeText: "text-[#06d6a0]",
    badgeBorder: "border-[#06d6a0]/20",
    pingBg: "bg-[#06d6a0]",
    dotBg: "bg-[#06d6a0]",
  },
  indigo: {
    accent: "text-[#6366f1]",
    bgGlow: "from-[#6366f1]/15 via-[#8b5cf6]/10 to-transparent",
    border: "group-hover:border-[#6366f1]/30",
    badgeBg: "bg-[#6366f1]/10",
    badgeText: "text-[#a5b4fc]",
    badgeBorder: "border-[#6366f1]/20",
    pingBg: "bg-[#6366f1]",
    dotBg: "bg-[#6366f1]",
  },
  violet: {
    accent: "text-[#8b5cf6]",
    bgGlow: "from-[#8b5cf6]/15 via-[#ec4899]/10 to-transparent",
    border: "group-hover:border-[#8b5cf6]/30",
    badgeBg: "bg-[#8b5cf6]/10",
    badgeText: "text-[#c4b5fd]",
    badgeBorder: "border-[#8b5cf6]/20",
    pingBg: "bg-[#8b5cf6]",
    dotBg: "bg-[#8b5cf6]",
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
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
      {/* Subtle background divider accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#06d6a0]/20 to-transparent" />

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
            {sectionTexts.projects.title}
          </h2>
          <p className="text-[#7a7a9e] mt-3 text-lg">
            {sectionTexts.projects.subtitle}
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8"
        >
          {projects.map((project) => {
            const colors = colorMap[project.color] || colorMap.cyan;

            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className={`glass-card p-6 sm:p-8 group relative overflow-hidden transition-all duration-400 hover:bg-[#161630]/80 hover:shadow-2xl hover:shadow-black/30 hover:-translate-y-1 ${colors.border}`}
              >
                {/* Ambient glow accent behind card */}
                <div
                  className={`absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br ${colors.bgGlow} blur-3xl pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity duration-500`}
                />

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    {/* Top Row: Icon/Category + Badge */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#a5b4fc]">
                        <Rocket size={16} className={colors.accent} />
                        <span style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                          {project.category}
                        </span>
                      </div>

                      {project.badge && (
                        <div
                          className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${colors.badgeBg} ${colors.badgeText} border ${colors.badgeBorder} backdrop-blur-sm`}
                        >
                          <span className="relative flex h-2 w-2">
                            <span
                              className={`animate-ping absolute inline-flex h-full w-full rounded-full ${colors.pingBg} opacity-75`}
                            />
                            <span
                              className={`relative inline-flex rounded-full h-2 w-2 ${colors.dotBg}`}
                            />
                          </span>
                          <span style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                            {project.badge}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Project Title & Tagline */}
                    <div className="mb-4">
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#eeeef5] group-hover:text-[#06d6a0] transition-colors duration-300">
                        {project.name}
                      </h3>
                      <p className="text-[#a5b4fc] text-base sm:text-lg font-medium mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-[#7a7a9e] text-sm sm:text-base leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/[0.04] text-[#a5b4fc] border border-white/[0.08] hover:bg-white/[0.08] hover:text-[#eeeef5] hover:border-[#6366f1]/30 transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.06]">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#06d6a0] to-[#3b82f6] text-white font-medium text-sm shadow-lg shadow-[#06d6a0]/20 hover:shadow-[#06d6a0]/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                      >
                        <ExternalLink size={16} />
                        Ver ao vivo
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#eeeef5] font-medium text-sm hover:bg-white/[0.08] hover:border-[#6366f1]/40 hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                      >
                        <GithubIcon size={16} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
