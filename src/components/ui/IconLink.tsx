import type { ComponentType } from "react";
import type { IconProps } from "@radix-ui/react-icons/dist/types";

interface IconLinkProps {
  href: string;
  label: string;
  icon: ComponentType<IconProps>;
  size?: string;
  color?: string;
}

const hoverClass =
  "transition-all duration-300 ease-out hover:text-[#cade46] hover:scale-110 hover:-translate-y-0.5 cursor-pointer";

export default function IconLink({
  href,
  label,
  icon: Icon,
  size = "w-12 h-12",
  color = "text-box-background/80",
}: IconLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <Icon className={`${size} ${color} ${hoverClass}`} />
    </a>
  );
}
