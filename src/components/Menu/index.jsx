import * as React from "react";
import { useMemo } from "react";
import { MenuItem } from "./MenuItem/index";
import "./index.scss";
import { useNav } from "../../hooks/useNav";
import { useOnScreen } from "../../hooks/useOnScreen";

const Menu = ({ menu }) => {
  const ref = useNav("/#menu");
  const isOnScreen = useOnScreen(ref);
  const menuItemsMemo = useMemo(
    () =>
      menu.map(({ image, name, description }) => (
        <MenuItem
          image={image}
          name={name}
          description={description}
          key={`${image}menuItem`}
        />
      )),
    []
  );
  return (
    <div className="menu_container " id="menu" ref={ref}>
      <h1 className={`menu__title mt-44 mb-20 animation_${isOnScreen && "in"}`}>
        Sample Winter Menu
      </h1>

      <ul className="menu">{menuItemsMemo}</ul>
      <div className="flex justify-center">
        <a href="/#contact" className="my-20">
          <button className="cta primary">Contact us</button>
        </a>
      </div>
    </div>
  );
};

export default Menu;
