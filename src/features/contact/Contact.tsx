import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  ReaderIcon,
} from "@radix-ui/react-icons";
import IconLink from "../../components/ui/IconLink";
import Tooltip from "../../components/ui/Tooltip";
import { GITHUBPROFILE, LINKEDINPROFILE, RESUME } from "../../constants/contact";

interface ContactProps {
  onRef: (element: HTMLElement | null) => void;
}

const iconSize = "w-14 h-14";
const iconColor = "text-box-background";

export default function Contact({ onRef }: ContactProps) {
  return (
    <footer
      ref={onRef}
      className="w-full bg-olive-800 py-16 flex flex-col items-center gap-6"
    >
      <h2 className="text-3xl font-bold text-box-background">Let's Connect</h2>
      <p className="text-box-background/80">
        Feel free to reach out - I am always open to chatting about new
        opportunities, fun problems to solve or interests outside of the
        software world!
      </p>
      <div className="flex items-center gap-8">
        <IconLink
          href={GITHUBPROFILE}
          label="GitHub"
          icon={GitHubLogoIcon}
          size={iconSize}
          color={iconColor}
        />
        <IconLink
          href={LINKEDINPROFILE}
          label="LinkedIn"
          icon={LinkedInLogoIcon}
          size={iconSize}
          color={iconColor}
        />
        <Tooltip label="Check out my resume">
          <IconLink
            href={RESUME}
            label="Resume"
            icon={ReaderIcon}
            size={iconSize}
            color={iconColor}
          />
        </Tooltip>
      </div>
    </footer>
  );
}
