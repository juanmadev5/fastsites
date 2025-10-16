import landing1 from "/landing-1.webp";
import landing2 from "/landing-2.webp";
import magazine from "/magazine.webp";
import pro1 from "/pro-portfolio1.webp";
import pro2 from "/pro-portfolio2.webp";
import ecommerce from "/ecommerce.webp";

export default function Portfolio() {
  const proyectos = [
    {
      img: ecommerce,
      title: "Tienda E-commerce (Prototipo)",
      desc: "Diseño responsive y enfocado en la conversión para una página de producto.",
      link: "/designs/ecommerce-product-page.html",
    },
    {
      img: landing1,
      title: "Landing Page SaaS (Prototipo)",
      desc: "Página de alta velocidad para captar nuevos usuarios de un servicio web.",
      link: "/designs/landing1.html",
    },
    {
      img: pro1,
      title: "Portafolio Personal I",
      desc: "Diseño minimalista y centrado en la marca personal para desarrolladores.",
      link: "/designs/professional-portfolio1.html",
    },
    {
      img: magazine,
      title: "Revista / Blog (Prototipo)",
      desc: "Layout complejo optimizado para contenido de lectura intensiva.",
      link: "/designs/magazine1.html",
    },
    {
      img: landing2,
      title: "Landing Page Producto",
      desc: "Diseño limpio y moderno para la venta de infoproductos o servicios.",
      link: "/designs/landing2.html",
    },
    {
      img: pro2,
      title: "Portafolio Personal II",
      desc: "Layout moderno con énfasis en proyectos visuales y una estructura de galería.",
      link: "/designs/professional-portfolio2.html",
    },
  ];

  return (
    <section
      id="portafolio"
      className="py-24 px-4 sm:px-6 md:px-20 bg-[var(--surface)]"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-[var(--primary)] mb-6">
          Portafolio
        </h3>
        <p className="text-lg text-[var(--onSurface)] mb-16">
          Algunos ejemplos recientes de proyectos web que diseñé y desarrollé
          end-to-end.
        </p>

        <div className="grid gap-12 md:grid-cols-3">
          {proyectos.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-xl bg-[var(--background)] hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-[var(--onBackground)] mb-2">
                  {p.title}
                </h4>
                <p className="text-[var(--secondary)] mb-4">{p.desc}</p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver proyecto: ${p.title}`} 
                  className="text-[var(--primary)] font-semibold hover:underline"
                >
                  Ver proyecto →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
