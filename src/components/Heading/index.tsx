import * as React from "react";
import "./index.scss";
import Logo from "/public/static/svg/logo_color_bg_1.svg";

const Heading = () => {
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
    <header className="header w-screen h-screen">
      <Logo
        style={{
          width: "25%",
          height: "25%",
          zIndex: 20000,
          marginBottom: "2.5rem",
        }}
      />
      <h1 className="header__title my-12">
        FOOD &amp; BEVERAGE EXPERIENCE AT <span>HOME</span>
      </h1>
      <div className="flex items-center flex-col justify-center px-6 my-5">
        <h1>
          We will provide the best experiences in your preferred location.
        </h1>
        <div className="flex justify-between my-10">
          <button className="cta mr-10">Contact us</button>
          <button className="cta primary">Sample menu</button>
        </div>
      </div>
    </header>
  );
};

export default Heading;
