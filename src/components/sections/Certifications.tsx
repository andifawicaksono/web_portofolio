/**
 * Certifications Section - Grid card sertifikasi profesional.
 * Menampilkan badge, issuer, dan tanggal sertifikasi.
 */

"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { certifications } from "@/data/portfolio";
import type { Certification } from "@/types";

/** Warna dan emoji per kategori sertifikasi */
const categoryConfig: Record<
  Certification["category"],
  { color: string; emoji: string; label: string }
> = {
  "ai-ml": { color: "#EC4899", emoji: "🤖", label: "AI / ML" },
  cloud: { color: "#06B6D4", emoji: "☁️", label: "Cloud" },
  programming: { color: "#3B82F6", emoji: "💻", label: "Programming" },
  data: { color: "#F59E0B", emoji: "📊", label: "Data Science" },
  software: { color: "#22C55E", emoji: "⚙️", label: "Software Dev" },
  other: { color: "#8B5CF6", emoji: "🎓", label: "Other" },
};

/** Single certification card */
function CertCard({ cert }: { cert: Certification }) {
  const config = categoryConfig[cert.category];

  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="glass-card-hover p-5 flex flex-col gap-4"
    >
      {/* Header */}
      <div className="flex items-start gap-3">
        {/* Badge icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
          style={{ backgroundColor: `${config.color}20`, border: `1px solid ${config.color}30` }}
        >
          {config.emoji}
        </div>

        <div className="flex-1 min-w-0">
          {/* Category label */}
          <span
            className="inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-1"
            style={{
              color: config.color,
              backgroundColor: `${config.color}15`,
              border: `1px solid ${config.color}25`,
            }}
          >
            {config.label}
          </span>

          {/* Cert name */}
          <h3 className="font-bold text-[#F8FAFC] text-sm leading-tight">
            {cert.name}
          </h3>
        </div>
      </div>

      {/* Issuer & date */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
          <Award size={14} color={config.color} />
          <span>{cert.issuer}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
          <Calendar size={12} className="text-[#94A3B8]" />
          <span>Issued {cert.issueDate}</span>
          {cert.expiryDate && <span>· Expires {cert.expiryDate}</span>}
        </div>
      </div>

      {/* Credential ID & link */}
      {(cert.credentialId || cert.credentialUrl) && (
        <div className="pt-2 border-t border-[#334155]/50">
          {cert.credentialId && (
            <p className="text-xs text-[#94A3B8] font-mono mb-1">
              ID: {cert.credentialId}
            </p>
          )}
          {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#3B82F6] hover:text-[#60A5FA] transition-colors"
              aria-label={`Verify ${cert.name} credential`}
            >
              <ExternalLink size={12} />
              Verify Credential
            </a>
          )}
        </div>
      )}

      {/* TODO placeholder note */}
      {!cert.credentialUrl && (
        <div className="pt-2 border-t border-[#334155]/50">
          <p className="text-xs text-[#94A3B8] italic">
            TODO: Add credential link
          </p>
        </div>
      )}
    </motion.article>
  );
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section-padding relative bg-[#1E293B]/20"
      aria-label="Certifications section"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 80% 20%, rgba(245,158,11,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <AnimatedSection className="mb-12 text-center">
          <SectionHeader
            eyebrow="Professional Growth"
            title="Licenses &"
            highlightedTitle="Certifications"
            subtitle="Professional certifications that validate my technical expertise."
            align="center"
          />
        </AnimatedSection>

        {/* Certifications Grid */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
          staggerDelay={0.08}
        >
          {certifications.map((cert) => (
            <StaggerItem key={cert.id}>
              <CertCard cert={cert} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Placeholder note */}
        <AnimatedSection className="mt-8 text-center">
          <p className="text-xs text-[#94A3B8] italic">
            * Update your actual certifications in{" "}
            <code className="text-[#60A5FA] bg-[#1E293B] px-1 rounded">
              src/data/portfolio.ts
            </code>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
