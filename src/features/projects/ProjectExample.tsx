import type { ProjectInfo } from "./projects.types";

interface ProjectExampleProps {
  project: ProjectInfo;
  highlighted: boolean;
}

export default function ProjectExample({
  project,
  highlighted,
}: ProjectExampleProps) {
  return (
    <article
      className={`h-full py-6 rounded-lg text-black text-center ${highlighted ? "bg-box-background" : "bg-olive-800 text-white"}`}
    >
      <h3 className="text-lg font-bold">{project.title}</h3>
    </article>
  );
}
