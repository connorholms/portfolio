import Bio from "./Bio";

interface AboutProps {
  onRef: (element: HTMLElement | null) => void;
}

export default function About({ onRef }: AboutProps) {
  return (
    <section ref={onRef} className="flex h-200">
      <Bio />
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
