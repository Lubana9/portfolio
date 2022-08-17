/* eslint-disable no-console */
import { ChangeEvent, FormEvent, useState } from "react";

import SocialContact from "@components/common/socialContact/socialContact";
import "./contact.css";
import axios from "axios";

import { FormState, initialFormState, ServiceMessage } from "./types";

const Contact: React.FC = () => {
  const formId = "QIyuFDck";
  const formSparkUrl = `https://submit-form.com/${formId}`;

  const [formState, SetFormState] = useState<FormState>(initialFormState);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<ServiceMessage>();
  const handelChnge = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    const formKey = id as keyof FormState;
    const updatedFormState = { ...formState };
    updatedFormState[formKey] = value;
    SetFormState(updatedFormState);
  };

  const handelSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await postSubmission();
    setSubmitting(false);
    SetFormState(initialFormState);
  };
  const postSubmission = async () => {
    const payload = {
      message: { ...formState },
    };
    try {
      await axios.post(formSparkUrl, payload);

      setMessage({
        class: "successful",
        text: "Thank You! Your message has been sent",
      });
    } catch (error) {
      setMessage({
        class: "error",
        text: "Sorry, there was a problem",
      });
    }
  };
  return (
    <div className="contact">
      <div className="section--title">Contact</div>
      <div data-aos="zoom-out" className="grid">
        <div className="contact-left">
          {message && (
            <div className={`thanks_message ${message.class}`}>
              {message.text}
            </div>
          )}
          <form className="contact-form" onSubmit={handelSubmit}>
            <input
              onChange={handelChnge}
              className="contact--input"
              type="text"
              id="name"
              placeholder="Name"
              value={formState.name}
            />
            <input
              onChange={handelChnge}
              className="contact--input"
              type="email"
              id="email"
              placeholder="Email"
              value={formState.email}
            />
            <textarea
              onChange={handelChnge}
              className="contact--input contact_message"
              name="message"
              placeholder="Message"
              id="message"
              value={formState.message}
            ></textarea>
            <input
              disabled={submitting}
              className="contact--input contact--submit"
              type="submit"
              value={submitting ? "Sending..." : "Send"}
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
              fill="#fff"
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
