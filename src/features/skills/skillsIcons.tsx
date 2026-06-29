import type { techologiesList } from "./skills.types";

interface SkillIconsGridProps {
  technologies: techologiesList;
  name: string;
}

export default function SkillsIconGrid({
  technologies,
  name,
}: SkillIconsGridProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        {name}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center p-4"
          >
            <div className="w-12 h-12 flex items-center justify-center mb-3">
              <img
                src={tech.src}
                alt={`${tech.name} logo`}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <span className="text-sm font-medium text-gray-600 text-center line-clamp-1">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
