import { TechLogos } from "../../assets/logos";
import SkillsIconGrid from "./skillsIcons";

const coreTechnologies = [
  TechLogos.angular,
  TechLogos.css3,
  TechLogos.docker,
  TechLogos.html5,
  TechLogos.javascript,
  TechLogos.nextjs,
  TechLogos.nodejs,
  TechLogos.postgresql,
  TechLogos.python,
  TechLogos.react,
  TechLogos.redis,
  TechLogos.tailwind,
];

const workingKnowledge = [
  TechLogos.aws,
  TechLogos.azure,
  TechLogos.go,
  TechLogos.java,
  TechLogos.mongodb,
  TechLogos.vue,
  TechLogos.svelte,
];

export default function Skills() {
  return (
    <section className="flex flex-col justify-center bg-olive-800">
      <div className="w-full max-w-6xl mx-auto p-6 my-10 rounded-xl">
        <SkillsIconGrid
          name="Core Tech Stack"
          technologies={coreTechnologies}
        />
      </div>
      <div className="w-full max-w-6xl mx-auto p-6 my-10 rounded-xl">
        <SkillsIconGrid name="Familiar With" technologies={workingKnowledge} />
      </div>
    </section>
  );
}
