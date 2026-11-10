"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { education, certifications, personalInfo } from "@/lib/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="relative py-24 sm:py-32">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/20 to-transparent" />

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
            Formação
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#eeeef5]">
            Educação & Certificações
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Education cards */}
          <div className="space-y-4">
            <motion.h3
              variants={itemVariants}
              className="flex items-center gap-2 text-[#eeeef5] font-semibold text-lg mb-6"
            >
              <GraduationCap size={20} className="text-[#06d6a0]" />
              Formação Acadêmica
            </motion.h3>

            {education.map((edu, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="glass-card glass-card-hover p-6 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366f1]/20 to-[#8b5cf6]/10 flex items-center justify-center shrink-0 group-hover:from-[#6366f1]/30 group-hover:to-[#8b5cf6]/20 transition-all duration-300">
                    <GraduationCap size={22} className="text-[#8b5cf6]" />
                  </div>
                  <div>
                    <h4 className="text-[#eeeef5] font-bold text-base group-hover:text-[#8b5cf6] transition-colors duration-300">
                      {edu.institution}
                    </h4>
                    <p className="text-[#a5b4fc] text-sm font-medium mt-0.5">
                      {edu.degree}
                    </p>
                    <p className="text-[#7a7a9e] text-sm mt-1">{edu.field}</p>
                    <p
                      className="text-[#4a4a6a] text-xs mt-2"
                      style={{ fontFamily: "var(--font-geist-mono), monospace" }}
                    >
                      {edu.period}
                    </p>
                    {edu.highlight && (
                      <span className="inline-block mt-3 px-3 py-1 text-xs font-medium rounded-full bg-[#8b5cf6]/10 text-[#c4b5fd] border border-[#8b5cf6]/15">
                        {edu.highlight}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              variants={itemVariants}
              className="flex items-center gap-2 text-[#eeeef5] font-semibold text-lg mb-6"
            >
              <Award size={20} className="text-[#06d6a0]" />
              Certificações
            </motion.h3>

            <motion.div
              variants={itemVariants}
              className="glass-card p-6 mb-4"
            >
              {/* Big number */}
              <div className="text-center mb-6">
                <div className="text-5xl font-extrabold gradient-text mb-2">
                  {certifications.total}
                </div>
                <p className="text-[#7a7a9e] text-sm">
                  certificações concluídas
                </p>
              </div>

              {/* Featured certs */}
              <div className="space-y-3">
                {certifications.featured.map((cert, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/[0.05] hover:border-[#06d6a0]/20 transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#06d6a0]/10 flex items-center justify-center">
                      <Award size={16} className="text-[#06d6a0]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#eeeef5] text-sm font-medium truncate">
                        {cert.name}
                      </p>
                      <p className="text-[#4a4a6a] text-xs">{cert.issuer} · {cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* LinkedIn CTA */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-6 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-[#7a7a9e] text-sm font-medium hover:text-[#eeeef5] hover:border-[#6366f1]/30 hover:bg-[#6366f1]/5 transition-all duration-300"
              >
                <ExternalLink size={14} />
                Ver todas no LinkedIn
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
