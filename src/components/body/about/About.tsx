import "./about.css";

import SocialContact from "@components/common/socialContact/socialContact";
import { useLottie } from "lottie-react";

import animationData from "./A-data/animationData.json";
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
            <p className="about_info--txt" data-aos="fade-up">
              Frontend Developer with <b>1 year </b> experience building and
              maintaining responsive websites. Focused on creating{" "}
              <b className="txt-focused">beautiful</b> and{" "}
              <b className="txt-focused">user friendly </b>
              applications while writing{" "}
              <b className="txt-focused">clean code</b>. <br />
              <br />
              <i>
                {" "}
                I believe everything is an Art when you put your consciousness
                in it.{" "}
              </i>
              <br />
              <br />
              You can connect with me via social links.
            </p>
            <SocialContact />
            <div className="download" data-aos="fade-up">
              <a
                download
                href={require("../../assets/Lyubana-resume-2022.pdf").default}
              >
                My Resume{" "}
                <img className="download-icon" src={download} alt="" />
              </a>
            </div>
          </div>
          <div data-aos="zoom-in">
            {/* <img className="about--img" src={image} alt="" /> */}
            {View}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
