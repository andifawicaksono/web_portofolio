/**
 * Utility functions yang digunakan di seluruh aplikasi.
 * Berisi helper untuk class merging, formatting, dan animasi.
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Menggabungkan class Tailwind secara cerdas.
 * Menggunakan clsx untuk conditional classes dan tailwind-merge untuk menghindari konflik.
 *
 * @example
 * cn("px-4 py-2", isActive && "bg-blue-500", "text-white")
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Memformat angka sebagai persentase untuk progress bar
 */
export function formatPercent(value: number): string {
  return `${Math.min(100, Math.max(0, value))}%`;
}

/**
 * Mendelay eksekusi async secara promisified
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Truncate string dengan ellipsis jika melebihi maxLength
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 3) + "...";
}

/**
 * Validasi format email menggunakan regex
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Konfigurasi animasi standar Framer Motion untuk section reveal.
 * Digunakan secara konsisten di seluruh komponen.
 */
export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 },
};

export const slideInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
};

export const slideInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
};

/**
 * Stagger container variant untuk menganimasikan daftar item secara berurutan.
 * @param staggerDelay - Delay antar setiap child item (default: 0.1s)
 */
export const staggerContainer = (staggerDelay = 0.1) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren: staggerDelay,
    },
  },
});

/**
 * Scale pada hover untuk card interaktif
 */
export const hoverScale = {
  whileHover: { scale: 1.03, transition: { duration: 0.2 } },
  whileTap: { scale: 0.98 },
};

/**
 * Viewport config standar untuk scroll-triggered animations.
 * once: true = animasi hanya diputar sekali saat pertama kali terlihat
 */
export const defaultViewport = {
  once: true,
  margin: "-80px",
};
