import * as React from "react";
import { useRef, useState } from "react";
import { PHONE_NUMBER } from "../../resources/index";
import "./index.scss";
import { useEffect } from "react";

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const handleChange = (e: any) => setMessage(e.target.value);
  const ref = useRef<HTMLDivElement>(null);
  const [showContact, setShowContact] = useState(true);

  useEffect(() => {
    ref.current &&
    ref.current.getBoundingClientRect().top < window.innerHeight / 2
      ? setShowContact(true)
      : setShowContact(false);
  }, [ref.current?.getBoundingClientRect().top]);

  return (
    <div className="contact-form lg:mt-44 pb-44" ref={ref}>
      <div
        className={
          showContact
            ? "contact-form__animation_in"
            : "contact-form__animation_out"
        }
      >
        <h1 className="contact-form__title mt-20 mb-20">Contact</h1>
        <div className="contact-form__container">
          <textarea
            id="contact"
            placeholder="Buonasera, gradirei avere maggiori informazioni..."
            value={message}
            onChange={handleChange}
            className="contact-form__input"
          />

          <div className="contact-form__media-container">
            <a
              href={"https://wa.me/+39" + PHONE_NUMBER + "/?text=" + message}
              className="contact-form__whatsapp"
            >
              <i className="fab fa-whatsapp" />
            </a>
            <a
              href={"http://m.me/PrivateChefCatania?text=" + message}
              className="contact-form__facebook"
            >
              <i className="fab fa-facebook" />
            </a>
            <a
              href={
                "https://mail.google.com/mail/?view=cm&fs=1&to=info@privatechefcatania.com&su=Private Chef Info Request&body=" +
                message
              }
              className="contact-form__gmail"
            >
              <i className="fab fa-google" />
            </a>
            <a
              href={
                "mailto:info@privatechefcatania.com?subject=Private Chef Info Request&body=" +
                message
              }
              className="contact-form__email"
            >
              <i className="far fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
