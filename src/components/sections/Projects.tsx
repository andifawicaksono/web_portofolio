/**
 * Projects Section - Grid card modern untuk featured projects.
 * Setiap card memiliki hover animation, tech badges, dan link ke GitHub/demo.
 */

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star, ArrowUpRight, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { projects } from "@/data/portfolio";
import type { Project } from "@/types";

/** Label kategori project */
const categoryLabels: Record<Project["category"], string> = {
  "ai-ml": "AI / ML",
  web: "Web Dev",
  mobile: "Mobile",
  research: "Research",
  enterprise: "Enterprise",
};

/** Warna per kategori */
const categoryColors: Record<Project["category"], string> = {
  "ai-ml": "#EC4899",
  web: "#3B82F6",
  mobile: "#8B5CF6",
  research: "#F59E0B",
  enterprise: "#06B6D4",
};

/** Badge status project */
function StatusBadge({ status }: { status: Project["status"] }) {
  const config: Record<
    Project["status"],
    { label: string; color: string; bg: string }
  > = {
    completed: { label: "Completed", color: "#22C55E", bg: "#22C55E15" },
    "in-progress": { label: "In Progress", color: "#F59E0B", bg: "#F59E0B15" },
    archived: { label: "Archived", color: "#94A3B8", bg: "#94A3B815" },
  };
  const { label, color, bg } = config[status];
  return (
    <span
      className="text-xs px-2 py-0.5 rounded-full font-medium"
      style={{ color, backgroundColor: bg, border: `1px solid ${color}30` }}
    >
      {label}
    </span>
  );
}

/** Single project card */
function ProjectCard({ project }: { project: Project }) {
  const color = categoryColors[project.category];

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="glass-card h-full flex flex-col overflow-hidden group"
      style={{ border: "1px solid rgba(51,65,85,0.5)" }}
    >
      {/* Card top accent bar */}
      <div
        className="h-1 w-full"
        style={{
          background: `linear-gradient(90deg, ${color}, ${color}80)`,
        }}
      />

      {/* Card content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            {/* Category icon */}
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${color}20` }}
            >
              <Folder size={16} color={color} />
            </div>
            {/* Category badge */}
            <span
              className="text-xs font-medium px-2 py-0.5 rounded-full"
              style={{
                color,
                backgroundColor: `${color}15`,
                border: `1px solid ${color}30`,
              }}
            >
              {categoryLabels[project.category]}
            </span>
          </div>

          {/* Action links */}
          <div className="flex items-center gap-2">
            {project.featured && (
              <div title="Featured project">
                <Star size={14} className="text-yellow-400 fill-yellow-400" />
              </div>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-1.5 rounded-lg text-[#94A3B8] hover:text-[#F8FAFC] bg-[#0F172A] border border-[#334155]/50 hover:border-[#334155] transition-colors"
                aria-label={`View ${project.title} on GitHub`}
              >
                <FaGithub size={14} />
              </motion.a>
            )}
            {project.demoUrl && (
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-1.5 rounded-lg text-[#94A3B8] hover:text-[#F8FAFC] bg-[#0F172A] border border-[#334155]/50 hover:border-[#334155] transition-colors"
                aria-label={`View ${project.title} demo`}
              >
                <ExternalLink size={14} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-[#F8FAFC] text-base mb-2 group-hover:text-[#60A5FA] transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[#94A3B8] text-sm leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Footer: year, status, and tech */}
        <div className="space-y-3 pt-3 border-t border-[#334155]/50">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#94A3B8]">{project.year}</span>
            <StatusBadge status={project.status} />
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="tech-badge text-xs py-0.5">
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="tech-badge text-xs py-0.5 text-[#94A3B8] border-[#334155]/50">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/** Filter tabs untuk kategori */
const filterOptions: Array<{ key: string; label: string }> = [
  { key: "all", label: "All Projects" },
  { key: "ai-ml", label: "AI / ML" },
  { key: "enterprise", label: "Enterprise" },
  { key: "web", label: "Web Dev" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      className="section-padding relative bg-[#1E293B]/20"
      aria-label="Projects section"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 80%, rgba(59,130,246,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <AnimatedSection className="mb-12">
          <SectionHeader
            eyebrow="Portfolio"
            title="Featured"
            highlightedTitle="Projects"
            subtitle="A collection of projects reflecting my engineering and research capabilities."
            align="center"
          />
        </AnimatedSection>

        {/* Featured Projects Highlight */}
        {featuredProjects.length > 0 && (
          <AnimatedSection className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <h3 className="text-sm font-semibold text-[#94A3B8] uppercase tracking-wider">
                Featured Projects
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {featuredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  whileHover={{ y: -4 }}
                  className="glass-card p-6 flex flex-col gap-4 group relative overflow-hidden"
                  style={{ border: "1px solid rgba(59,130,246,0.2)" }}
                >
                  {/* Background glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at top left, rgba(59,130,246,0.08) 0%, transparent 70%)",
                    }}
                  />

                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Star size={14} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-xs font-medium text-yellow-400">
                          Featured
                        </span>
                      </div>
                      <h3 className="font-bold text-lg text-[#F8FAFC] group-hover:text-[#60A5FA] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg text-[#94A3B8] hover:text-[#F8FAFC] bg-[#0F172A] border border-[#334155]/50 transition-colors"
                          aria-label={`${project.title} GitHub`}
                        >
                          <FaGithub size={16} />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg text-[#94A3B8] hover:text-[#F8FAFC] bg-[#0F172A] border border-[#334155]/50 transition-colors"
                          aria-label={`${project.title} Demo`}
                        >
                          <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-[#94A3B8] text-sm leading-relaxed">
                    {project.longDescription || project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* Filter Tabs */}
        <AnimatedSection className="mb-8">
          <div
            className="flex flex-wrap gap-2 p-1 rounded-xl bg-[#1E293B] border border-[#334155]/50 w-fit mx-auto"
            role="tablist"
            aria-label="Project filters"
          >
            {filterOptions.map((option) => (
              <button
                key={option.key}
                onClick={() => setActiveFilter(option.key)}
                role="tab"
                aria-selected={activeFilter === option.key}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  activeFilter === option.key
                    ? "bg-[#3B82F6] text-white shadow-sm"
                    : "text-[#94A3B8] hover:text-[#F8FAFC]"
                }`}
              >
                {option.label}
                {option.key !== "all" && (
                  <span className="ml-1.5 text-xs opacity-70">
                    (
                    {projects.filter((p) => p.category === option.key).length}
                    )
                  </span>
                )}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <StaggerContainer
            key={activeFilter}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            staggerDelay={0.1}
          >
            {filteredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-[#94A3B8]"
          >
            No projects found in this category.
          </motion.div>
        )}
      </div>
    </section>
  );
}
