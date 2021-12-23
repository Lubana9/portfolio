import { useState } from "react";

import "./header.css";
import Mobile from "./mobile/mobile";
import Web from "./web/web";
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header sticky ">
      <div className="logo">L</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div className="icon--container" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="menu-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </div>
          <div>{isOpen && <Mobile />} </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
