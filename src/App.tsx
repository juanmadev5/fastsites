import { useEffect, useState } from "react";
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
