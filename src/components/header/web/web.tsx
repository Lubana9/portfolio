import { useState } from "react";

import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

import "./nav.css";
function Web() {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <BiBookAlt />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
}

export default Web;

// const Web: React.FC = () => {
//   return (
//     // <div className="web">
//     //   <div className="web--option">
//     //     <a href="#hello">Home</a>
//     //   </div>
//     //   <div className="web--option">
//     //     <a href="#aboutme">About</a>
//     //   </div>
//     //   <div className="web--option">
//     //     <a href="#skills">Skills</a>
//     //   </div>
//     //   <div className="web--option">
//     //     <a href="#project"> Projects </a>
//     //   </div>
//     //   <div className="web--option">
//     //     <a href="#contact">Contact</a>
//     //   </div>
//     // </div>
//   );
// };

// export default Web;
