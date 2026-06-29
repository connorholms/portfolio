import ProjectExample from "./ProjectExample";
import { myProjects } from "./projects.constants";

interface ProjectProps {
  onRef: (element: HTMLElement | null) => void;
}

export default function Projects({ onRef }: ProjectProps) {
  return (
    <section
      ref={onRef}
      className="grid grid-cols-2 grid-row-1 gap-4 max-w-6xl mx-auto"
    >
      {myProjects.map((project) => {
        return (
          <div key={project.id}>
            <ProjectExample project={project} />
          </div>
        );
      })}
    </section>
  );
}
