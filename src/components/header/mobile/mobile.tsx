import { useState } from "react";

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineMessage,
  AiOutlinePlus,
} from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import "../mobile/navmob.css";
const Mobile: React.FC = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div>
      <div className="floating-menu">
        <input type="checkbox" />
        <span className="plus-icon">
          <AiOutlinePlus />
        </span>
        <ul className="floating-nav">
          <li>
            <a
              href="#hello"
              onClick={() => setActiveNav("#hello")}
              className={activeNav === "#hello" ? "active" : ""}
            >
              <AiOutlineHome />
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setActiveNav("#about")}
              className={activeNav === "#about" ? "active" : ""}
            >
              <AiOutlineUser />
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => setActiveNav("#skills")}
              className={activeNav === "#skills" ? "active" : ""}
            >
              <BiBookAlt />
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => setActiveNav("#projects")}
              className={activeNav === "#projects" ? "active" : ""}
            >
              <RiServiceLine />
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setActiveNav("#contact")}
              className={activeNav === "#contact" ? "active" : ""}
            >
              <AiOutlineMessage />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Mobile;
