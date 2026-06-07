/**
 * Navbar component dengan efek glassmorphism yang muncul saat scroll.
 * Mendukung smooth scroll ke setiap section dan mobile hamburger menu.
 */

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/data/portfolio";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Deteksi scroll untuk mengubah tampilan navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section berdasarkan posisi scroll
      const sections = navItems.map((item) => item.href.replace("#", ""));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tutup mobile menu saat resize ke desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "backdrop-blur-md bg-[#0F172A]/90 border-b border-[#334155]/50 shadow-lg"
            : "bg-transparent"
        )}
        role="banner"
        aria-label="Site navigation"
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo / Brand */}
            <motion.button
              onClick={() => handleNavClick("#hero")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 group cursor-pointer"
              aria-label="Go to top"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)",
                }}
              >
                <Code2 size={18} className="text-white" />
              </div>
              <span className="font-bold text-[#F8FAFC] text-lg tracking-tight">
                Andifa<span className="text-[#3B82F6]">.</span>
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            <ul
              className="hidden md:flex items-center gap-1"
              role="list"
              aria-label="Main navigation"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <li key={item.href}>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={cn(
                        "relative px-4 py-2 text-sm font-medium rounded-lg",
                        "transition-colors duration-200 cursor-pointer",
                        isActive
                          ? "text-[#60A5FA]"
                          : "text-[#94A3B8] hover:text-[#F8FAFC]"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                      {/* Active indicator underline */}
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
                          style={{
                            background:
                              "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)",
                          }}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* CTA Button - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href="/resume/Andifa_W_CV.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-xs py-2 px-4"
                aria-label="Download CV"
              >
                Download CV
              </motion.a>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1E293B] transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 backdrop-blur-xl bg-[#0F172A]/95 border-b border-[#334155]/50"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <nav className="container-custom py-4">
              <ul className="flex flex-col gap-1" role="list">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.replace("#", "");
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className={cn(
                          "w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors",
                          isActive
                            ? "text-[#60A5FA] bg-[#3B82F6]/10"
                            : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1E293B]"
                        )}
                      >
                        {item.label}
                      </button>
                    </motion.li>
                  );
                })}
              </ul>
              <div className="mt-4 pt-4 border-t border-[#334155]/50">
                <a
                  href="/resume/Andifa_W_CV.pdf"
                  download
                  className="btn-primary w-full justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Download CV
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
