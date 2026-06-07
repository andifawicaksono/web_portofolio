/**
 * Achievements Section - Animated counter stats.
 * Angka hitung up saat pertama kali terlihat di viewport.
 */

"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, FolderOpen, FlaskConical, Code2 } from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { achievements } from "@/data/portfolio";
import type { Achievement } from "@/types";

/** Map icon string ke komponen Lucide */
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; color?: string }>> = {
  briefcase: Briefcase,
  folder: FolderOpen,
  flask: FlaskConical,
  code: Code2,
};

/** Warna berurutan untuk setiap achievement card */
const colors = ["#3B82F6", "#06B6D4", "#8B5CF6", "#F59E0B"];

/**
 * Hook untuk animasi count up.
 * Mulai dari 0, hitung ke `target` selama `duration` ms.
 */
function useCountUp(target: number, duration: number, isActive: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    setCount(0);

    const startTime = performance.now();

    const tick = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing: ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [target, duration, isActive]);

  return count;
}

/** Single achievement counter card */
function AchievementCard({
  achievement,
  index,
  isVisible,
}: {
  achievement: Achievement;
  index: number;
  isVisible: boolean;
}) {
  const Icon = iconMap[achievement.icon] || Code2;
  const color = colors[index % colors.length];
  const count = useCountUp(achievement.value, 2000, isVisible);

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="glass-card p-6 text-center flex flex-col items-center gap-3 group"
      style={{ border: `1px solid ${color}20` }}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${color}20`, border: `1px solid ${color}30` }}
      >
        <Icon size={26} color={color} />
      </div>

      {/* Counter */}
      <div className="flex items-end gap-0.5">
        <span
          className="text-4xl font-black tabular-nums"
          style={{ color }}
        >
          {count}
        </span>
        <span
          className="text-2xl font-bold mb-1"
          style={{ color }}
        >
          {achievement.suffix}
        </span>
      </div>

      {/* Label */}
      <div className="space-y-1">
        <h3 className="font-bold text-[#F8FAFC] text-base">{achievement.label}</h3>
        <p className="text-[#94A3B8] text-xs leading-relaxed">
          {achievement.description}
        </p>
      </div>

      {/* Decorative bottom line */}
      <div
        className="h-0.5 w-8 rounded-full opacity-50"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
}

export default function Achievements() {
  const ref = useRef<HTMLElement | null>(null);
  // isInView menjadi true saat section masuk viewport, hanya sekali
  const isInView = useInView(ref as React.RefObject<HTMLElement>, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="achievements"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding relative bg-[#0F172A]"
      aria-label="Achievements and statistics"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 50%, rgba(59,130,246,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Top divider gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #3B82F6, #06B6D4, transparent)",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <AnimatedSection className="mb-12 text-center">
          <p className="text-sm font-mono text-[#3B82F6] uppercase tracking-wider mb-3 flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-[#3B82F6]" />
            By The Numbers
            <span className="w-6 h-px bg-[#3B82F6]" />
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC]">
            Impact &{" "}
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-[#94A3B8] mt-3 max-w-xl mx-auto">
            Numbers that represent my professional journey so far.
          </p>
        </AnimatedSection>

        {/* Achievement Cards */}
        <StaggerContainer
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto"
          staggerDelay={0.15}
        >
          {achievements.map((achievement, index) => (
            <StaggerItem key={achievement.id}>
              <AchievementCard
                achievement={achievement}
                index={index}
                isVisible={isInView}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
