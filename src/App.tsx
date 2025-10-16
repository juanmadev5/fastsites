import { useEffect, useState } from "react";
import { useSeo } from "./utils/seo";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Prototypes from "./components/Prototypes";
import Tecnologias from "./components/Technologies";

function App() {
  const [showContent, setShowContent] = useState(false);
  // Set SPA metadata for the home page
  useSeo({
    title: "Fastsites.jm | Desarrollo Web Profesional — MVPs y Landing Pages Rápidas",
    description:
      "Desarrollo web profesional con React y Tailwind CSS. Creo MVPs y landing pages rápidas y de bajo costo con enfoque en rendimiento y conversión.",
  });

  useEffect(() => {
    setTimeout(() => setShowContent(true), 200);
  }, []);

  return (
    <>
      <div className={`transition-opacity duration-1500 ease-in-out ${showContent ? "opacity-100" : "opacity-0"}`}>
        <Header />
        <Hero />
        <Prototypes />
        <Tecnologias />
        <Portfolio />
        <Process />
        <Contact />
        <AboutMe />
        <Footer />
      </div>
    </>
  );
}

export default App;
