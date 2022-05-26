import React, { useRef } from "react";
import { MenuItemI } from "../consts";
import "./index.scss";
import { useOnScreen } from "../../../hooks/useOnScreen";

export const MenuItem = ({ image, name, description }) => {
  const ref = useRef();
  const isOnScreen = useOnScreen(ref);

  return (
    <li
      className={`menu-item__container my-5 animation_${isOnScreen && "in"}`}
      key="name"
      ref={ref}
    >
      <div className={"menu-item__image  "}>
        <div className={"sliding-container"}>
          <h3 className="menu-item__name">{name}</h3>
          <p className="menu-item__description">{description}</p>
        </div>
      </div>
    </li>
  );
};
