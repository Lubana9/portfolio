import React from "react";

import SocialContact from "@components/common/socialContact/socialContact";
import "./footer.css";
const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer--icon">
        {" "}
        <SocialContact />{" "}
      </div>
      <div className="copyright">© 2021 made by Lubana</div>
    </div>
  );
};

export default Footer;
