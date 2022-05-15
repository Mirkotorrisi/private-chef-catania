import * as React from "react";
import { useRef, useState } from "react";
import { PHONE_NUMBER } from "../../resources/index";
import "./index.scss";
import { useEffect } from "react";

const ContactForm = () => {
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
  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.validity);
    setErrors({
      ...errors,
      [e.target.name]: !e.target.validity.valid,
    });
  };

  const href = "";

  return (
    <div className="contact-form lg:mt-22 pb-22" id="contact">
      <h1 className="contact-form__title mt-20 mb-20">Contact</h1>
      <form
        className="contact-form__container"
        onSubmit={(e) => console.log(e)}
      >
        <div className="form_row">
          <div className="flex flex-col w-full">
            <input
              id="name"
              name="name"
              placeholder="Your name"
              minLength={2}
              value={form.name}
              onChange={handleChange}
              className={`contact-form__input ${errors["name"] && "invalid"}`}
              onError={(e) => console.log(e)}
            />
            {errors["name"] && <span>Min length is 2 letters</span>}
          </div>
          <div className="flex flex-col w-full">
            <input
              id="phone"
              name="phone"
              pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
              placeholder="Your phone"
              value={form.phone}
              onChange={handleChange}
              className={`contact-form__input ${errors["phone"] && "invalid"}`}
              onError={(e) => console.log(e)}
            />
            {errors["phone"] && <span>Please insert a valid phone number</span>}
          </div>
        </div>
        <div className="form_row">
          <div className="flex flex-col w-full">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              className={`contact-form__input ${errors["email"] && "invalid"}`}
              onError={(e) => console.log(e)}
            />
            {errors["email"] && <span>Please insert a valid email</span>}
          </div>
          <div className="flex flex-col w-full">
            <input
              id="date"
              name="date"
              type="date"
              placeholder="Pick a date"
              value={form.date}
              onChange={handleChange}
              className={`contact-form__input ${errors["date"] && "invalid"}`}
            />
            {errors["date"] && <span>Please pick a date</span>}
          </div>
        </div>
        <input
          id="location"
          name="location"
          type="text"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className={`contact-form__input ${errors["location"] && "invalid"}`}
        />
        {errors["location"] && <span>Please insert a location</span>}

        <textarea
          id="message"
          name="message"
          required
          placeholder="Tell us what you need"
          value={form.message}
          onChange={handleChange}
          className={`contact-form__input ${errors["message"] && "invalid"}`}
        />
        {errors["message"] && <span>Please leave us a message</span>}

        <input type="submit" className="cta" value="Send your message" />
      </form>
    </div>
  );
};

export default ContactForm;
