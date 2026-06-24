interface ProjectProps {
  onRef: (element: HTMLElement | null) => void;
}

export default function Projects({ onRef }: ProjectProps) {
  return (
    <section ref={onRef}>
      <div>Place where projects will go</div>
    </section>
  );
}
