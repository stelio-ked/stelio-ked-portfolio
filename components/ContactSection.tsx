"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { personalInfo, sectionTexts } from "@/lib/data";

function LinkedInIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function WhatsAppIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      {/* Aurora background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full bg-[#06d6a0]/[0.04] blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full bg-[#8b5cf6]/[0.04] blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Section label */}
          <span className="section-label inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#06d6a0]" />
            Contato
            <span className="w-8 h-px bg-[#06d6a0]" />
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#eeeef5] mb-5">
            {sectionTexts.contact.title}{" "}
            <span className="gradient-text-hero">{sectionTexts.contact.highlight}</span>
          </h2>

          <p className="text-[#7a7a9e] text-lg max-w-lg mx-auto mb-12">
            {sectionTexts.contact.text}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#06d6a0] to-[#3b82f6] text-white font-semibold text-base hover:shadow-xl hover:shadow-[#06d6a0]/20 transition-all duration-400 hover:scale-[1.03]"
            >
              <Mail size={18} />
              Enviar Email
              <Send
                size={14}
                className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              />
            </a>

            <a
              href={`https://wa.me/${personalInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-semibold text-base hover:bg-[#25D366]/20 transition-all duration-400 hover:scale-[1.03]"
            >
              <WhatsAppIcon size={18} />
              WhatsApp
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-[#eeeef5] font-semibold text-base hover:bg-white/[0.08] hover:border-[#8b5cf6]/30 transition-all duration-400 hover:scale-[1.03]"
            >
              <LinkedInIcon size={18} className="text-[#a5b4fc]" />
              LinkedIn
            </a>
          </div>

          {/* Contact display */}
          <div className="mt-8 flex flex-col items-center gap-2">
            <p
              className="text-[#4a4a6a] text-sm"
              style={{ fontFamily: "var(--font-geist-mono), monospace" }}
            >
              {personalInfo.email}
            </p>
            <p
              className="text-[#4a4a6a] text-sm"
              style={{ fontFamily: "var(--font-geist-mono), monospace" }}
            >
              {personalInfo.whatsappDisplay}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
