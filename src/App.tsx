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
  return (
    <>
      <Header />
      <Hero />
      <Prototypes />
      <Tecnologias />
      <Portfolio />
      <Process />
      <Contact />
      <AboutMe />
      <Footer />
    </>
  );
}

export default App;
