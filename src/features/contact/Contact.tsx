import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  ResumeIcon,
} from "@radix-ui/react-icons";
import { GITHUBPROFILE, LINKEDINPROFILE, RESUME } from "../../constants/contact";

interface ContactProps {
  onRef: (element: HTMLElement | null) => void;
}

const iconClass =
  "w-14 h-14 text-box-background transition-all duration-300 ease-out hover:text-[#cade46] hover:scale-110 hover:-translate-y-0.5";

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
        <a
          href={GITHUBPROFILE}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GitHubLogoIcon className={iconClass} />
        </a>
        <a
          href={LINKEDINPROFILE}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInLogoIcon className={iconClass} />
        </a>
        <a
          href={RESUME}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
        >
          <ResumeIcon className={iconClass} />
        </a>
      </div>
    </footer>
  );
}
