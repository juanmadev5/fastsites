export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-20 pt-24 pb-12 text-center"
    >
      <div className="max-w-5xl">
        <p className="text-base sm:text-lg text-[var(--secondary)] mb-4 uppercase tracking-[0.2em] font-semibold">
          Desarrollo Web Profesional
        </p>
        <h2
          className="
          /* FIX: Changed default text size to a smaller text-4xl */
          text-4xl 
          sm:text-6xl 
          lg:text-8xl 
          font-extrabold 
          leading-tight 
          text-[var(--onBackground)] mb-6"
        >
          Websites Rápidas.
          <span className="text-[var(--primary)]"> Bajo Costo.</span> <br />
          Mantenimiento Cero.
        </h2>
        <p className="text-lg sm:text-xl text-[var(--onSurface)] mb-12 max-w-3xl mx-auto">
          De idea a lanzamiento en semanas. Construyo tu <strong>MVP</strong>,
          <strong> landing page</strong> o aplicación web con la tecnología más
          moderna y eficiente.
        </p>
        <a
          href="#prototipos"
          className="inline-block bg-[var(--primary)] text-[var(--onPrimary)] text-lg px-12 py-4 rounded-xl font-bold shadow-[var(--primaryContainer)] hover:bg-[var(--secondary)] transition duration-300 transform hover:scale-[1.02]"
        >
          ¡Conoce mi Proceso Ágil!
        </a>
      </div>
    </section>
  );
}
