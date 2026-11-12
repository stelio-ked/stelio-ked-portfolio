"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mail, ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useContent } from "@/lib/useContent";

function LinkedInIcon({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function HeroSection() {
  const { personalInfo, experiences, ui } = useContent();
  const currentCompany = (experiences.find((e) => e.isActive) ?? experiences[0]).company;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Aurora background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent-cyan/[0.04] blur-[120px] animate-[float_20s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-blue/[0.05] blur-[120px] animate-[float_15s_ease-in-out_infinite_reverse]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-violet/[0.03] blur-[120px] animate-[float_25s_ease-in-out_infinite]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-28 pb-16 lg:pt-24 grid lg:grid-cols-[1.15fr_0.85fr] items-center gap-10 lg:gap-8"
      >
        {/* Texto */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-text-secondary text-sm font-medium tracking-widest uppercase mb-4"
            style={{ fontFamily: "var(--font-geist-mono), monospace" }}
          >
            {personalInfo.greeting}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
          >
            <span className="gradient-text-hero">{personalInfo.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-xl sm:text-2xl text-text-primary/80 font-medium mb-3"
          >
            {personalInfo.title}{" "}
            <span className="text-accent-cyan">@ {currentCompany}</span>
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-text-secondary text-lg mb-8 max-w-xl mx-auto lg:mx-0"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Ações */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#06d6a0] to-[#3b82f6] text-white text-sm font-semibold shadow-lg shadow-[#06d6a0]/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              {ui.talkToMe}
              <ArrowRight size={16} />
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-fg/[0.04] border border-fg/10 text-text-primary text-sm font-semibold hover:border-accent-indigo/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              {ui.viewExperience}
            </a>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fg/5 border border-fg/8 text-text-secondary text-sm hover:border-accent-cyan/30 hover:text-text-primary transition-all duration-300">
              <MapPin size={14} className="text-accent-cyan" />
              {personalInfo.location}
            </span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fg/5 border border-fg/8 text-text-secondary text-sm hover:border-accent-blue/30 hover:text-text-primary transition-all duration-300"
            >
              <Mail size={14} className="text-accent-blue" />
              Email
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fg/5 border border-fg/8 text-text-secondary text-sm hover:border-accent-violet/30 hover:text-text-primary transition-all duration-300"
            >
              <LinkedInIcon size={14} className="text-accent-violet" />
              LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative group w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[400px]">
            {/* Brilho em gradiente atrás do cartão */}
            <div className="absolute -inset-3 bg-gradient-to-br from-accent-cyan via-accent-blue to-accent-violet rounded-[2rem] opacity-40 blur-2xl group-hover:opacity-60 transition-opacity duration-500" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card border border-fg/10">
              <Image
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                fill
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 340px, 280px"
                className="object-cover object-top"
                priority
              />
              {/* Esmaece a base para a foto se fundir ao cartão */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-bg-card/70 to-transparent pointer-events-none" />
            </div>
            {/* Active indicator */}
            <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-accent-cyan border-[3px] border-bg-primary shadow-lg shadow-accent-cyan/30" />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2"
      >
        <span className="text-text-muted text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
          {ui.scroll}
        </span>
        <ChevronDown size={18} className="text-text-muted animate-scroll-hint" />
      </motion.div>
    </section>
  );
}
