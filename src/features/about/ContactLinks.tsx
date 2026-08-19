import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  ResumeIcon,
} from "@radix-ui/react-icons";
import { GITHUBPROFILE, LINKEDINPROFILE, RESUME } from "../../constants/contact";

const iconSize = "w-12 h-12";
const iconColor = "text-box-background/80";
const hoverClass =
  "transition-all duration-300 ease-out hover:text-[#cade46] hover:scale-110 hover:-translate-y-0.5 cursor-pointer";

const iconClass = `${iconSize} ${hoverClass} ${iconColor}`;

export default function ContactLinks() {
  return (
    <div className="flex gap-4 mt-4">
      <span>
        <a href={GITHUBPROFILE} target="_blank" rel="noopener noreferrer">
          <GitHubLogoIcon className={iconClass} />
        </a>
      </span>
      <span>
        <a href={LINKEDINPROFILE} target="_blank" rel="noopener noreferrer">
          <LinkedInLogoIcon className={iconClass} />
        </a>
      </span>
      <span>
        <a
          href={RESUME}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
        >
          <ResumeIcon className={iconClass} />
        </a>
      </span>
    </div>
  );
}
