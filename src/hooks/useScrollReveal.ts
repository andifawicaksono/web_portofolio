/**
 * Custom hook untuk mendeteksi apakah elemen sudah masuk ke viewport.
 * Digunakan untuk trigger animasi scroll reveal tanpa Framer Motion di komponen sederhana.
 */

"use client";

import { useEffect, useRef, useState } from "react";

interface UseScrollRevealOptions {
  /** Threshold 0-1: seberapa banyak elemen harus terlihat sebelum trigger (default: 0.1) */
  threshold?: number;
  /** Apakah animasi hanya sekali atau setiap kali masuk viewport */
  triggerOnce?: boolean;
  /** Root margin untuk memperluas area trigger */
  rootMargin?: string;
}

interface UseScrollRevealReturn {
  ref: React.RefObject<HTMLElement | null>;
  isVisible: boolean;
  hasAnimated: boolean;
}

/**
 * Hook yang mengembalikan ref dan status visibilitas elemen.
 *
 * @example
 * const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
 * return <div ref={ref} className={isVisible ? 'opacity-100' : 'opacity-0'}>...</div>
 */
export function useScrollReveal({
  threshold = 0.1,
  triggerOnce = true,
  rootMargin = "-50px",
}: UseScrollRevealOptions = {}): UseScrollRevealReturn {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
          // Jika triggerOnce, hentikan observasi setelah animasi
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, triggerOnce, rootMargin]);

  return { ref, isVisible, hasAnimated };
}

/**
 * Hook untuk counter animasi - menghitung dari 0 ke target value
 */
export function useCountUp(
  target: number,
  duration: number = 2000,
  isActive: boolean = false
): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function: ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      setCount(current);

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(updateCount);
  }, [target, duration, isActive]);

  return count;
}
