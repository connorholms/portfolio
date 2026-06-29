import Bio from "./Bio";
import ContactLinks from "./ContactLinks";

interface AboutProps {
  onRef: (element: HTMLElement | null) => void;
}

export default function About({ onRef }: AboutProps) {
  return (
    <section
      ref={onRef}
      className="flex h-200 w-full max-w-6xl justify-center mx-auto"
    >
      <div className="flex flex-col w-1/2 justify-center items-center">
        <Bio />
        <ContactLinks />
      </div>
      <span className="flex block w-1/2 items-center justify-start">
        <img
          src="src/assets/headshot.jpg"
          alt="Connor Holmstrom Headshot"
          className="h-150 object-cover"
        />
      </span>
    </section>
  );
}
