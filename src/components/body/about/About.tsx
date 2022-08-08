import "./about.css";
import SocialContact from "@components/common/socialContact/socialContact";
import Lottie from "lottie-react";
import { useLottie } from "lottie-react";

import animationData from "./A-data/animationData.json";
import image from "./img/Coding-amico.png";
import download from "./img/file_download.svg";
const About: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { View } = useLottie(defaultOptions);
  return (
    <>
      <div className="about">
        <div className="section--title">About me </div>
        <div className="about--container">
          {" "}
          <div className="about_info">
            <div className="header-container">
              <p className="about_info--heading"> Frontend Developer</p>
            </div>

            <p className="about_info--txt">
              <b>Innovative </b> Frontend Developer with <b>1 year </b>{" "}
              experience building and maintaining responsive websites. Focused
              on creating <b className="txt-focused">beautiful</b> and{" "}
              <b className="txt-focused">user friendly </b>
              applications while writing{" "}
              <b className="txt-focused">clean code</b>.
            </p>
            <SocialContact />
            <div className="download">
              <a
                download
                href={require("../../assets/Lyubana-resume-2022.pdf").default}
              >
                My Resume{" "}
                <img className="download-icon" src={download} alt="" />
              </a>
            </div>
          </div>
          <div>
            {/* <img className="about--img" src={image} alt="" /> */}
            {View}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
