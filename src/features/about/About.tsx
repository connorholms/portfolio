interface AboutProps {
  onRef: (element: HTMLElement | null) => void;
}

export default function About({ onRef }: AboutProps) {
  return (
    <section ref={onRef} className="h-screen">
      <div className="flex h-full">
        <span className="w-1/2 flex items-center justify-center">
          <p>
            Hi, I'm Connor and I am a software engineer. I am a self-taught
            software engineer with 5 years of experience ranging in full-stack
            engineering, client success and product roles. I treat engineering
            like it's a product role and have a unique approach to development,
            focusing on the user and the value that I can provide them. I'm
            eagerly awaiting my next challenge and look forward to the next set
            of problems to solve
          </p>
        </span>
        <span className="flex block w-1/2 items-center justify-start">
          <img
            src="src/assets/CH_headshot.jpg"
            alt="Connor Holmstrom Headshot"
            className="h-3/4 w-3/4 object-cover"
          />
        </span>
      </div>
    </section>
  );
}
