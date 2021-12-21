import "./card.css";
export type CardProps = {
  project: any;
};
const Card: React.FC<CardProps> = ({ project }) => {
  return (
    <div className="card--container">
      <div className="card">
        <img className="project--img" src={project.img} alt="" />
        <div className="project-title">{project.title}</div>
        <div className="project--links">
          {" "}
          <a className="project-link" href={project.demo}>
            <div className="link--btn">Demo</div>
          </a>
          <a className="project-link" href={project.github}>
            <div className="link--btn">GitHub</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
