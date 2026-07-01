export interface ProjectInfo {
  id: number;
  title: string;
  body: string;
  type: string;
  stack: string[];
}

export type Projects = ProjectInfo[];
