import SocialContact from "@components/common/socialContact/socialContact";

import "./about.css";
import image from "./img/Coding-amico.png";
import download from "./img/file_download.svg";

const About: React.FC = () => {
  return (
    <>
      <div className="about">
        <div className="section--title">About me </div>
        <div className="about--container">
          {" "}
          <div className="about_info">
            <div className="header-container">
              <p className="about_info--heading">Junior Frontend Developer</p>
            </div>

            <p className="about_info--txt">
              Focused on creating <b className="txt-focused">beautiful</b> and{" "}
              <b className="txt-focused">user friendly </b>
              applications while writing{" "}
              <b className="txt-focused">clean code</b>.
            </p>
            <SocialContact />
            <div className="download">
              <a download href={require("../../assets/CV.pdf").default}>
                My Resume{" "}
                <img className="download-icon" src={download} alt="" />
              </a>
            </div>
          </div>
          <div>
            <img className="about--img" src={image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
