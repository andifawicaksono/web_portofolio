/**
 * Skills Section - Menampilkan skill dalam kategori card dengan progress bar.
 * Menggunakan tab untuk navigasi antar kategori dan animasi saat scroll.
 */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Monitor,
  Database,
  Brain,
  Wrench,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { skillCategories } from "@/data/portfolio";
import type { SkillCategory, Skill } from "@/types";

/** Map icon string ke komponen Lucide */
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; color?: string }>> = {
  code: Code2,
  server: Server,
  monitor: Monitor,
  database: Database,
  brain: Brain,
  wrench: Wrench,
};

/** Progress bar animasi untuk satu skill */
function SkillBar({
  skill,
  isVisible,
  delay,
}: {
  skill: Skill;
  isVisible: boolean;
  delay: number;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-[#CBD5E1]">{skill.name}</span>
        <span className="text-[#94A3B8] font-mono text-xs">{skill.level}%</span>
      </div>
      {/* Track */}
      <div className="h-1.5 rounded-full bg-[#334155] overflow-hidden">
        {/* Fill bar - animasi width dari 0 ke target level */}
        <motion.div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #3B82F6, #06B6D4)",
          }}
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${skill.level}%` : 0 }}
          transition={{
            duration: 1.2,
            delay,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      </div>
    </div>
  );
}

/** Card untuk satu kategori skill */
function SkillCategoryCard({
  category,
  isActive,
  onClick,
}: {
  category: SkillCategory;
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = iconMap[category.icon] || Code2;

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer
        ${
          isActive
            ? "border-[#3B82F6]/50 bg-[#3B82F6]/10"
            : "border-[#334155]/50 bg-[#1E293B]/60 hover:border-[#334155]"
        }
      `}
      aria-pressed={isActive}
      aria-label={`Show ${category.name} skills`}
    >
      <div className="flex items-center gap-3">
        {/* Category icon */}
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${category.color}20` }}
        >
          <Icon size={18} color={category.color} />
        </div>
        {/* Category name and count */}
        <div className="min-w-0 flex-1">
          <p
            className={`font-semibold text-sm ${
              isActive ? "text-[#F8FAFC]" : "text-[#CBD5E1]"
            }`}
          >
            {category.name}
          </p>
          <p className="text-xs text-[#94A3B8]">
            {category.skills.length} skills
          </p>
        </div>
        {/* Active indicator dot */}
        {isActive && (
          <motion.div
            layoutId="active-dot"
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: category.color }}
          />
        )}
      </div>
    </motion.button>
  );
}

/** Panel detail skill yang dipilih */
function SkillDetailPanel({ category }: { category: SkillCategory }) {
  const Icon = iconMap[category.icon] || Code2;

  return (
    <motion.div
      key={category.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="glass-card p-6 space-y-6"
    >
      {/* Header kategori */}
      <div className="flex items-center gap-3 pb-4 border-b border-[#334155]/50">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${category.color}20` }}
        >
          <Icon size={20} color={category.color} />
        </div>
        <div>
          <h3 className="font-bold text-[#F8FAFC] text-lg">{category.name}</h3>
          <p className="text-xs text-[#94A3B8]">
            {category.skills.length} technologies
          </p>
        </div>
      </div>

      {/* Skill bars */}
      <div className="space-y-4">
        {category.skills.map((skill, index) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            isVisible={true}
            delay={index * 0.08}
          />
        ))}
      </div>

      {/* Skill tags di bawah */}
      <div className="pt-2 border-t border-[#334155]/50">
        <p className="text-xs text-[#94A3B8] mb-3 font-medium uppercase tracking-wider">
          All Technologies
        </p>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <span
              key={skill.name}
              className="tech-badge text-xs"
              style={{
                backgroundColor: `${category.color}15`,
                color: category.color,
                borderColor: `${category.color}30`,
              }}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/** Semua skill dalam grid card kecil - tampilan mobile/overview */
function AllSkillsGrid() {
  return (
    <StaggerContainer
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
      staggerDelay={0.04}
    >
      {skillCategories.flatMap((cat) =>
        cat.skills.map((skill) => {
          const Icon = iconMap[cat.icon] || Code2;
          return (
            <StaggerItem key={`${cat.id}-${skill.name}`}>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="glass-card-hover p-3 text-center cursor-default"
              >
                <div
                  className="w-8 h-8 rounded-lg mx-auto mb-2 flex items-center justify-center"
                  style={{ backgroundColor: `${cat.color}20` }}
                >
                  <Icon size={16} color={cat.color} />
                </div>
                <p className="text-xs font-medium text-[#CBD5E1] leading-tight">
                  {skill.name}
                </p>
                {/* Level indicator dots */}
                <div className="flex justify-center gap-0.5 mt-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-1 rounded-full"
                      style={{
                        backgroundColor:
                          i < Math.round(skill.level / 20)
                            ? cat.color
                            : "#334155",
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          );
        })
      )}
    </StaggerContainer>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>(
    skillCategories[0].id
  );
  const [viewMode, setViewMode] = useState<"detail" | "overview">("detail");

  const selectedCategory =
    skillCategories.find((c) => c.id === activeCategory) || skillCategories[0];

  return (
    <section
      id="skills"
      className="section-padding relative bg-[#1E293B]/30"
      aria-label="Skills section"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 10% 50%, rgba(59,130,246,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <AnimatedSection className="mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <SectionHeader
              eyebrow="Technical Skills"
              title="My Tech"
              highlightedTitle="Stack"
              subtitle="Tools and technologies I use to build scalable, intelligent products."
              align="left"
            />

            {/* View mode toggle */}
            <div className="flex items-center gap-2 p-1 rounded-xl bg-[#1E293B] border border-[#334155]/50">
              {(["detail", "overview"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all capitalize cursor-pointer ${
                    viewMode === mode
                      ? "bg-[#3B82F6] text-white"
                      : "text-[#94A3B8] hover:text-[#F8FAFC]"
                  }`}
                  aria-pressed={viewMode === mode}
                >
                  {mode === "detail" ? "Detail View" : "Overview"}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Content */}
        {viewMode === "detail" ? (
          /* Detail Mode: Category sidebar + skill panel */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Category Selector */}
            <AnimatedSection direction="left" className="space-y-2">
              <p className="text-xs text-[#94A3B8] uppercase tracking-wider font-medium mb-3">
                Categories
              </p>
              {skillCategories.map((category) => (
                <SkillCategoryCard
                  key={category.id}
                  category={category}
                  isActive={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                />
              ))}
            </AnimatedSection>

            {/* Skill Detail Panel */}
            <AnimatedSection
              direction="right"
              className="lg:col-span-2"
              delay={0.1}
            >
              <SkillDetailPanel category={selectedCategory} />
            </AnimatedSection>
          </div>
        ) : (
          /* Overview Mode: Grid semua skill */
          <AnimatedSection>
            <AllSkillsGrid />
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
