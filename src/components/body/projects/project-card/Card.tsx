import "./card.css";
export type CardProps = {
  project: any;
};
const Card: React.FC<CardProps> = ({ project }) => {
  return (
    <div className="card-container">
      <div data-aos="zoom-out" className="card">
        <img className="project--img" src={project.img} alt="" />
        <div className="info">
          <div className="project-title">{project.title}</div>
          <div className="project--links">
            {" "}
            <a
              target="_blank"
              className="project-link"
              href={project.demo}
              rel="noreferrer"
            >
              <div className="link--btn">Demo</div>
            </a>
            <a
              target="_blank"
              className="project-link"
              href={project.github}
              rel="noreferrer"
            >
              <div className="link--btn">GitHub</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
