"use client";

import { Mail, Heart } from "lucide-react";
import { personalInfo } from "@/lib/data";

function LinkedInIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left */}
          <div className="flex items-center gap-2 text-[#4a4a6a] text-sm">
            <span>© {currentYear} {personalInfo.name}</span>
            <span className="text-[#4a4a6a]/50">·</span>
            <span className="inline-flex items-center gap-1">
              Feito com <Heart size={12} className="text-[#06d6a0] fill-[#06d6a0]" />
            </span>
          </div>

          {/* Right — Social links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[#4a4a6a] hover:text-[#a5b4fc] hover:bg-white/5 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg text-[#4a4a6a] hover:text-[#06d6a0] hover:bg-white/5 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
