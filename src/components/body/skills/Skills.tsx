import { SkillsData } from "@components/data/skills";
import "./skills.css";

const Skills = () => {
  const data = SkillsData;
  return (
    <div className="skills">
      <div className="section--title">Skills</div>
      <div className="skills--list">
        {data.map((item) => {
          return (
            <div key={item.name} className="skill--container">
              <div>{item.icon}</div>

              <div className="skill--title"> {item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
