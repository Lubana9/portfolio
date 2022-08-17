import "./skills.css";

import { useLottie } from "lottie-react";

import animationskills from "./data/sk2.json";
import skills from "./img/skill2.png";
const SkillsA = () => {
  const defaultOptionsSkilss = {
    loop: true,
    autoplay: true,
    animationData: animationskills,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { View } = useLottie(defaultOptionsSkilss);
  return (
    <>
      {" "}
      <div className="section--title skill-desktop">Skills</div>
      <div data-aos="zoom-out" className="skillsA ">
        <img src={skills} alt="" className="rotating" />
        <div className="skills-lottie"> {View} </div>
      </div>{" "}
    </>
  );
};

export default SkillsA;
