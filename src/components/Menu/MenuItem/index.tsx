import * as React from "react";
import { MenuItemProps } from "../consts";
import "./index.scss";

export const MenuItem = ({
  menuItem: { image, name, description },
  backgroundImage,
}: MenuItemProps) => (
  <li
    className="menu-item__container my-5"
    style={{ backgroundImage: "url(/images/" + image + ".jpg)" }}
    key="name"
  >
    <div className={"menu-item__image  "}>
      <div className={"sliding-container"}>
        <h3 className="menu-item__name">{name}</h3>
        <p className="menu-item__description">{description}</p>
      </div>
    </div>
  </li>
);
