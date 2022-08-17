import "./skills.css";

import { SkillsData } from "@components/data/skills";

const Skills = () => {
  const data = SkillsData;
  return (
    <div className="skills">
      <div className="section--title">Skills</div>
      <div className="skills--list">
        {data.map((item) => {
          return (
            <div key={item.name} className="skill--container">
              <div data-aos="fade-up">{item.icon}</div>

              <div data-aos="fade-up" className="skill--title">
                {" "}
                {item.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
