import * as React from "react";
import { useEffect, useMemo, useState } from "react";
import { MenuItem } from "./MenuItem/index";
import Lemon from "../../svg/lemon_bg.svg";
import "./index.scss";
import { MenuProps } from "./consts";
import useWindowSize from "../../hooks/useWindowSize";
import FlipMenuItem from "./FlipMenuItem/index";

const Menu = ({ menu }: MenuProps) => {
  const { innerWidth } = useWindowSize();
  const bgArray = ["lemon_bg", "onion_bg", "salmon_bg"];
  const menuItemsMemo = useMemo(
    () =>
      Object.entries(menu).map(([section, menuItems]) => (
        <>
          <h2 className="menu__section__title">{section}</h2>
          {menuItems.map((menuItem: any, index: number) =>
            innerWidth >= 720 ? (
              <MenuItem menuItem={menuItem} backgroundImage={bgArray[index]} />
            ) : (
              <FlipMenuItem
                menuItem={menuItem}
                backgroundImage={bgArray[index]}
              />
            )
          )}
        </>
      )),
    [innerWidth]
  );
  return (
    <div className="menu__container fade-in-bck">
      <h1 className="menu__title">Il mio menu invernale</h1>
      <ul className="menu">{menuItemsMemo}</ul>
    </div>
  );
};

export default Menu;
