import * as React from "react";
import { useEffect } from "react";
import "./index.scss";
import Logo from "/public/static/svg/logo_color_bg_1.svg";

let opacity: number;
const Heading = ({ index }: { index: number }) => {
  useEffect(() => {
    (opacity = window.innerHeight / index - 0.3), [];
  });
  const resources = [
    "basket",
    "battuta",
    "filetto",
    "fire",
    "fusione",
    "gambero",
    "landscape",
    "lemon",
    "location",
    "mozzarella",
    "nebrodi",
    "pitrudda",
    "salmon",
    "squid",
    "tomatoes",
  ];

  return (
    <header className="header w-screen h-screen" style={{ opacity }}>
      <div className="fadecycle">
        {resources.map((img) => (
          <div
            style={{ backgroundImage: "url(/images/" + img + ".jpg)" }}
            className="header__image w-screen h-screen"
          />
        ))}
      </div>
      <div
        className="header__wrapper w-screen h-screen"
        style={{ overflow: "hidden", position: "fixed" }}
      >
        <nav className="menu navbar">
          <ul className="navbar__list">
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#menu">Contact</a>
            </li>
            <li>
              <a href="#menu">About me</a>
            </li>
            <li>
              <a href="#menu">Reviews</a>
            </li>
          </ul>
        </nav>
        <Logo
          style={{
            width: "50%",
            height: "50%",
            transform: `scale(${index !== 0 ? index * 0.5 : 1})`,
          }}
        />
      </div>
    </header>
  );
};

export default Heading;
