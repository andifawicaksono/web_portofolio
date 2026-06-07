/**
 * Research Section - Menampilkan detail penelitian akademik.
 * Termasuk accuracy comparison chart dan download button.
 */

"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Target,
  FlaskConical,
  BarChart3,
  CheckCircle2,
  Download,
  FileText,
  Tag,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { research } from "@/data/portfolio";
import type { ResearchResult } from "@/types";

/** Comparison bar untuk satu algoritma */
function AlgorithmBar({
  result,
  isWinner,
  delay,
}: {
  result: ResearchResult;
  isWinner: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={`p-4 rounded-xl border ${
        isWinner
          ? "border-[#3B82F6]/40 bg-[#3B82F6]/10"
          : "border-[#334155]/50 bg-[#1E293B]/60"
      }`}
    >
      {/* Algorithm name & winner badge */}
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-bold text-[#F8FAFC]">{result.algorithm}</h4>
        {isWinner && (
          <span className="flex items-center gap-1.5 text-xs font-medium text-[#3B82F6] bg-[#3B82F6]/10 px-2.5 py-1 rounded-full border border-[#3B82F6]/30">
            <CheckCircle2 size={12} />
            Best Model
          </span>
        )}
      </div>

      {/* Metrics */}
      <div className="space-y-3">
        {[
          { label: "Accuracy", value: result.accuracy, color: "#3B82F6" },
          { label: "Precision", value: result.precision, color: "#06B6D4" },
          { label: "Recall", value: result.recall, color: "#8B5CF6" },
          { label: "F1 Score", value: result.f1Score, color: "#F59E0B" },
        ].map(({ label, value, color }) => (
          <div key={label} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-[#94A3B8]">{label}</span>
              <span className="font-mono font-bold" style={{ color }}>
                {value ? `${value}%` : "N/A"}
              </span>
            </div>
            {value && (
              <div className="h-1.5 rounded-full bg-[#334155] overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: delay + 0.2, ease: [0.4, 0, 0.2, 1] }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/** Card section konten penelitian */
function ResearchContentCard({
  icon: Icon,
  title,
  content,
  color,
}: {
  icon: React.ComponentType<{ size?: number; className?: string; color?: string }>;
  title: string;
  content: string;
  color: string;
}) {
  return (
    <div className="glass-card p-5 space-y-3">
      <div className="flex items-center gap-2">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon size={16} color={color} />
        </div>
        <h4 className="font-semibold text-[#F8FAFC] text-sm">{title}</h4>
      </div>
      <p className="text-[#94A3B8] text-sm leading-relaxed">{content}</p>
    </div>
  );
}

export default function Research() {
  if (research.length === 0) return null;

  const paper = research[0];
  const sortedResults = [...paper.results].sort((a, b) => b.accuracy - a.accuracy);
  const winnerAlgorithm = sortedResults[0].algorithm;

  return (
    <section
      id="research"
      className="section-padding relative bg-[#0F172A]"
      aria-label="Research section"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 20% 60%, rgba(236,72,153,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <AnimatedSection className="mb-16 text-center">
          <SectionHeader
            eyebrow="Academic Research"
            title="Research &"
            highlightedTitle="Publications"
            subtitle="Research contributing to the advancement of knowledge in AI and Machine Learning."
            align="center"
          />
        </AnimatedSection>

        {/* Research Paper Card */}
        <div className="max-w-5xl mx-auto">
          {/* Paper Header */}
          <AnimatedSection>
            <div
              className="glass-card p-6 md:p-8 mb-6"
              style={{ border: "1px solid rgba(236,72,153,0.2)" }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  {/* Paper icon */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-pink-500/10 border border-pink-500/20">
                    <FileText size={24} className="text-pink-400" />
                  </div>
                  <div className="space-y-2">
                    {/* Status and year */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                        {paper.status === "completed" ? "Completed" : paper.status}
                      </span>
                      <span className="text-xs text-[#94A3B8]">{paper.year}</span>
                    </div>
                    {/* Title */}
                    <h3 className="font-bold text-xl text-[#F8FAFC] leading-snug">
                      {paper.title}
                    </h3>
                  </div>
                </div>

                {/* Download PDF button */}
                {paper.pdfUrl && (
                  <motion.a
                    href={paper.pdfUrl}
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-outline flex-shrink-0 self-start"
                    aria-label="Download research paper PDF"
                  >
                    <Download size={16} />
                    Download PDF
                  </motion.a>
                )}
              </div>

              {/* Abstract */}
              <div className="mt-5 pt-5 border-t border-[#334155]/50">
                <p className="text-sm font-semibold text-[#94A3B8] uppercase tracking-wider mb-2">
                  Abstract
                </p>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  {paper.abstract}
                </p>
              </div>

              {/* Keywords */}
              <div className="mt-4 flex flex-wrap gap-2">
                {paper.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20"
                  >
                    <Tag size={10} />
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Research Content Grid */}
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
            staggerDelay={0.1}
          >
            <StaggerItem>
              <ResearchContentCard
                icon={Target}
                title="Research Objective"
                content={paper.objective}
                color="#3B82F6"
              />
            </StaggerItem>
            <StaggerItem>
              <ResearchContentCard
                icon={FlaskConical}
                title="Methodology"
                content={paper.methodology}
                color="#06B6D4"
              />
            </StaggerItem>
            <StaggerItem>
              <ResearchContentCard
                icon={BookOpen}
                title="Dataset"
                content={paper.dataset}
                color="#8B5CF6"
              />
            </StaggerItem>
            <StaggerItem>
              <ResearchContentCard
                icon={CheckCircle2}
                title="Conclusion"
                content={paper.conclusion}
                color="#22C55E"
              />
            </StaggerItem>
          </StaggerContainer>

          {/* Algorithm Comparison */}
          <AnimatedSection>
            <div className="glass-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#3B82F6]/20">
                  <BarChart3 size={18} className="text-[#3B82F6]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#F8FAFC]">
                    Algorithm Performance Comparison
                  </h4>
                  <p className="text-xs text-[#94A3B8]">
                    Accuracy metrics for all evaluated algorithms
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sortedResults.map((result, index) => (
                  <AlgorithmBar
                    key={result.algorithm}
                    result={result}
                    isWinner={result.algorithm === winnerAlgorithm}
                    delay={index * 0.2}
                  />
                ))}
              </div>

              {/* Winner summary */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-6 p-4 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20"
              >
                <p className="text-sm text-[#94A3B8]">
                  <span className="font-semibold text-[#60A5FA]">
                    {winnerAlgorithm}
                  </span>{" "}
                  achieved the highest accuracy of{" "}
                  <span className="font-bold text-[#F8FAFC]">
                    {sortedResults[0].accuracy}%
                  </span>
                  , outperforming{" "}
                  {sortedResults
                    .slice(1)
                    .map((r) => r.algorithm)
                    .join(", ")}{" "}
                  in all evaluation metrics.
                </p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
