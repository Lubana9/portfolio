import About from "./about/About";
import "./body.css";
// import Contact from "./contact/Contact";
import Hello from "./hello/Hello";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import SkillsA from "./skills/SkillsDesktop";

const Body: React.FC = () => {
  const isMobile = window.screen.width < 1024;
  return (
    <div className="body">
      <section id="hello">
        <Hello />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">{isMobile ? <Skills /> : <SkillsA />}</section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">{/* <Contact /> */}</section>
    </div>
  );
};

export default Body;
