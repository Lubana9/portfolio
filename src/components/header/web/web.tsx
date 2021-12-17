import "./web.css";
const Web: React.FC = () => {
  return (
    <div className="web">
      <div className="web--option">
        <a href="#aboutme">About me</a>
      </div>
      <div className="web--option">
        <a href="#skills">Skills</a>
      </div>
      <div className="web--option">
        <a href="#project"> Projects </a>
      </div>
      <div className="web--option">
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Web;
