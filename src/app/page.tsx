import Contact from "@/components/Contact";
import ExperienceTimeline from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/NavBar";
import ParticleNetwork from "@/components/ParticleNetwork";
import Preloader from "@/components/Preloader";
import ProcessSection from "@/components/ProcessSection";
import Projects from "@/components/Project";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tanim Bin Aziz | Software Engineer",
  description:
    "I am Tanim Bin Aziz, a Software Engineer with experience in Full Stack Development.",
  keywords: ["Tanim Bin Aziz", "Software Engineer", "তানিম বিন আজিজ"],
  openGraph: {
    title: "Tanim Bin Aziz | Software Engineer",
    description:
      "I am Tanim Bin Aziz, a Software Engineer with experience in Full Stack Development.",
    url: "https://tanim-bin-aziz.vercel.app",
    type: "website",
  },
};

const HomePage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tanim Bin Aziz",
    jobTitle: "Software Engineer",
    url: "https://tanim-bin-aziz.vercel.app",
    // image: "https://yourwebsite.com/photo.jpg",
    description:
      "Tanim Bin Aziz, a Software Engineer with experience in Full Stack Development.",

    sameAs: [
      "https://github.com/Tanim-Bin-Aziz",
      "https://linkedin.com/in/tanim-bin-aziz",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
    ],
  };

  return (
    <main className="min-h-screen bg-[#071717] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Preloader />
      <ParticleNetwork />
      <Navbar />
      <Hero />
      <Projects />
      <ExperienceTimeline />
      <ProcessSection />
      <Contact />
      <Footer />
    </main>
  );
};

export default HomePage;
