import * as React from "react";
import { useRef, useState } from "react";
import { PHONE_NUMBER } from "../../resources/index";
import "./index.scss";
import { useEffect } from "react";

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [href, setHref] = useState<string>();
  const handleChange = (e: any) => setMessage(e.target.value);
  const ref = useRef<HTMLDivElement>(null);
  const [showContact, setShowContact] = useState(true);

  useEffect(() => {
    ref.current &&
    ref.current.getBoundingClientRect().top < window.innerHeight / 2
      ? setShowContact(true)
      : setShowContact(false);
  }, [ref.current?.getBoundingClientRect().top]);

  const contactHref = {
    facebook: "http://m.me/PrivateChefCatania?text=" + message,
    google:
      "https://mail.google.com/mail/?view=cm&fs=1&to=info@privatechefcatania.com&su=Private Chef Info Request&body=" +
      message,
    envelope:
      "mailto:info@privatechefcatania.com?subject=Private Chef Info Request&body=" +
      message,
    whatsapp: "https://wa.me/+39" + PHONE_NUMBER + "/?text=" + message,
  };

  return (
    <div className="contact-form lg:mt-22 pb-22" ref={ref} id="contact">
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
            placeholder="Scrivimi qualcosa..."
            value={message}
            onChange={handleChange}
            className="contact-form__input"
          />
          <h1 className="contact-form__select-label">Scrivimi su:</h1>

          <ul>
            {Object.keys(contactHref).map((key) => (
              <div className={key + (href === key ? " active" : "")}>
                <li onClick={() => setHref(key)} className={key}>
                  <button className={key + (href === key ? "_active" : "")}>
                    <i
                      className={
                        (key === "envelope" ? "far" : "fab") + " fa-" + key
                      }
                    />
                  </button>
                </li>
              </div>
            ))}
          </ul>
        </div>
        <button className="cta">
          <a href={href ? contactHref[href] : ""} className={href}>
            Contattami
          </a>
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
