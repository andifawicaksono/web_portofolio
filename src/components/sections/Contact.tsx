"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection";
import { profile } from "@/data/portfolio";

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  color,
}: {
  icon: React.ComponentType<{ size?: number; className?: string; color?: string }>;
  label: string;
  value: string;
  href: string;
  color: string;
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-4 p-4 rounded-2xl bg-[#1E293B] border border-[#334155]/50 hover:border-[#334155] transition-colors group"
      aria-label={`${label}: ${value}`}
      style={{ borderLeft: `3px solid ${color}60` }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110"
        style={{ backgroundColor: `${color}20` }}
      >
        <Icon size={20} color={color} />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-[#94A3B8] font-medium uppercase tracking-wider mb-0.5">{label}</p>
        <p className="text-sm font-semibold text-[#F8FAFC] break-words">{value}</p>
      </div>
    </motion.a>
  );
}

export default function Contact() {
  const contactCards = [
    {
      icon: Mail,
      label: "Email",
      value: profile.contact.email,
      href: `mailto:${profile.contact.email}`,
      color: "#3B82F6",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "Andifa Wicaksono.",
      href: profile.contact.linkedin,
      color: "#0A66C2",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "@andifawicaksono",
      href: profile.contact.github,
      color: "#F8FAFC",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "Chat via WhatsApp",
      href: `https://wa.me/${profile.contact.whatsapp}`,
      color: "#25D366",
    },
    {
      icon: MapPin,
      label: "Location",
      value: profile.location,
      href: "#",
      color: "#F59E0B",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding relative bg-[#1E293B]/10"
      aria-label="Contact section"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 100%, rgba(59,130,246,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <AnimatedSection className="mb-16 text-center">
          <SectionHeader
            eyebrow="Get In Touch"
            title="Let&apos;s"
            highlightedTitle="Connect"
            subtitle="Interested in collaborating, discussing opportunities, or just want to say hello? I'd love to hear from you."
            align="center"
          />
        </AnimatedSection>

        {/* Contact Cards Grid */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto"
          staggerDelay={0.1}
        >
          {contactCards.map((card) => (
            <StaggerItem key={card.label}>
              <ContactCard {...card} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Availability note */}
        {profile.availableForWork && (
          <AnimatedSection className="mt-10 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex flex-col items-center gap-2 px-8 py-5 rounded-2xl bg-green-500/10 border border-green-500/20 text-center"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-semibold text-green-400">
                  Available for Work
                </span>
              </div>
              <p className="text-xs text-[#94A3B8] max-w-xs">
                I'm currently open to full-time positions, freelance, and
                consulting opportunities.
              </p>
            </motion.div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
