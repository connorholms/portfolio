import type { ProjectInfo } from "./projects.types";

interface ProjectHighlightProps {
  project: ProjectInfo;
}

export default function ProjectHighlight({ project }: ProjectHighlightProps) {
  return (
    <article className="mt-10 py-6 rounded-lg bg-box-background text-black">
      <h2 className="mx-10 pb-6 text-4xl text-bold">{project.title}</h2>
      <p className="mx-10">{project.body}</p>
    </article>
  );
}
