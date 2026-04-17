"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mail, ChevronDown } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/lib/data";

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
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#06d6a0]/[0.04] blur-[120px] animate-[float_20s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#3b82f6]/[0.05] blur-[120px] animate-[float_15s_ease-in-out_infinite_reverse]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#8b5cf6]/[0.03] blur-[120px] animate-[float_25s_ease-in-out_infinite]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-[#06d6a0] via-[#3b82f6] to-[#8b5cf6] rounded-full opacity-70 blur-sm group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-[#06060e]">
              <Image
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                fill
                className="object-cover object-[center_top]"
                priority
              />
            </div>
            {/* Active indicator */}
            <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-[#06d6a0] border-[3px] border-[#06060e] shadow-lg shadow-[#06d6a0]/30" />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-[#7a7a9e] text-sm font-medium tracking-widest uppercase mb-4"
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
          className="text-xl sm:text-2xl text-[#eeeef5]/80 font-medium mb-3"
        >
          {personalInfo.title}{" "}
          <span className="text-[#06d6a0]">@ {experiences0Company()}</span>
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-[#7a7a9e] text-lg mb-10 max-w-xl mx-auto"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/8 text-[#7a7a9e] text-sm hover:border-[#06d6a0]/30 hover:text-[#eeeef5] transition-all duration-300">
            <MapPin size={14} className="text-[#06d6a0]" />
            {personalInfo.location}
          </span>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/8 text-[#7a7a9e] text-sm hover:border-[#3b82f6]/30 hover:text-[#eeeef5] transition-all duration-300"
          >
            <Mail size={14} className="text-[#3b82f6]" />
            Email
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/8 text-[#7a7a9e] text-sm hover:border-[#8b5cf6]/30 hover:text-[#eeeef5] transition-all duration-300"
          >
            <LinkedInIcon size={14} className="text-[#8b5cf6]" />
            LinkedIn
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[#4a4a6a] text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
            Scroll
          </span>
          <ChevronDown size={18} className="text-[#4a4a6a] animate-scroll-hint" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Helper to get current company without circular deps
function experiences0Company() {
  return "Droove";
}
