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
        <MenuItem image={image} name={name} description={description} />
      )),
    []
  );
  return (
    <div className="menu_container pb-44" id="menu" ref={ref}>
      <h1 className={`menu__title mt-20 mb-20 animation_${isOnScreen && "in"}`}>
        Sample Winter Menu
      </h1>

      <ul className="menu">{menuItemsMemo}</ul>
      <button className="cta mt-12">Contact us</button>
    </div>
  );
};

export default Menu;
