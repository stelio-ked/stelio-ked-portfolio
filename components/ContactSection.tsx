"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useContent } from "@/lib/useContent";

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
  const { personalInfo, sectionTexts, ui } = useContent();
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      {/* Aurora background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full bg-accent-cyan/[0.04] blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full bg-accent-violet/[0.04] blur-[120px]" />
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
            <span className="w-8 h-px bg-accent-cyan" />
            {ui.sections.contact}
            <span className="w-8 h-px bg-accent-cyan" />
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-5">
            {sectionTexts.contact.title}{" "}
            <span className="gradient-text-hero">{sectionTexts.contact.highlight}</span>
          </h2>

          <p className="text-text-secondary text-lg max-w-lg mx-auto mb-12">
            {sectionTexts.contact.text}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent-cyan to-accent-blue text-white font-semibold text-base hover:shadow-xl hover:shadow-accent-cyan/20 transition-all duration-400 hover:scale-[1.03]"
            >
              <Mail size={18} />
              {ui.sendEmail}
              <Send
                size={14}
                className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              />
            </a>

            <a
              href={`https://wa.me/${personalInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-whatsapp/10 border border-whatsapp/30 text-whatsapp font-semibold text-base hover:bg-whatsapp/20 transition-all duration-400 hover:scale-[1.03]"
            >
              <WhatsAppIcon size={18} />
              WhatsApp
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-fg/[0.04] border border-fg/[0.08] text-text-primary font-semibold text-base hover:bg-fg/[0.08] hover:border-accent-violet/30 transition-all duration-400 hover:scale-[1.03]"
            >
              <LinkedInIcon size={18} className="text-accent-indigo-soft" />
              LinkedIn
            </a>
          </div>

          {/* Contact display */}
          <div className="mt-8 flex flex-col items-center gap-2">
            <p
              className="text-text-muted text-sm"
              style={{ fontFamily: "var(--font-geist-mono), monospace" }}
            >
              {personalInfo.email}
            </p>
            <p
              className="text-text-muted text-sm"
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
