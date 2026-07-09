export interface ProjectInfo {
  id: number;
  title: string;
  body: string;
  type: string;
  stack: string[];
  url: string | null;
  image: string;
}

export type Projects = ProjectInfo[];
