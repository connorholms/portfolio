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
    <section ref={onRef} className="max-w-6xl mx-auto my-10 h-screen">
      <h2>Projects</h2>
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
