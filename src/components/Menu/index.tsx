import * as React from "react";
import { useMemo, useState } from "react";
import { MenuItem } from "./MenuItem/index";
import "./index.scss";
import { MenuItemI, MenuProps } from "./consts";
import FlipMenuItem from "./FlipMenuItem/index";

const Menu = ({ menu }: MenuProps) => {
  const innerWidth = typeof window !== "undefined" && window.innerWidth;
  const menuItemsMemo = useMemo(
    () =>
      menu.map(({ image, name, description }: MenuItemI) =>
        innerWidth >= 720 ? (
          <MenuItem image={image} name={name} description={description} />
        ) : (
          <FlipMenuItem image={image} name={name} description={description} />
        )
      ),
    [innerWidth]
  );
  return (
    <div className="menu__container fade-in-bck" id="menu">
      <h2 className="menu__section__title">Menu invernale</h2>

      <ul className="menu">{menuItemsMemo}</ul>
    </div>
  );
};

export default Menu;
