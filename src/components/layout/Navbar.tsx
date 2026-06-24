import type { AppSection } from "../../types/homePage.types";

interface NavbarProps {
  onNavigate: (key: AppSection) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  return (
    <div className="flex justify-center h-16">
      <span>
        <div>Connor Holmstrom =&gt; Full Stack Engineer || </div>
      </span>
      <nav className="flex ml-2 gap-2">
        <button onClick={() => onNavigate("about")}>About</button>
        <button onClick={() => onNavigate("projects")}>Projects</button>
        <button onClick={() => onNavigate("contact")}>Contact</button>
      </nav>
    </div>
  );
}
