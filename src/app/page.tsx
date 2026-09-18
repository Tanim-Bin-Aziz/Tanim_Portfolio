import About from "@/components/About";
import BottomNav from "@/components/BottomNav";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import GithubActivity from "@/components/GithubActivity";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import RevealScript from "@/components/RevealScript";
import Skills from "@/components/Skills";

export default function Page() {
  return (
    <div className="grid-bg">
      <main className="page-shell">
        <Header />
        <About />
        <Experience />
        <Projects />
        <GithubActivity />
        <Skills />
        <Contact />
      </main>

      <BottomNav />
      <RevealScript />
    </div>
  );
}
