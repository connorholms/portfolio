interface ProjectExampleProps {
  project: {
    id: number;
    title: string;
    body: string;
  };
}

export default function ProjectExample({ project }: ProjectExampleProps) {
  return (
    <article className="border h-full bg-box-background/80 text-black">
      <h3 className="text-lg font-bold">{project.title}</h3>
      <p>{project.body}</p>
    </article>
  );
}
