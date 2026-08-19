// PLACEHOLDER DATA TO BE REFINED

import type { Projects } from "./projects.types";

const aoProjectDetails = {
  id: 1,
  title: "Anderson Optimization",
  body: "Frontend leaning Full-stack developer with an Angular, OpenLayers, Node.js, Python and PostgreSQL based tech stack. I contributed to almost every department at one point or another (Engineering, Product, Client Success, Sales, etc) and helped bring a 7 person startup scale and grow through acqusition and beyond going from under $300,000 in revenue to well over $3M.",
  type: "Full Time Role",
  stack: ["angular", "nodejs", "python", "postgresql", "docker", "aws"],
  url: null,
  image: "",
};

const rowlandProjectDetails = {
  id: 2,
  title: "Rowland.ai",
  body: "Full-stack developer focusing on bringing AI features to land services companies in the energy industry. Focuses on using AI to extract relevant data from documents, using extracted documents to create tailored workflows and using an AI assisted chatbot with an industry specific knowledge base to answer questions aobut the docuemnts or the industry overall.",
  type: "Full Time Role",
  stack: [
    "react",
    "nextjs",
    "python",
    "postgresql",
    "redis",
    "docker",
    "azure",
    "tailwind",
  ],
  url: null,
  image: "",
};

const earTraining = {
  id: 3,
  title: "Ear Training App",
  body: "A project that I made for personal use to practice ear training in music. The app was only meant to be built to run a frontend locally on my on personal machine and allows me to practice training my ear to identify intervals.",
  type: "Personal Project",
  stack: ["angular"],
  url: "https://github.com/connorholms/ear-training-angular",
  image: "",
};

const webScraper = {
  id: 4,
  title: "Web Scraper",
  body: "Due to contract work, I am unable to share some details about this project. I built a webscraper for a client that target details from a specific type of faculty from schools. The web scraper was an interesting challenge because I needed to parse all of the schools data out of links from Niche.com which attempted to block web crawlers.",
  type: "Contract",
  stack: ["python"],
  url: null,
  image: "",
};

export const myProjects: Projects = [
  aoProjectDetails,
  rowlandProjectDetails,
  earTraining,
  webScraper,
];
