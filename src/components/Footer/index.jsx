import * as React from "react";
import {
  PHONE_NUMBER,
  GOOGLE,
  FACEBOOK,
  WHATSAPP,
  INSTAGRAM,
  EMAIL,
} from "../../resources/index";
import "./index.scss";

import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";

const Footer = () => (
  <div className="footer py-10">
    <div className="footer__columns flex justify-between align-center lg:w-1/2  m-auto ">
      <a href={GOOGLE}>
        <i className="fab fa-google" />
        <FaGoogle />
      </a>

      <a href={PHONE_NUMBER}>
        <FaPhoneAlt />
      </a>

      <a href={EMAIL}>
        <FaEnvelope />
      </a>
      <a href={WHATSAPP}>
        <FaWhatsapp />
      </a>
      <a href={FACEBOOK}>
        <FaFacebook />
      </a>
      <a href={INSTAGRAM}>
        <FaInstagram />
      </a>
    </div>
    <div className="footer__credits mt-10 pt-10">
      <p>Private Chef Catania</p>
      <p>P.Iva 05941450875</p>
      <p>Via duca degli abruzzi 163, 95030, S. G. La Punta CT</p>
      <a
        href="https://www.iubenda.com/privacy-policy/88862942"
        className="privacyPolicy"
      >
        Privacy policy
      </a>
      <p className="mt-10">
        Developed by
        <a href="https://www.linkedin.com/in/mirko-torrisi/"> Mirko Torrisi</a>
      </p>
    </div>
  </div>
);

export default Footer;
