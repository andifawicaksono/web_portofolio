/**
 * Reusable section header dengan title, subtitle, dan animated divider.
 * Digunakan di semua section untuk konsistensi tampilan.
 */

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  /** Label kecil di atas title (misal: "01. About") */
  eyebrow?: string;
  title: string;
  /** Bagian title yang ingin diberi gradient color */
  highlightedTitle?: string;
  subtitle?: string;
  className?: string;
  /** Posisi teks: left, center, right */
  align?: "left" | "center" | "right";
}

export default function SectionHeader({
  eyebrow,
  title,
  highlightedTitle,
  subtitle,
  className = "",
  align = "center",
}: SectionHeaderProps) {
  const alignClass = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }[align];

  return (
    <div className={cn("flex flex-col gap-4", alignClass, className)}>
      {/* Eyebrow text - label kategori section */}
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 text-sm font-mono text-primary font-medium tracking-wider uppercase"
        >
          <span className="inline-block w-6 h-px bg-primary" />
          {eyebrow}
          <span className="inline-block w-6 h-px bg-primary" />
        </motion.span>
      )}

      {/* Main title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F8FAFC] leading-tight"
      >
        {title}{" "}
        {highlightedTitle && (
          <span className="gradient-text">{highlightedTitle}</span>
        )}
      </motion.h2>

      {/* Animated divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "h-1 w-16 rounded-full origin-left",
          "bg-gradient-to-r from-primary to-secondary",
          align === "center" && "self-center origin-center",
          align === "right" && "self-end origin-right"
        )}
      />

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className={cn(
            "text-[#94A3B8] text-base md:text-lg leading-relaxed",
            align === "center" && "max-w-2xl"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
