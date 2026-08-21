import Bio from "./Bio";
import ContactLinks from "./ContactLinks";
import headshotUrl from "src/assets/headshot.jpg";

interface AboutProps {
  onRef: (element: HTMLElement | null) => void;
}

export default function About({ onRef }: AboutProps) {
  return (
    <section
      ref={onRef}
      className="flex h-200 w-full max-w-6xl justify-center mx-auto mt-6 mb-10"
    >
      <div className="flex flex-col w-1/2 justify-center items-center">
        <Bio />
        <ContactLinks />
      </div>
      <span className="flex block w-1/2 items-center justify-start">
        <img
          src={`${headshotUrl}`}
          alt="Connor Holmstrom Headshot"
          className="h-150 object-cover"
        />
      </span>
    </section>
  );
}
