import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Profile from "./components/Profile";

const App = () => {
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="md:w-[70vw] md:m-auto">
      <Navbar
        onScrollToProjects={() => scrollToSection(projectsRef)}
        onScrollToSkills={() => scrollToSection(skillsRef)}
        onScrollToWork={() => scrollToSection(workRef)}
        onScrollToContact={() => scrollToSection(contactRef)}
      />
      <Hero />
      <Profile />
      <Projects ref={projectsRef} />
      <Skills ref={skillsRef} />
      <Work ref={workRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
};

export default App;
