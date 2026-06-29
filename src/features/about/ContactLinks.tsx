import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { GITHUBPROFILE, LINKEDINPROFILE } from "../../constants/contact";

const iconSize = "w-12 h-12";
const hoverClass =
  "transition-all duration-300 ease-out hover:text-[#cade46] hover:scale-110 hover:-translate-y-0.5 cursor-pointer";

const iconClass = `${iconSize} ${hoverClass}`;

export default function ContactLinks() {
  return (
    <div className="flex gap-4 mt-4">
      <span>
        <a href={GITHUBPROFILE}>
          <GitHubLogoIcon className={iconClass} />
        </a>
      </span>
      <span>
        <a href={LINKEDINPROFILE}>
          <LinkedInLogoIcon className={iconClass} />
        </a>
      </span>
    </div>
  );
}
