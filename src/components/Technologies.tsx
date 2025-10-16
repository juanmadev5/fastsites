export default function Tecnologias() {
  const stack = [
    { name: "HTML", icon: "html" },
    { name: "JavaScript", icon: "js" },
    { name: "React", icon: "react" },
    { name: "TailwindCSS", icon: "tailwind" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Supabase", icon: "supabase" },
  ];

  return (
    <section
      id="tecnologias"
      className="py-24 px-4 sm:px-6 md:px-20 text-center"
    >
      <h3 className="text-3xl font-bold text-[var(--primary)] mb-4">
        Mi Stack de Desarrollo
      </h3>
      <p className="text-lg text-[var(--onSurface)] mb-8 max-w-2xl mx-auto">
        Utilizo herramientas modernas para garantizar velocidad, escalabilidad y
        una experiencia de usuario superior.
      </p>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 md:gap-x-16 max-w-5xl mx-auto">
        {stack.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center">
            <img
              src={`https://skillicons.dev/icons?i=${tech.icon}`}
              alt={`${tech.name} Icon`}
              className="h-14 w-14 md:h-20 md:w-20"
            />
            <span className="text-sm mt-2 text-[var(--secondary)]">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
