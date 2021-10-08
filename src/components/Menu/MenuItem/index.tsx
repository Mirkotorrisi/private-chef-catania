import * as React from "react";
import { MenuItemI } from "../consts";
import "./index.scss";

export const MenuItem = ({ image, name, description }: MenuItemI) => (
  <li className="menu-item__container my-5" key="name">
    <div className={"menu-item__image  "}>
      <div className={"sliding-container"}>
        <h3 className="menu-item__name">{name}</h3>
        <p className="menu-item__description">{description}</p>
      </div>
    </div>
  </li>
);
