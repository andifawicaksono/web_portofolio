/**
 * Hero Section - Section pertama yang dilihat pengunjung.
 * Menampilkan nama, title, lokasi, intro singkat, dan CTA buttons.
 * Dilengkapi dengan animated background particles dan floating elements.
 */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Download, Mail, ChevronDown, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/portfolio";

/** Komponen partikel floating di background */
function FloatingParticle({
  x,
  y,
  size,
  delay,
  color,
}: {
  x: number;
  y: number;
  size: number;
  delay: number;
  color: string;
}) {
  return (
    <motion.div
      className="absolute rounded-full opacity-20 pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        backgroundColor: color,
        filter: `blur(${size / 3}px)`,
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.1, 0.3, 0.1],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 5 + Math.random() * 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

/** Partikel kecil bergerak di background */
const particles = [
  { x: 10, y: 20, size: 80, delay: 0, color: "#3B82F6" },
  { x: 80, y: 10, size: 60, delay: 1, color: "#06B6D4" },
  { x: 50, y: 70, size: 100, delay: 2, color: "#8B5CF6" },
  { x: 25, y: 80, size: 50, delay: 0.5, color: "#3B82F6" },
  { x: 90, y: 60, size: 70, delay: 1.5, color: "#06B6D4" },
  { x: 65, y: 40, size: 40, delay: 3, color: "#8B5CF6" },
];

/** Dot kecil yang beranimasi */
function AnimatedDot({
  x,
  y,
  delay,
}: {
  x: number;
  y: number;
  delay: number;
}) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-[#3B82F6] pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%` }}
      animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
      transition={{ duration: 3, delay, repeat: Infinity }}
    />
  );
}

const dots = Array.from({ length: 20 }, (_, i) => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: i * 0.3,
}));

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F172A]"
      aria-label="Hero section"
    >
      {/* ── Animated Background Layer ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />

        {/* Floating color blobs */}
        {particles.map((p, i) => (
          <FloatingParticle key={i} {...p} />
        ))}

        {/* Animated dots */}
        {dots.map((d, i) => (
          <AnimatedDot key={i} {...d} />
        ))}

        {/* Center radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── Main Content ── */}
      <div className="container-custom relative z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            {/* Available badge */}
            {profile.availableForWork && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-[#1E293B] border border-[#334155]/70"
              >
                <Sparkles size={14} className="text-[#3B82F6]" />
                <span className="text-[#94A3B8]">
                  Available for opportunities
                </span>
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              </motion.div>
            )}

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#F8FAFC] leading-tight tracking-tight">
                Hi, I&apos;m{" "}
                <span className="gradient-text">{profile.name}</span>
              </h1>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-1"
            >
              <p className="text-xl md:text-2xl font-semibold text-[#CBD5E1]">
                {profile.title}
              </p>
              <p className="text-base md:text-lg text-[#94A3B8] font-medium">
                {profile.tagline}
              </p>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-2 justify-center lg:justify-start text-[#94A3B8]"
            >
              <MapPin size={16} className="text-[#3B82F6]" />
              <span className="text-sm">{profile.location}</span>
            </motion.div>

            {/* Short bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-[#94A3B8] text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              {profile.bio[0]}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center gap-3 justify-center lg:justify-start"
            >
              {/* Download CV */}
              <motion.a
                href={profile.resumeUrl}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary animate-glow-pulse"
                aria-label="Download CV"
              >
                <Download size={16} />
                Download CV
              </motion.a>

              {/* Contact */}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
                aria-label="Contact me"
              >
                <Mail size={16} />
                Contact Me
              </motion.a>

              {/* View Projects */}
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("projects");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline"
                aria-label="View projects"
              >
                View Projects
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
              aria-label="Social links"
            >
              <span className="text-xs text-[#94A3B8] uppercase tracking-wider">
                Find me on
              </span>
              <div className="flex gap-2">
                {[
                  {
                    Icon: FaGithub,
                    href: profile.contact.github,
                    label: "GitHub",
                  },
                  {
                    Icon: FaLinkedin,
                    href: profile.contact.linkedin,
                    label: "LinkedIn",
                  },
                ].map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2.5 rounded-xl bg-[#1E293B] border border-[#334155]/50 text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#3B82F6]/50 transition-colors"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="relative flex-shrink-0"
          >
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-30 scale-110"
              style={{
                background:
                  "linear-gradient(135deg, #3B82F6 0%, #06B6D4 50%, #8B5CF6 100%)",
              }}
            />

            {/* Rotating border ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-4px] rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #3B82F6, #06B6D4, #8B5CF6, transparent, #3B82F6)",
              }}
            />

            {/* Profile image container */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#1E293B]">
              <Image
                src={profile.profileImageUrl}
                alt={`${profile.name} - ${profile.title}`}
                fill
                priority
                className="object-cover"
                // Placeholder sementara karena gambar belum ada
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.style.background =
                      "linear-gradient(135deg, #1E293B 0%, #263348 100%)";
                    parent.innerHTML = `
                      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:8px;padding:20px;text-align:center;">
                        <span style="font-size:64px;">👨‍💻</span>
                        <span style="color:#94A3B8;font-size:12px;font-family:Inter,sans-serif;">Upload profile photo to<br/>public/images/profile.jpg</span>
                      </div>
                    `;
                  }
                }}
              />
            </div>

            {/* Stats floating cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -left-8 top-1/4 glass-card px-3 py-2 hidden lg:block"
            >
              <div className="text-center">
                <div className="text-xl font-bold text-[#3B82F6]">
                  {profile.yearsOfExperience}+
                </div>
                <div className="text-[10px] text-[#94A3B8] font-medium">
                  Years Exp.
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -right-8 bottom-1/4 glass-card px-3 py-2 hidden lg:block"
            >
              <div className="text-center">
                <div className="text-xl font-bold text-[#06B6D4]">AI</div>
                <div className="text-[10px] text-[#94A3B8] font-medium">
                  Enthusiast
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={scrollToAbout}
          aria-label="Scroll to about section"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && scrollToAbout()}
        >
          <span className="text-[#94A3B8] text-xs tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={20} className="text-[#3B82F6]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
