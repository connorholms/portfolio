import { TechLogos } from "../../assets/logos";
import SkillsIconGrid from "./skillsIcons";

const coreTechnologies = [
  { name: "Angular", src: TechLogos.Angular },
  { name: "CSS3", src: TechLogos.CSS3 },
  { name: "Docker", src: TechLogos.Docker },
  { name: "HTML5", src: TechLogos.HTML5 },
  { name: "JavaScript", src: TechLogos.JavaScript },
  { name: "Next.js", src: TechLogos.NextJS },
  { name: "Node.js", src: TechLogos.NodeJS },
  { name: "PostgreSQL", src: TechLogos.PostgreSQL },
  { name: "Python", src: TechLogos.Python },
  { name: "React", src: TechLogos.React },
  { name: "Redis", src: TechLogos.Redis },
  { name: "Tailwind CSS", src: TechLogos.Tailwind },
];

const workingKnowledge = [
  { name: "AWS", src: TechLogos.AWS },
  { name: "Azure", src: TechLogos.Azure },
  { name: "Go", src: TechLogos.Go },
  { name: "Java", src: TechLogos.Java },
  { name: "MongoDB", src: TechLogos.MongoDB },
  { name: "Vue.js", src: TechLogos.Vue },
  { name: "Svelte", src: TechLogos.Svelte },
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
