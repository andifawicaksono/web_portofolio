/**
 * Centralized TypeScript type definitions untuk seluruh aplikasi portfolio.
 * Setiap interface merepresentasikan struktur data yang digunakan di berbagai section.
 */

// ============================================
// EXPERIENCE TYPES
// ============================================

/** Satu item pengalaman kerja di timeline */
export interface Experience {
  id: string;
  company: string;
  position: string;
  /** Format: "Jan 2022 - Present" atau "Jan 2022 - Dec 2023" */
  duration: string;
  startDate: string;
  endDate: string | null; // null = masih bekerja (Present)
  location: string;
  type: "full-time" | "part-time" | "internship" | "freelance" | "contract";
  description: string[];
  technologies: string[];
  logoUrl?: string;
  current?: boolean;
}

// ============================================
// SKILLS TYPES
// ============================================

/** Satu skill dengan level proficiency */
export interface Skill {
  name: string;
  /** Level 0-100 untuk progress bar */
  level: number;
  icon?: string;
}

/** Kategori skill yang berisi beberapa skill */
export interface SkillCategory {
  id: string;
  name: string;
  /** Icon name dari react-icons atau lucide-react */
  icon: string;
  color: string;
  skills: Skill[];
}

// ============================================
// PROJECT TYPES
// ============================================

/** Satu project dengan detail lengkap */
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: "web" | "mobile" | "ai-ml" | "research" | "enterprise";
  featured: boolean;
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  status: "completed" | "in-progress" | "archived";
  year: string;
}

// ============================================
// RESEARCH TYPES
// ============================================

/** Paper/penelitian akademik */
export interface Research {
  id: string;
  title: string;
  abstract: string;
  objective: string;
  methodology: string;
  dataset: string;
  results: ResearchResult[];
  conclusion: string;
  keywords: string[];
  year: string;
  pdfUrl?: string;
  status: "published" | "submitted" | "in-progress" | "completed";
}

/** Hasil perbandingan algoritma dalam penelitian */
export interface ResearchResult {
  algorithm: string;
  accuracy: number;
  precision?: number;
  recall?: number;
  f1Score?: number;
}

// ============================================
// CERTIFICATION TYPES
// ============================================

/** Sertifikasi profesional */
export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  imageUrl?: string;
  category: "ai-ml" | "cloud" | "programming" | "data" | "software" | "other";
}

// ============================================
// ACHIEVEMENT TYPES
// ============================================

/** Statistik pencapaian untuk counter section */
export interface Achievement {
  id: string;
  value: number;
  /** Suffix yang ditampilkan setelah angka, misal: "+", "%" */
  suffix: string;
  label: string;
  description: string;
  icon: string;
}

// ============================================
// CONTACT TYPES
// ============================================

/** Data kontak dan social media */
export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  whatsapp?: string;
  website?: string;
  location: string;
}

/** Form data untuk contact form */
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/** Response dari server action contact form */
export interface ContactFormResponse {
  success: boolean;
  message: string;
}

// ============================================
// PROFILE TYPES
// ============================================

/** Data profil utama (digunakan di Hero dan About) */
export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  bio: string[];
  profileImageUrl: string;
  resumeUrl: string;
  yearsOfExperience: number;
  currentRole: string;
  currentCompany: string;
  availableForWork: boolean;
  contact: ContactInfo;
}

// ============================================
// NAVIGATION TYPES
// ============================================

/** Item navigasi */
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}
