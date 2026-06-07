/**
 * Experience Section - Vertical timeline layout pengalaman kerja.
 * Setiap item muncul dengan animasi scroll reveal yang berurutan.
 */

"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, ExternalLink } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { experiences } from "@/data/portfolio";
import type { Experience } from "@/types";

/** Badge untuk jenis pekerjaan */
function JobTypeBadge({ type }: { type: Experience["type"] }) {
  const config: Record<
    Experience["type"],
    { label: string; color: string; bg: string }
  > = {
    "full-time": { label: "Full Time", color: "#22C55E", bg: "#22C55E15" },
    "part-time": { label: "Part Time", color: "#F59E0B", bg: "#F59E0B15" },
    internship: { label: "Internship", color: "#8B5CF6", bg: "#8B5CF615" },
    freelance: { label: "Freelance", color: "#06B6D4", bg: "#06B6D415" },
    contract: { label: "Contract", color: "#3B82F6", bg: "#3B82F615" },
  };

  const { label, color, bg } = config[type];

  return (
    <span
      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium"
      style={{ color, backgroundColor: bg, border: `1px solid ${color}30` }}
    >
      {label}
    </span>
  );
}

/** Single timeline item */
function ExperienceItem({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
      className="relative pl-10 pb-12 last:pb-0"
    >
      {/* Timeline vertical line */}
      {index < experiences.length - 1 && (
        <div
          className="absolute left-3 top-5 w-0.5 bottom-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(59,130,246,0.4), transparent)",
          }}
        />
      )}

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
        className="absolute left-0 top-1.5 flex items-center justify-center"
      >
        {/* Outer ring */}
        <div className="w-6 h-6 rounded-full bg-[#0F172A] border-2 border-[#3B82F6] flex items-center justify-center">
          {/* Inner dot */}
          <div
            className="w-2 h-2 rounded-full"
            style={{
              background: experience.current
                ? "#22C55E"
                : "linear-gradient(135deg, #3B82F6, #06B6D4)",
            }}
          />
        </div>
      </motion.div>

      {/* Content card */}
      <div className="glass-card-hover p-5 md:p-6 ml-2">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div className="space-y-1">
            {/* Position title */}
            <h3 className="font-bold text-lg text-[#F8FAFC] leading-tight">
              {experience.position}
            </h3>
            {/* Company name */}
            <div className="flex items-center gap-2">
              <Briefcase size={14} className="text-[#3B82F6]" />
              <span className="font-semibold text-[#3B82F6]">
                {experience.company}
              </span>
            </div>
          </div>

          {/* Date and type badges */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <JobTypeBadge type={experience.type} />
            {experience.current && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Current
              </span>
            )}
          </div>
        </div>

        {/* Meta info: duration & location */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-[#94A3B8] mb-4">
          <div className="flex items-center gap-1.5">
            <Calendar size={13} className="text-[#3B82F6]" />
            <span>{experience.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={13} className="text-[#06B6D4]" />
            <span>{experience.location}</span>
          </div>
        </div>

        {/* Responsibilities list */}
        <ul className="space-y-2 mb-5">
          {experience.description.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + i * 0.05 + 0.3 }}
              className="flex items-start gap-2.5 text-sm text-[#94A3B8]"
            >
              <span
                className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
                }}
              />
              {item}
            </motion.li>
          ))}
        </ul>

        {/* Technologies used */}
        <div className="pt-4 border-t border-[#334155]/50">
          <p className="text-xs text-[#94A3B8] uppercase tracking-wider font-medium mb-2">
            Technologies
          </p>
          <div className="flex flex-wrap gap-1.5">
            {experience.technologies.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding relative bg-[#0F172A]"
      aria-label="Work experience section"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 60% at 90% 30%, rgba(139,92,246,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <AnimatedSection className="mb-16 text-center">
          <SectionHeader
            eyebrow="Work History"
            title="Professional"
            highlightedTitle="Experience"
            subtitle="My career journey building impactful technology solutions."
            align="center"
          />
        </AnimatedSection>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {/* Timeline header line */}
          <div className="flex items-center gap-4 mb-8 pl-10">
            <ExternalLink size={16} className="text-[#94A3B8]" />
            <p className="text-sm text-[#94A3B8]">
              {experiences.length} positions ·{" "}
              {
                experiences.filter((e) => e.current).length > 0
                  ? "Currently employed"
                  : "Looking for new opportunities"
              }
            </p>
          </div>

          {/* Experience items */}
          <div>
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>

          {/* End of timeline indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3 pl-10 pt-4"
          >
            <div
              className="w-4 h-4 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>
            <span className="text-xs text-[#94A3B8]">
              Started professional journey
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
