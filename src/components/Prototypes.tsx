import fastPrototypes from "/fast-prototypes.webp";

export default function Prototypes() {
  return (
    <section
      id="prototipos"
      className="py-24 px-4 sm:px-6 md:px-20 bg-[var(--primaryContainer)]"
    >
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h3 className="text-3xl sm:text-4xl font-bold text-[var(--onPrimaryContainer)] mb-6 md:text-left text-center">
            Del Diseño al Código en Horas ⏱️
          </h3>
          <p className="text-xl text-[var(--secondary)] mb-6 md:text-left text-center">
            <strong>No pierdas tiempo con mockups estáticos.</strong> Diseño tus
            prototipos directamente en código funcional (Design in Code).
          </p>
          <ul className="space-y-4 text-[var(--onSurface)] text-lg">
            <li className="flex items-start">
              <span className="text-[var(--primary)] text-xl mr-3 leading-none">
                ✓
              </span>
              <div className="flex-1">
                <strong className="whitespace-nowrap">MVP Funcional:</strong> El prototipo es el producto.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[var(--primary)] text-xl mr-3 leading-none">
                ✓
              </span>
              <div className="flex-1">
                <strong className="whitespace-nowrap">Feedback Real:</strong> Pruébalo en tu móvil y escritorio de inmediato.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-[var(--primary)] text-xl mr-3 leading-none">
                ✓
              </span>
              <div className="flex-1">
                <strong className="whitespace-nowrap">Costo Mínimo:</strong> Ahorras el tiempo y dinero del proceso de diseño tradicional (Figma → Código).
              </div>
            </li>
          </ul>
          <a
            href="#contacto"
            className="mt-10 inline-block bg-[var(--primary)] text-[var(--onPrimary)] text-lg px-8 py-3 rounded-lg font-bold shadow-xl hover:bg-[var(--secondary)] transition duration-300"
          >
            ¡Empecemos a Codear! →
          </a>
        </div>
        <div className="md:w-1/2">
          <img
            src={fastPrototypes}
            alt="Proceso de Prototipado Rápido"
            className="w-full h-auto rounded-xl shadow-2xl border-4 border-[var(--primary)]/50"
          />
        </div>
      </div>
    </section>
  );
}
