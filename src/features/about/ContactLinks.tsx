import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  ReaderIcon,
} from "@radix-ui/react-icons";
import IconLink from "../../components/ui/IconLink";
import Tooltip from "../../components/ui/Tooltip";
import { GITHUBPROFILE, LINKEDINPROFILE, RESUME } from "../../constants/contact";

export default function ContactLinks() {
  return (
    <div className="flex gap-4 mt-4">
      <IconLink href={GITHUBPROFILE} label="GitHub" icon={GitHubLogoIcon} />
      <IconLink
        href={LINKEDINPROFILE}
        label="LinkedIn"
        icon={LinkedInLogoIcon}
      />
      <Tooltip label="Check out my resume">
        <IconLink href={RESUME} label="Resume" icon={ReaderIcon} />
      </Tooltip>
    </div>
  );
}
