export default function HardSkills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React JS",
    "API",
    "TailwindCCS / BootstrapCSS",
    "GitHub / Git",
    "Figma",
  ];
  return (
    <div>
      <h1 className="text-xl uppercase font-semibold my-2">Навыки</h1>
      <div className="space-y-2">
        {skills.map((str, index) => (
          <p key={index}>{str}</p>
        ))}
      </div>
    </div>
  );
}
