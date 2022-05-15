import * as React from "react";
import { useMemo, useState } from "react";
import { MenuItem } from "./MenuItem/index";
import "./index.scss";
import { MenuItemI, MenuProps } from "./consts";
import FlipMenuItem from "./FlipMenuItem/index";

const Menu = ({ menu }: MenuProps) => {
  const menuItemsMemo = useMemo(
    () =>
      menu.map(({ image, name, description }: MenuItemI) => (
        <MenuItem image={image} name={name} description={description} />
      )),
    []
  );
  return (
    <div className="menu_container pb-44" id="menu">
      <h1 className="menu__title mt-20 mb-20">Sample Winter Menu</h1>

      <ul className="menu">{menuItemsMemo}</ul>
      <button className="cta mt-12">Contact us</button>
    </div>
  );
};

export default Menu;
