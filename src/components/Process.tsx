

export default function Process() {
  const pasos = [
    {
      num: 1,
      title: "Discovery & Plan",
      desc: "Definimos tus metas, público objetivo y la estructura básica. Esto asegura que el código esté alineado con tus objetivos de negocio desde el inicio.",
    },
    {
      num: 2,
      title: "Design in Code",
      desc: "Paso directo al código. Te presento un prototipo funcional (no un mockup estático) en días, para recibir feedback real de inmediato.",
    },
    {
      num: 3,
      title: "Iterar y Refinar",
      desc: "Aplicamos tu feedback y realizamos ajustes rápidos. Mantenemos el proceso ágil, evitando largas revisiones para llegar a un producto final velozmente.",
    },
    {
      num: 4,
      title: "Lanzamiento y Entrega",
      desc: "Implementamos el código en un hosting sin mantenimiento (como Vercel/Netlify), asegurando velocidad máxima. ¡El proyecto es tuyo!",
    },
  ];

  return (
    <section id="proceso" className="py-24 px-4 sm:px-6 md:px-20 text-center">
      <h3 className="text-3xl font-bold text-[var(--primary)] mb-6">
        Mi Proceso Ágil
      </h3>
      <p className="text-lg text-[var(--onSurface)] mb-16 max-w-3xl mx-auto">
        Trabajo contigo en cada paso para garantizar que tu producto se
        construya rápido y con propósito.
      </p>

      <div className="grid gap-12 md:grid-cols-4">
        {pasos.map((p) => (
          <div
            key={p.num}
            className="relative flex flex-col items-center text-center"
          >
            {/* The circular step number element */}
            <div className="bg-[var(--primaryContainer)] text-[var(--onPrimaryContainer)] w-14 h-14 flex items-center justify-center rounded-full text-2xl font-bold mb-4">
              {p.num}
            </div>
            <h4 className="text-xl font-semibold mb-2 text-[var(--onBackground)]">
              {p.title}
            </h4>
            <p className="text-[var(--secondary)]">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}