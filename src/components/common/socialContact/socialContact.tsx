import { Social } from "@components/data/social";
import "./socialContact.css";

const SocialContact = () => {
  const data = Social;
  return (
    <div className="social_contant">
      {data.map((item) => {
        return (
          <a href={item.link}>
            <div className="social-icon--container">
              <img src={item.icon} alt="" className="social-icon" />
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialContact;
