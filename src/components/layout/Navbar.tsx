import type { AppSection } from "../../types/homePage.types";

interface NavbarProps {
  onNavigate: (key: AppSection) => void;
}

const navItems: { key: AppSection; label: string }[] = [
  { key: "about", label: "About" },
  { key: "projects", label: "Projects" },
  { key: "contact", label: "Contact" },
];

export default function Navbar({ onNavigate }: NavbarProps) {
  return (
    <header className="w-full sticky top-0 left-0 right-0 z-50 bg-olive-800 shadow-md shadow-black/20">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 h-16">
        <div className="font-mono text-sm sm:text-base whitespace-nowrap">
          <span className="text-[#cade46]">const</span>{" "}
          <span className="font-semibold text-box-background">
            connorHolmstrom
          </span>{" "}
          <span className="text-box-background/50">=</span>{" "}
          <span className="text-box-background/70">()</span>{" "}
          <span className="font-semibold text-[#cade46]">=&gt;</span>{" "}
          <span className="italic text-box-background/90">
            "Full Stack Engineer"
          </span>
        </div>

        <nav className="flex gap-6">
          {navItems.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => onNavigate(key)}
              className="cursor-pointer text-sm font-medium tracking-wide text-box-background/80 transition-colors duration-200 hover:text-[#cade46]"
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
