"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin } from "lucide-react";
import { experiences } from "@/lib/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#06d6a0]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/20 to-transparent" />
      </div>

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
            Experiência
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#eeeef5]">
            Trajetória Profissional
          </h2>
          <p className="text-[#7a7a9e] mt-3 text-lg">
            +10 anos construindo pontes entre dados e decisões
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-[1.15rem] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#06d6a0]/40 via-[#3b82f6]/30 to-[#8b5cf6]/10" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              variants={cardVariants}
              className={`relative flex flex-col md:flex-row items-start gap-6 mb-12 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[0.65rem] md:left-1/2 md:-translate-x-1/2 top-6 z-10">
                <div
                  className={`w-4 h-4 rounded-full border-[3px] border-[#06060e] ${exp.isActive
                      ? "bg-[#06d6a0] shadow-lg shadow-[#06d6a0]/40"
                      : "bg-[#3b82f6]/60"
                    }`}
                />
              </div>

              {/* Spacer for left side */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div
                className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-10" : "md:pl-10"
                  }`}
              >
                <div className="glass-card glass-card-hover p-6 group">
                  {/* Active badge */}
                  {exp.isActive && (
                    <div className="flex items-center gap-2 mb-3">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06d6a0] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06d6a0]" />
                      </span>
                      <span className="text-[#06d6a0] text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                        Posição atual
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <h3 className="text-lg font-bold text-[#eeeef5] group-hover:text-[#06d6a0] transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 mb-4">
                    <span className="flex items-center gap-1.5 text-[#a5b4fc] text-sm font-medium">
                      <Briefcase size={13} />
                      {exp.company}
                    </span>
                    <span className="text-[#4a4a6a] text-xs" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                      {exp.period}
                    </span>
                    {exp.location && (
                      <span className="flex items-center gap-1 text-[#4a4a6a] text-xs">
                        <MapPin size={11} />
                        {exp.location}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-[#7a7a9e] text-sm leading-relaxed"
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#06d6a0] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
