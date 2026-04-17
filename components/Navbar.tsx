"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll spy
      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && (section as HTMLElement).offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#06060e]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#06d6a0] to-[#6366f1] flex items-center justify-center text-white font-bold text-sm transition-transform duration-300 group-hover:scale-110">
            SK
          </div>
          <span className="hidden sm:block text-sm font-medium text-[#eeeef5]/70 group-hover:text-[#eeeef5] transition-colors">
            {personalInfo.name}
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeSection === link.href
                  ? "text-[#06d6a0]"
                  : "text-[#7a7a9e] hover:text-[#eeeef5]"
              }`}
            >
              {link.label}
              {activeSection === link.href && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-[#06d6a0]/10 rounded-lg border border-[#06d6a0]/20"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* CTA Desktop */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-[#06d6a0] to-[#3b82f6] text-white hover:shadow-lg hover:shadow-[#06d6a0]/20 transition-all duration-300 hover:scale-105"
        >
          Contato
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#7a7a9e] hover:text-[#eeeef5] transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0c0c18]/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeSection === link.href
                      ? "text-[#06d6a0] bg-[#06d6a0]/10"
                      : "text-[#7a7a9e] hover:text-[#eeeef5] hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-4 py-3 text-sm font-medium rounded-full bg-gradient-to-r from-[#06d6a0] to-[#3b82f6] text-white text-center"
              >
                Contato
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
