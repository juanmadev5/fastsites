***

# 🚀 JM Dev: Prototipos en Código (Design in Code)

## ¡De Idea a MVP Funcional, a Velocidad Luz!

Este repositorio es el showcase y el punto de partida para mi enfoque de **"Design in Code"**. En lugar de maquetas estáticas en Figma, yo construyo prototipos 100% funcionales directamente en código de producción, utilizando el stack más rápido y moderno.

Cada ejemplo aquí no es solo un diseño; es un **Minimum Viable Product (MVP)** listo para recibir feedback, ser desplegado o escalarse inmediatamente.


---

## 🧭 ¿Qué Encontrarás en esta Aventura?

Este proyecto contiene mi portafolio de diseños y maquetas funcionales, organizados bajo la carpeta `designs/`.

| Archivo de Diseño | Categoría | Descripción Rápida |
| :--- | :--- | :--- |
| `ecommerce-product-page.html` | E-commerce | Diseño de alta conversión para la venta de un producto. |
| `landing1.html` | Landing Page (SaaS) | Una página de aterrizaje limpia y moderna para servicios B2B o SaaS. |
| `landing2.html` | Landing Page (Producto) | Diseño enfocado en infoproductos o venta directa de un artículo digital. |
| `magazine1.html` | Revista / Blog | Un layout complejo para contenido de lectura, optimizado para la experiencia. |
| `professional-portfolio1.html` | Portafolio | Estilo minimalista, enfocado en la marca personal y la trayectoria. |
| `professional-portfolio2.html` | Portafolio | Estilo moderno y visual, con énfasis en el impacto de los proyectos. |
| `index.html` | **Landing Principal** | El sitio principal que enlaza a todos los prototipos. |

---

## 🛠️ Stack Tecnológico (La Herramienta para la Velocidad)

Para garantizar la máxima velocidad de carga, un desarrollo ágil y cero costos de infraestructura para un MVP, mi stack principal se centra en:

* **React:** Para la construcción de interfaces de usuario robustas y modulares.
* **Tailwind CSS:** La columna vertebral del diseño. Permite prototipar estilos de manera extremadamente rápida y asegurar un diseño **responsive** impecable.
* **HTML5 / JavaScript:** Fundamentos modernos y limpios.
* **Servidor sin Servidor (Serverless):** Mi enfoque en el backend usa soluciones como **Supabase** (para bases de datos y autenticación) y **Vercel** o Netlify (para hosting), garantizando escalabilidad y mantenimiento casi nulo.

---

## 💡 Filosofía del "Prototipo Funcional"

Este proyecto es la prueba de mi método de trabajo. Mi objetivo es **saltar la fase intermedia de diseño estático** para entregar valor real y tangible a mis clientes desde el día uno.

1.  **MVP Funcional:** El prototipo que ves es el código de tu producto final.
2.  **Feedback Instantáneo:** Pruébalo en cualquier dispositivo inmediatamente.
3.  **Ahorro de Costos:** Se elimina el tiempo y el costo de transformar un diseño (Figma) en código, lo cual acelera el lanzamiento.

---

## 🤝 Conéctate

¿Tienes un proyecto que necesita ser lanzado con esta misma velocidad y eficiencia?

* **Contáctame:** [itzjuanmadev@proton.me](mailto:itzjuanmadev@proton.me)
* **Mira mi Perfil:** [in/jmdev365](https://www.linkedin.com/in/jmdev365/)

¡Listo para el próximo desafío!

---

## SEO improvements (automated changes)

I applied a set of SEO and accessibility improvements to the site. Key changes:

- Added improved meta tags in `index.html`: canonical, robots, updated title and description, Open Graph and Twitter Card tags.
- Added JSON-LD structured data (WebSite, Person, BreadcrumbList) for rich result eligibility.
- Added resource hints (preconnect to external icon/avatar hosts and preload for CSS).
- Added `public/robots.txt` and `public/sitemap.xml` with main routes.
- Improved accessibility and link clarity: skip-to-content link, aria-labels for key CTAs and project links.
- Small SPA helper: `src/utils/seo.tsx` provides a `useSeo` hook to set title and description on route/component mount.

How to verify:

1. Run Lighthouse (in Chrome DevTools) and check Accessibility and SEO scores.
2. Use Google's Rich Results Test: https://search.google.com/test/rich-results and paste the homepage URL to validate JSON-LD.
3. Inspect `https://fastsites-jm.vercel.app/robots.txt` and `https://fastsites-jm.vercel.app/sitemap.xml` (replace with your deployed domain).
4. Run `npm run build` to ensure the production build is clean (already validated locally).

If you want, I can also add server-side rendering or prerendering for even better SEO, or integrate `react-helmet`/`@remix-run/react` style head management for multi-page metadata.