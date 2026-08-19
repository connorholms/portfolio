import { TechLogos } from "../../assets/logos";
import type { ProjectInfo } from "./projects.types";

interface ProjectHighlightProps {
  project: ProjectInfo;
}

export default function ProjectHighlight({ project }: ProjectHighlightProps) {
  return (
    <article className="mt-10 py-6 rounded-lg bg-box-background text-black">
      <h2 className="mx-10 pb-6 text-4xl text-bold">{project.title}</h2>
      <p className="mx-10">{project.body}</p>

      <div className="mx-10 mt-6 flex items-center justify-center gap-10">
        {project.stack.map((tech) => (
          <div
            key={tech}
            className="flex flex-col items-center justify-center p-2"
          >
            <div className="w-20 h-20 flex items-center justify-center mb-2 grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100">
              <img
                src={TechLogos[tech as keyof typeof TechLogos]}
                alt={`${tech} logo`}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <span className="text-s font-medium text-black text-center">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}
