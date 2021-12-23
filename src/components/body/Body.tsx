import About from "./about/About";
import "./body.css";
import Contact from "./contact/Contact";
import Hello from "./hello/Hello";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

const Body: React.FC = () => {
  return (
    <div className="body">
      <section id="hello">
        <Hello />
      </section>
      <section id="aboutme">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="project">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Body;
