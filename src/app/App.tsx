import { useRef } from "react";
import Navbar from "../components/layout/Navbar";
import About from "../features/about/About";
import type { AppSection } from "../types/homePage.types";
import Projects from "../features/projects/Projects";
import Contact from "../features/contact/Contact";
import Skills from "../features/skills/Skills";

export default function App() {
  const sectionRefs = useRef<Record<AppSection, HTMLElement | null>>({
    home: null,
    about: null,
    projects: null,
    contact: null,
  });

  const handleScroll = (key: AppSection) => {
    const element = sectionRefs.current[key];
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className="flex flex-col min-h-screen w-full items-center no-scrollbar">
      <Navbar onNavigate={handleScroll}></Navbar>
      <main className="w-full">
        <About onRef={(el) => (sectionRefs.current["about"] = el)} />
        <Skills />
        <Projects onRef={(el) => (sectionRefs.current["projects"] = el)} />
        <Contact onRef={(el) => (sectionRefs.current["about"] = el)} />
      </main>
    </div>
  );
}
