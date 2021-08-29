import * as React from "react";
import { useState } from "react";
import { PHONE_NUMBER } from "../../resources/index";
import "./index.scss";
import LogoWhite from "../../../public/static/svg/logowhite_notext.svg";

const ContactForm = () => {
  const [message, setMessage] = useState(
    "Buona sera, gradirei avere maggiori informazioni su questo servizio."
  );
  const handleChange = (e: any) => setMessage(e.target.value);

  return (
    <div className="contact-form mt-44 pb-44">
      <h1 className="contact-form__title mt-20 mb-20">Contact</h1>
      <div className="hidden lg:block">
        <LogoWhite
          style={{
            position: "absolute",
            left: "-10%",
            top: "40%",
            width: "30%",
            height: "60%",
          }}
        />
      </div>

      <div className="contact-form__container">
        <textarea
          id="contact"
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
  );
};

export default ContactForm;
