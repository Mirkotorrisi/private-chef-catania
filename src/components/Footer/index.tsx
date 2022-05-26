import * as React from "react";
import {
  PHONE_NUMBER,
  GOOGLE_URL,
  TAKE_A_CHEF_URL,
  FACEBOOK_URL,
} from "../../resources/index";
import TakeAChef from "../../../public/static/svg/take_chef.svg";
import "./index.scss";

const Footer = () => (
  <div className="footer py-10">
    <div className="footer__columns flex-col xl:flex-row">
      <div className="footer__column">
        <a href={GOOGLE_URL}>
          <i className="fab fa-google" />
          <p>Google Reviews</p>
        </a>
      </div>
      <div className="footer__column">
        <a href={"tel:" + PHONE_NUMBER}>
          <i className="fas fa-phone"></i> <p>{PHONE_NUMBER}</p>
        </a>
      </div>
      <div className="footer__column">
        <a href={TAKE_A_CHEF_URL}>
          <TakeAChef
            style={{ backgroundColor: "#fff", padding: "10px", width: "10rem" }}
          />
        </a>
      </div>
      <div className="footer__column">
        <a href={FACEBOOK_URL}>
          <i className="fab fa-facebook" />

          <p>PrivateChefCatania</p>
        </a>
      </div>
    </div>
    <div className="footer__credits mt-10 pt-10">
      <p>Private Chef Catania</p>
      <p>P.Iva 1234567890</p>
      <p>Via duca degli abruzzi 19, 95030, S. G. La Punta CT</p>
      <p className="mt-10">WebSite from Mirko Torrisi</p>
    </div>
  </div>
);

export default Footer;
