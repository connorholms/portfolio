import { useRef } from "react";
import Navbar from "../components/layout/Navbar";
import About from "../features/about/About";
import type { AppSection } from "../types/homePage.types";
import Projects from "../features/projects/Projects";

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
    <div className="flex flex-col h-screen shrink-0">
      <Navbar onNavigate={handleScroll}></Navbar>
      <main className="flex-1 overflow-y-auto">
        <hr />
        <About onRef={(el) => (sectionRefs.current["about"] = el)} />
        <hr />
        <Projects onRef={(el) => (sectionRefs.current["projects"] = el)} />
      </main>
    </div>
  );
}
