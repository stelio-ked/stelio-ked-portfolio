"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Brain, TrendingDown, Compass } from "lucide-react";
import { useContent } from "@/lib/useContent";

const iconMap: Record<string, React.ElementType> = {
  target: Target,
  brain: Brain,
  "trending-down": TrendingDown,
  compass: Compass,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
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

export default function AboutSection() {
  const { aboutText, sectionTexts } = useContent();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="mb-12">
            <span className="section-label flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-accent-cyan" />
              {aboutText.headline}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary max-w-2xl">
              {sectionTexts.about.title}{" "}
              <span className="gradient-text">{sectionTexts.about.highlight}</span>
            </h2>
          </motion.div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-5 gap-12 mb-16">
            {/* Text and Tags */}
            <motion.div variants={itemVariants} className="lg:col-span-3 space-y-6">
              <div className="space-y-4">
                {aboutText.paragraphs.map((p, i) => (
                  <p key={i} className="text-text-secondary text-lg leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
              <div className="pt-2 flex flex-wrap gap-2">
                {aboutText.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-semibold rounded-full hover:bg-accent-cyan/20 transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="lg:col-span-2 grid grid-cols-3 lg:grid-cols-1 gap-4">
              {aboutText.stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card glass-card-hover p-5 text-center lg:text-left"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-text-secondary text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Highlights grid */}
          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {aboutText.highlights.map((highlight, i) => {
              const Icon = iconMap[highlight.icon] || Target;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="glass-card glass-card-hover p-6 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-blue/10 flex items-center justify-center mb-4 group-hover:from-accent-cyan/30 group-hover:to-accent-blue/20 transition-all duration-300">
                    <Icon size={20} className="text-accent-cyan" />
                  </div>
                  <h3 className="text-text-primary font-semibold mb-2 text-sm">
                    {highlight.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {highlight.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
