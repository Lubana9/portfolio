import SocialContact from "@components/common/socialContact/socialContact";

import "./about.css";
import image from "./img/Coding-amico.png";
import download from "./img/file_download.svg";

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about_info">
        <div className="header-container">
          <div className="about_info--header">Hello, I am Lubana</div>
          <p className="about_info--heading">Junior Frontend Developer</p>
        </div>

        <p className="about_info--txt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          pariatur labore tempora aut dolore similique sunt recusandae,
          aspernatur repellat doloremque totam reprehenderit iure error minus
          possimus, ut nisi, minima deserunt.
        </p>
        <SocialContact />
        <div className="download">
          <a download href={require("../../assets/CV.pdf").default}>
            My Resume <img className="download-icon" src={download} alt="" />
          </a>
        </div>
      </div>

      <div>
        <img className="about--img" src={image} alt="" />
      </div>
    </div>
  );
};

export default About;
