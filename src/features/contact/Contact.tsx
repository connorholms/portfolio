import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

interface ContactProps {
  onRef: (element: HTMLElement | null) => void;
}

export default function Contact({ onRef }: ContactProps) {
  return (
    <section ref={onRef} className="flex justify-center">
      <span>
        <GitHubLogoIcon />
      </span>
      <span>
        <LinkedInLogoIcon />
      </span>
      <span>
        <EnvelopeClosedIcon />
      </span>
    </section>
  );
}
