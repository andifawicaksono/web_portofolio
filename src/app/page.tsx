/**
 * Halaman utama portfolio.
 * Merakit semua section secara berurutan dari atas ke bawah.
 * Menggunakan dynamic import untuk code splitting dan performa yang lebih baik.
 */

import dynamic from "next/dynamic";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/sections/Hero";

// Dynamic import untuk section yang tidak perlu dimuat di atas the fold.
// Ini meningkatkan First Contentful Paint (FCP) karena Hero langsung dimuat,
// sementara section lain dimuat secara lazy saat user scroll ke bawah.
const About = dynamic(() => import("@/components/sections/About"), {
  ssr: true,
});
const Skills = dynamic(() => import("@/components/sections/Skills"), {
  ssr: true,
});
const Experience = dynamic(() => import("@/components/sections/Experience"), {
  ssr: true,
});
const Projects = dynamic(() => import("@/components/sections/Projects"), {
  ssr: true,
});
const Research = dynamic(() => import("@/components/sections/Research"), {
  ssr: true,
});
const Certifications = dynamic(
  () => import("@/components/sections/Certifications"),
  { ssr: true }
);
const Achievements = dynamic(
  () => import("@/components/sections/Achievements"),
  { ssr: true }
);
const Contact = dynamic(() => import("@/components/sections/Contact"), {
  ssr: true,
});

export default function HomePage() {
  return (
    <>
      {/* Navigasi fixed di atas dengan glassmorphism */}
      <Navbar />

      {/* Main content: semua section portfolio */}
      <main id="main-content" tabIndex={-1}>
        {/* 1. Hero - Landing section dengan animated background */}
        <Hero />

        {/* 2. About - Ringkasan profesional 2-column layout */}
        <About />

        {/* 3. Skills - Tech stack dalam kategori card */}
        <Skills />

        {/* 4. Experience - Vertical timeline pengalaman kerja */}
        <Experience />

        {/* 5. Projects - Featured & semua project cards */}
        <Projects />

        {/* 6. Research - Detail penelitian akademik */}
        <Research />

        {/* 7. Certifications - Badge sertifikasi profesional */}
        {/* <Certifications /> */}

        {/* 8. Achievements - Animated counter stats */}
        <Achievements />

        {/* 9. Contact - Form kontak dan social links */}
        <Contact />
      </main>

      {/* Footer dengan copyright dan quick nav */}
      <Footer />
    </>
  );
}
