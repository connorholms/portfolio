import angularIcon from "../../assets/logos/angular-icon.svg";
import aws from "../../assets/logos/aws.svg";
import css from "../../assets/logos/css.svg";
import dockerIcon from "../../assets/logos/docker-icon.svg";
import gopher from "../../assets/logos/gopher.svg";
import html5 from "../../assets/logos/html-5.svg";
import java from "../../assets/logos/java.svg";
import javascript from "../../assets/logos/javascript.svg";
import microsoftAzure from "../../assets/logos/microsoft-azure.svg";
import mongodbIcon from "../../assets/logos/mongodb-icon.svg";
import nextjsIcon from "../../assets/logos/nextjs-icon.svg";
import nodejsIconAlt from "../../assets/logos/nodejs-icon-alt.svg";
import postgresql from "../../assets/logos/postgresql.svg";
import python from "../../assets/logos/python.svg";
import reactIcon from "../../assets/logos/react.svg";
import redis from "../../assets/logos/redis.svg";
import svelteIcon from "../../assets/logos/svelte-icon.svg";
import tailwindcssIcon from "../../assets/logos/tailwindcss-icon.svg";
import vue from "../../assets/logos/vue.svg";
import SkillsIconGrid from "./skillsIcons";

const coreTechnologies = [
  { name: "Angular", src: angularIcon },
  { name: "CSS3", src: css },
  { name: "Docker", src: dockerIcon },
  { name: "HTML5", src: html5 },
  { name: "JavaScript", src: javascript },
  { name: "Next.js", src: nextjsIcon },
  { name: "Node.js", src: nodejsIconAlt },
  { name: "PostgreSQL", src: postgresql },
  { name: "Python", src: python },
  { name: "React", src: reactIcon },
  { name: "Redis", src: redis },
  { name: "Tailwind CSS", src: tailwindcssIcon },
];

const workingKnowledge = [
  { name: "AWS", src: aws },
  { name: "Azure", src: microsoftAzure },
  { name: "Go", src: gopher },
  { name: "Java", src: java },
  { name: "MongoDB", src: mongodbIcon },
  { name: "Vue.js", src: vue },
  { name: "Svelte", src: svelteIcon },
];

export default function Skills() {
  return (
    <section>
      <div className="w-full max-w-6xl mx-auto p-6 my-10 bg-box-background/80 rounded-xl">
        <SkillsIconGrid
          name="Core Tech Stack"
          technologies={coreTechnologies}
        />
      </div>
      <div className="w-full max-w-6xl mx-auto p-6 my-10 bg-box-background/80 rounded-xl">
        <SkillsIconGrid
          name="Intermediate / Working Knowledge"
          technologies={workingKnowledge}
        />
      </div>
    </section>
  );
}
