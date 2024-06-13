import { FaCalendarDay } from "@react-icons/all-files/fa/FaCalendarDay";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaPencilAlt } from "@react-icons/all-files/fa/FaPencilAlt";
import { FaPhone } from "@react-icons/all-files/fa/FaPhone";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNav } from "../../hooks/useNav";
import { useOnScreen } from "../../hooks/useOnScreen";
import { CITY } from "../../resources";
import "./index.scss";
const LOADING = "LOADING";
const SUCCESS = "SUCCESS";
const ERROR = "ERROR";

const ContactForm = () => {
  const ref = useNav("/#contact");
  const refForAnim = useRef(null);
  const isOnScreen = useOnScreen(ref);
  const [step, setStep] = useState();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    email: "",
    location: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    date: false,
    email: false,
    location: false,
    message: false,
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name])
      setErrors({
        ...errors,
        [e.target.name]: !e.target.validity.valid,
      });
  };
  const handleBlur = (e) => {
    setErrors({
      ...errors,
      [e.target.name]: !e.target.validity.valid,
    });
  };
  const href = "https://b2a280254f54221d247516b80821d67c.m.pipedream.net";
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStep(LOADING);
    const res = await axios.post(href, {
      ...form,
      platform: CITY,
    });
    if (res) setStep("SUCCESS");
  };
  const hasErrors = Object.values(errors).some((error) => !!error);
  const hasEmpty = Object.values(form).some((value) => !value);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
      if (params.cookingClass) {
        setForm({
          ...form,
          message:
            "Hello, I would like to have some informations about the cooking class.",
        });
      }
    }
  }, []);
  return (
    <div className="contact-wrapper">
      <div className="contact-form py-20 lg:py-32" id="contact" ref={ref}>
        <h1
          className={`contact-form__title mb-10 lg:mb-20 animation_${
            isOnScreen && "in"
          }`}
          ref={refForAnim}
        >
          Contact
        </h1>
        <form className="contact-form__container " onSubmit={handleSubmit}>
          <div className={`form_row animation_${isOnScreen && "in"}`}>
            <div className="flex flex-col w-full">
              <div className="contact-form__input__wrapper">
                <FaUser />
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  minLength={2}
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`lg:h-20 contact-form__input ${
                    errors["name"] && "invalid"
                  }`}
                />
              </div>
              {errors["name"] && <span>Please insert your name</span>}
            </div>
            <div className="flex flex-col w-full">
              <div className="contact-form__input__wrapper">
                <FaPhone />
                <input
                  id="phone"
                  name="phone"
                  required
                  type="tel"
                  pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
                  placeholder="Your phone"
                  value={form.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`lg:h-20 contact-form__input ${
                    errors["phone"] && "invalid"
                  }`}
                />
              </div>
              {errors["phone"] && (
                <span>Please insert a valid phone number</span>
              )}
            </div>
          </div>
          <div className={`form_row animation_${isOnScreen && "in"}`}>
            <div className="flex flex-col w-full">
              <div className="contact-form__input__wrapper">
                <FaEnvelope />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Your email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`lg:h-20 contact-form__input ${
                    errors["email"] && "invalid"
                  }`}
                />
              </div>
              {errors["email"] && <span>Please insert a valid email</span>}
            </div>
            <div className="flex flex-col w-full">
              <div className="contact-form__input__wrapper date">
                <FaCalendarDay />
                <input
                  id="date"
                  name="date"
                  required
                  type="date"
                  placeholder="Pick a date"
                  value={form.date}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`lg:h-20 contact-form__input ${
                    errors["date"] && "invalid"
                  }`}
                />
              </div>
              {errors["date"] && <span>Please pick a date</span>}
            </div>
          </div>
          <div className="contact-form__input__wrapper">
            <MdLocationOn />
            <input
              id="location"
              name="location"
              type="text"
              required
              placeholder="Location"
              value={form.location}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`lg:h-20 contact-form__input ${
                errors["location"] && "invalid"
              } animation_${isOnScreen && "in"}`}
            />
          </div>
          {errors["location"] && <span>Please insert a location</span>}
          <div className="contact-form__input__wrapper">
            <FaPencilAlt />
            <input
              id="message"
              name="message"
              required
              placeholder="Tell us what you need"
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`lg:h-20 contact-form__input ${
                errors["message"] && "invalid"
              } animation_${isOnScreen && "in"}`}
            />
          </div>
          {errors["message"] && <span>Please leave us a message</span>}
          <div className={`form_row animation_${isOnScreen && "in"}`}>
            <button
              className={`mt-20 cta primary ${step}`}
              disabled={hasErrors || hasEmpty}
            >
              <ProgressStepper step={step} />
            </button>
          </div>
          <i className="disclaimer">
            By sending your message you agree with our{" "}
            <a
              href="https://www.iubenda.com/privacy-policy/88862942"
              className="underline"
            >
              privacy policy
            </a>
          </i>
          <div className="w-full h-20 flex items-center justify-center animate-pulse">
            <div className="px-4 py-2 rounded-sm bg-red-300">
              <h2 className="text-3xl text-whte font-bold">
                20% off on August and September reservations
              </h2>
            </div>
          </div>
        </form>
        {step === SUCCESS && (
          <h2 className="thanks animation_in mt-2">
            Thank you for your message! We will contact you soon.
          </h2>
        )}
      </div>
    </div>
  );
};

export default ContactForm;

const ProgressStepper = ({ step }) => {
  switch (step) {
    case LOADING:
      return (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
    case SUCCESS:
      return (
        <div className="success-checkmark">
          <div className="check-icon">
            <span className="icon-line line-tip"></span>
            <span className="icon-line line-long"></span>
            <div className="icon-circle"></div>
            <div className="icon-fix"></div>
          </div>
        </div>
      );
    case ERROR:
      return "Something went wrong, please try again";

    default:
      return "Send your message";
  }
};
