import "./mobile.css";

const Mobile: React.FC = () => {
  return (
    <ul className="mobile">
      <li className="mobile--option">
        <a href="#hello">Home</a>
      </li>
      <li className="mobile--option">
        <a href="#aboutme">About</a>
      </li>
      <li className="mobile--option">
        <a href="#skills">Skills</a>
      </li>
      <li className="mobile--option">
        <a href="#project"> Projects </a>
      </li>
      <li className="mobile--option">
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};

export default Mobile;
