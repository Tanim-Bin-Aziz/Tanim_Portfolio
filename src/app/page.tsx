import Contact from "@/components/Contact";
import ExperienceTimeline from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/NavBar";
import ProcessSection from "@/components/ProcessSection";
import Projects from "@/components/Project";
const HomePage = () => {
  return (
    <main className="min-h-screen bg-[#071717] text-white">
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
