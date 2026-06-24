import { createFileRoute } from "@tanstack/react-router";
import Projects from "../features/projects/Projects";

export const Route = createFileRoute("/projects")({
  component: Projects,
});
