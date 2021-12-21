import { ProjectData } from "@components/data/projects";

import Card from "./project-card/Card";
import "./projects.css";

const Projects = () => {
  const data = ProjectData;
  return (
    <div className="projects">
      <div className="section--title">Projects</div>
      <div className="project--cards">
        {" "}
        {data.map((item) => {
          return <Card project={item} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
