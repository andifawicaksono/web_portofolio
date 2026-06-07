/**
 * Wrapper komponen untuk animasi scroll reveal menggunakan Framer Motion.
 * Setiap section utama dibungkus dengan komponen ini agar muncul dengan animasi
 * saat pertama kali terlihat di viewport.
 *
 * Catatan: Framer Motion v12 memiliki tipe Variant yang lebih ketat.
 * Kita menggunakan `x` dan `y` secara eksplisit (bukan computed property key)
 * untuk menghindari TypeScript error.
 */

"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  distance?: number;
  duration?: number;
}

/** Menghitung nilai awal animasi berdasarkan arah */
function getInitialValues(direction: Direction, distance: number) {
  switch (direction) {
    case "up":    return { x: 0, y: distance };
    case "down":  return { x: 0, y: -distance };
    case "left":  return { x: distance, y: 0 };
    case "right": return { x: -distance, y: 0 };
    case "none":  return { x: 0, y: 0 };
  }
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 40,
  duration = 0.6,
}: AnimatedSectionProps) {
  const { x, y } = getInitialValues(direction, distance);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Komponen untuk stagger animasi - children muncul satu per satu secara berurutan.
 * Ideal untuk daftar card atau list items.
 */
export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  delayStart = 0,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayStart?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delayStart,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Child item untuk digunakan di dalam StaggerContainer.
 * Akan dianimasikan secara berurutan dengan delay stagger dari parent.
 */
export function StaggerItem({
  children,
  className = "",
  direction = "up",
  distance = 30,
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  distance?: number;
}) {
  const { x, y } = getInitialValues(direction, distance);

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, x, y },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
