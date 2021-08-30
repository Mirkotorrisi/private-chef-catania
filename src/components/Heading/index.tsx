import * as React from "react";
import { useEffect, useState } from "react";
import "./index.scss";
import Logo from "/public/static/svg/logo_color_bg_1.svg";
const Heading = ({ index }: { index: number }) => {
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
    <header className="header w-screen h-screen" style={{ opacity: 1 / index }}>
      <div className="fadecycle">
        {resources.map((img) => (
          <div
            style={{ backgroundImage: "url(/images/" + img + ".jpg)" }}
            className="header__image w-screen h-screen"
          />
        ))}
      </div>
      <div className="header__wrapper w-screen h-screen">
        <Logo
          style={{
            width: "50%",
            height: "50%",
            transform: `scale(${index !== 0 ? index : 1})`,
          }}
        />
      </div>
    </header>
  );
};

export default Heading;
