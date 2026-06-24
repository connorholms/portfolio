import { createFileRoute } from "@tanstack/react-router";
import Contact from "../features/contact/Contact";

export const Route = createFileRoute("/contact")({
  component: Contact,
});
