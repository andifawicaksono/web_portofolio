/**
 * About Section - Ringkasan profesional dengan 2-column layout.
 * Menampilkan foto profil, bio, current role, dan quick stats.
 */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Briefcase, GraduationCap, Code2 } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { profile } from "@/data/portfolio";

/** Card info cepat (lokasi, role, dll) */
function InfoCard({
  icon: Icon,
  label,
  value,
  color,
}: {
  icon: React.ComponentType<{ size?: number; className?: string; color?: string }>;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-[#1E293B] border border-[#334155]/50">
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: `${color}20` }}
      >
        <Icon size={18} color={color} />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-medium text-[#94A3B8] uppercase tracking-wider">
          {label}
        </p>
        <p className="text-sm font-semibold text-[#F8FAFC] truncate">{value}</p>
      </div>
    </div>
  );
}

export default function About() {
  const infoCards = [
    {
      icon: MapPin,
      label: "Location",
      value: profile.location,
      color: "#3B82F6",
    },
    {
      icon: Briefcase,
      label: "Current Role",
      value: profile.currentRole,
      color: "#06B6D4",
    },
    {
      icon: Code2,
      label: "Specialization",
      value: "Software Engineering & AI",
      color: "#8B5CF6",
    },
    {
      icon: GraduationCap,
      label: "Experience",
      value: `${profile.yearsOfExperience}+ Years Professional`,
      color: "#F59E0B",
    },
  ];

  // Bidang keahlian utama yang ditampilkan sebagai tags
  const focusAreas = [
    "Backend Development",
    "ASP.NET Core",
    "Spring Boot",
    "REST API Design",
    "Machine Learning",
    "Data Analysis",
    "Research & Innovation",
    "Clean Architecture",
  ];

  return (
    <section id="about" className="section-padding relative bg-[#0F172A]">
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(6,182,212,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <SectionHeader
            eyebrow="About Me"
            title="Passionate About"
            highlightedTitle="Technology & Innovation"
            subtitle="A software engineer focused on backend development and machine learning — always learning and building solutions that create real impact."
            align="center"
          />
        </div>

        {/* Main Content: 2 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Profile Image */}
          <AnimatedSection direction="left" className="flex justify-center">
            <div className="relative">
              {/* Background decorative shape */}
              <div
                className="absolute inset-0 rounded-3xl rotate-3 scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(6,182,212,0.15) 100%)",
                  border: "1px solid rgba(59,130,246,0.2)",
                }}
              />

              {/* Image container */}
              <div className="relative w-72 md:w-80 h-80 md:h-96 rounded-3xl overflow-hidden border-2 border-[#334155]/50">
                <Image
                  src={profile.profileImageUrl}
                  alt={`${profile.name} profile picture`}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.style.background =
                        "linear-gradient(135deg, #1E293B 0%, #263348 100%)";
                      parent.innerHTML = `
                        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:12px;padding:24px;text-align:center;">
                          <span style="font-size:80px;">👨‍💻</span>
                          <span style="color:#94A3B8;font-size:13px;font-family:Inter,sans-serif;line-height:1.5;">Upload your profile photo to<br/><code style="color:#60A5FA;font-size:11px;">public/images/profile.jpg</code></span>
                        </div>
                      `;
                    }
                  }}
                />
              </div>

              {/* Floating tech stack badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 glass-card p-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <div className="text-[10px] text-[#94A3B8]">Currently</div>
                    <div className="text-xs font-bold text-[#F8FAFC]">
                      Building cool stuff
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Experience badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4,
                  delay: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -left-4 glass-card p-3 shadow-lg"
              >
                <div className="text-center">
                  <div
                    className="text-2xl font-black gradient-text"
                  >
                    {profile.yearsOfExperience}+
                  </div>
                  <div className="text-[10px] text-[#94A3B8] whitespace-nowrap">
                    Years Experience
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Right: Content */}
          <AnimatedSection direction="right" className="space-y-6">
            {/* Bio paragraphs */}
            <div className="space-y-4">
              {profile.bio.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-[#94A3B8] leading-relaxed text-base"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Focus Areas Tags */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-[#F8FAFC] uppercase tracking-wider">
                Focus Areas
              </p>
              <StaggerContainer
                className="flex flex-wrap gap-2"
                staggerDelay={0.05}
              >
                {focusAreas.map((area) => (
                  <StaggerItem key={area}>
                    <span className="tech-badge">{area}</span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {infoCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <InfoCard {...card} />
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-3 pt-2"
            >
              <a
                href={profile.resumeUrl}
                download
                className="btn-primary"
                aria-label="Download CV"
              >
                Download CV
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                aria-label="View LinkedIn profile"
              >
                LinkedIn Profile
              </a>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
