import "./hello.css";

import image from "./img/myAvatar.png";

const Hello = () => {
  return (
    <div className="hello--container">
      <div className="hello">
        <div data-aos="fade-down" className="img--container">
          <img className="porfile--img" src={image} alt="" />
        </div>
        <div data-aos="fade-up" className="Hello_text--conatiner">
          <div className="content--header">Hi, I'm Lubana</div>
          <div className="content--txt ">Frontend Developer</div>
        </div>
      </div>
    </div>
  );
};

export default Hello;
