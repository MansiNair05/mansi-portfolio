import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Activities from "./components/Activities";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop"; 
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Activities />
      <Resume />
      <Contact />
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
