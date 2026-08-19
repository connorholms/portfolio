import { useState } from "react";
import ProjectExample from "./ProjectExample";
import { myProjects } from "./projects.constants";
import ProjectDisplay from "./ProjectHighlight";
import type { ProjectInfo } from "./projects.types";

interface ProjectProps {
  onRef: (element: HTMLElement | null) => void;
}

export default function Projects({ onRef }: ProjectProps) {
  const [displayedProject, setDisplayedProject] = useState(myProjects[0]);

  const handleClickProject = (project: ProjectInfo) => {
    setDisplayedProject(project);
  };

  return (
    <section ref={onRef} className="max-w-6xl mx-auto my-20">
      <h2 className="w-fit mx-auto mb-10 whitespace-nowrap text-center text-3xl text-black bg-box-background rounded-xl px-8 py-3">
        Projects I Have Been Working On
      </h2>
      <div className="grid grid-cols-4 grid-row-1 gap-4">
        {myProjects.map((project) => {
          return (
            <div key={project.id} onClick={() => handleClickProject(project)}>
              <ProjectExample
                project={project}
                highlighted={project.id === displayedProject.id}
              />
            </div>
          );
        })}
      </div>
      <div>
        <ProjectDisplay project={displayedProject} />
      </div>
    </section>
  );
}
