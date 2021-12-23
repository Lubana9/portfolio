import SocialContact from "@components/common/socialContact/socialContact";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="section--title">Contact</div>
      <div className="grid">
        <div className="contact-left">
          <form className="contact-form">
            <input
              className="contact--input"
              type="text"
              placeholder="Name"
              required
            />
            <input
              className="contact--input"
              type="email"
              placeholder="Email"
              required
            />
            <textarea
              className="contact--input contact_message"
              name="message"
              placeholder="Message"
              required
            ></textarea>
            <input
              className="contact--input contact--submit"
              type="submit"
              value="Send"
            />
          </form>
        </div>
        <div className="contact-right">
          <div className="contact--social">
            <svg
              className="contact_email--icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="36px"
              fill="#c2a583"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <div className="contact_email">lubanabu98@gmail.com</div>
          </div>
          <SocialContact />
        </div>
      </div>
    </div>
  );
};

export default Contact;
