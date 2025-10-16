export default function AboutMe() {
  return (
    <section
      id="sobre-mi"
      className="py-24 px-4 sm:px-6 md:px-20 bg-[var(--surface)]"
    >
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-12">
        <div className="w-full md:w-1/4 flex justify-center md:mb-0">
          <img
            src="https://avatars.githubusercontent.com/u/115042535?s=400&u=62a596cea79ad50f38ed1e841b021acae7b7b79a&v=4"
            alt="Juan Manuel Velázquez"
            className="rounded-full w-40 h-40 object-cover border-4 border-[var(--primary)] shadow-2xl"
          />
        </div>

        <div className="w-full md:w-3/4 text-center md:text-left">
          <h3 className="text-3xl font-bold text-[var(--primary)] mb-6">
            Quién Soy
          </h3>
          <p className="text-lg text-[var(--onSurface)] mb-10 text-pretty">
            Esta aventura de desarrollo comenzó como un reto personal. Soy un
            desarrollador que ha decidido crear soluciones web{" "}
            <strong>intuitivas y funcionales</strong> en solitario. Mi misión es
            combinar diseño de alto impacto con tecnología moderna,
            especializándome en soluciones rápidas con tecnologías como React y
            Tailwind para ofrecer <strong>experiencias excepcionales</strong>{" "}
            sin complicaciones, poniendo a prueba mi stack y mis límites en cada
            proyecto.
          </p>

          <div className="flex justify-center md:justify-start gap-2 mt-8">
            <div className="border-1 p-2 rounded-2xl border-[var(--primary)] flex gap-2 transition duration-400 hover:scale-110">
              <img
                src="https://skillicons.dev/icons?i=github"
                alt="GitHub Icon"
                className="h-6 w-6 md:h-6 md:w-6"
              />
              <a
                href="https://github.com/juanmadev5"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--primary)] transition"
              >
                GitHub
              </a>
            </div>

            <div className="border-1 p-2 rounded-2xl border-[var(--primary)] flex gap-2 transition duration-300 hover:scale-110">
              <img
                src="https://skillicons.dev/icons?i=linkedin"
                alt="LinkedIn Icon"
                className="h-6 w-6 md:h-6 md:w-6"
              />
              <a
                href="https://linkedin.com/in/jmdev365"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--primary)] transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
