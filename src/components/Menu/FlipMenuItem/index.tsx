import React from "react";
import { MenuItemProps } from "../consts";
import "./index.scss";
const FlipMenuItem = ({
  menuItem: { image, name, description },
  backgroundImage,
}: MenuItemProps) => {
  return (
    <div className="flip-card my-5" style={{ transform: "rotateX(180deg)" }}>
      <div className="flip-card__inner">
        <div
          className="flip-card__front"
          style={{
            backgroundImage: "url(/images/" + backgroundImage + ".jpg)",
          }}
        >
          <p className="flip-card__description">{description}</p>
        </div>
        <div
          className="flip-card__back"
          style={{ backgroundImage: "url(/images/" + image + ".jpg)" }}
        >
          <h1 className="flip-card__title">{name}</h1>
        </div>
      </div>
    </div>
  );
};
export default FlipMenuItem;
