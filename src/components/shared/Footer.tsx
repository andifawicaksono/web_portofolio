/**
 * Footer component dengan social links, quick navigation, dan copyright.
 */

"use client";

import { motion } from "framer-motion";
import { Code2, Heart, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { profile, navItems } from "@/data/portfolio";

export default function Footer() {
  // Smooth scroll ke bagian paling atas halaman
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const socialLinks = [
    {
      icon: FaGithub,
      href: profile.contact.github,
      label: "GitHub",
      hoverColor: "hover:text-white",
    },
    {
      icon: FaLinkedin,
      href: profile.contact.linkedin,
      label: "LinkedIn",
      hoverColor: "hover:text-[#0A66C2]",
    },
    {
      icon: MdEmail,
      href: `mailto:${profile.contact.email}`,
      label: "Email",
      hoverColor: "hover:text-[#EA4335]",
    },
    {
      icon: FaWhatsapp,
      href: `https://wa.me/${profile.contact.whatsapp}`,
      label: "WhatsApp",
      hoverColor: "hover:text-[#25D366]",
    },
  ];

  // Pisahkan nav items menjadi dua kolom
  const midPoint = Math.ceil(navItems.length / 2);
  const navCol1 = navItems.slice(0, midPoint);
  const navCol2 = navItems.slice(midPoint);

  return (
    <footer
      className="relative border-t border-[#334155]/50 bg-[#0F172A]"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Top gradient line */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #3B82F6, #06B6D4, transparent)",
        }}
      />

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)",
                }}
              >
                <Code2 size={18} className="text-white" />
              </div>
              <span className="font-bold text-[#F8FAFC] text-lg">
                Andifa<span className="text-[#3B82F6]">.</span>
              </span>
            </div>

            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xs">
              Software Engineer &amp; AI Developer passionate about building
              meaningful technology solutions that create real impact.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3" aria-label="Social media links">
              {socialLinks.map(({ icon: Icon, href, label, hoverColor }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-lg text-[#94A3B8] transition-colors bg-[#1E293B] border border-[#334155]/50 ${hoverColor}`}
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[#F8FAFC] text-sm tracking-wider uppercase">
              Quick Navigation
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {[...navCol1, ...navCol2].map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-sm text-[#94A3B8] hover:text-[#60A5FA] transition-colors cursor-pointer py-1"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[#F8FAFC] text-sm tracking-wider uppercase">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <a
                href={`mailto:${profile.contact.email}`}
                className="flex items-center gap-2 text-sm text-[#94A3B8] hover:text-[#60A5FA] transition-colors"
                aria-label={`Email: ${profile.contact.email}`}
              >
                <MdEmail size={16} />
                <span>{profile.contact.email}</span>
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#94A3B8] hover:text-[#60A5FA] transition-colors"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin size={16} />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#94A3B8] hover:text-[#60A5FA] transition-colors"
                aria-label="GitHub profile"
              >
                <FaGithub size={16} />
                <span>GitHub Profile</span>
              </a>
            </div>

            {/* Available for work badge */}
            {profile.availableForWork && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#334155]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#94A3B8] text-sm flex items-center gap-1.5">
            © {new Date().getFullYear()} Andifa W. Made with{" "}
            <Heart size={14} className="text-red-400 fill-red-400" /> using
            Next.js & Tailwind CSS
          </p>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-[#94A3B8] hover:text-[#60A5FA] transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <div className="p-1 rounded-lg bg-[#1E293B] border border-[#334155]/50">
              <ArrowUp size={14} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
