import type { ReactNode } from "react";

interface TooltipProps {
  label: string;
  children: ReactNode;
}

const tooltipClass =
  "pointer-events-none absolute top-1/2 left-full ml-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-[#cade46] px-2 py-1 text-xs font-medium text-olive-800 shadow-md";
const tooltipHoverClass =
  "opacity-0 transition-opacity duration-200 group-hover:opacity-100";

export default function Tooltip({ label, children }: TooltipProps) {
  return (
    <span className="group relative">
      {children}
      <span className={`${tooltipClass} ${tooltipHoverClass}`}>{label}</span>
    </span>
  );
}
