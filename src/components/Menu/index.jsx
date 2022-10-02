import React, { useState } from "react";
import { MenuItem } from "./MenuItem/index";
import "./index.scss";
import { useNav } from "../../hooks/useNav";
import { useOnScreen } from "../../hooks/useOnScreen";

const Menu = ({ menu }) => {
  console.log("🚀 ~ file: index.jsx ~ line 8 ~ Menu ~ menu", menu);
  const ref = useNav("/#menu");
  const isOnScreen = useOnScreen(ref);
  const [selected, setSelected] = useState({
    menu: menu.appetizers,
    name: "Appetizers",
  });
  const [opacity, setOpacity] = useState(1);

  const handleSelected = ({ menu, name }) => {
    setOpacity(0);
    setSelected({ menu, name });
    setOpacity(1);
  };
  return (
    <div className="menu_container " id="menu" ref={ref}>
      <h1 className={`menu__title mt-44 mb-20 animation_${isOnScreen && "in"}`}>
        {menu.name}
      </h1>
      <ul className="flex justify-between w-9/12 lg:w-1/2 overflow-x-scroll mb-5">
        {[
          { menu: menu.appetizers, name: "Sicilian Food Experience" },
          { menu: menu.firstCount, name: "Italian Food Experience" },
          { menu: menu.secondCount, name: "World Food Experience" },
          // { menu: menu.wineTasting, name: "Wine tasting" },
        ].map(({ menu, name }) => (
          <li>
            <button
              className={`menu__selectors mr-3 ${
                selected.name === name && "selected"
              }`}
              onClick={() => handleSelected({ menu, name })}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
      <ul className={`menu `}>
        <div style={{ opacity, transition: "all 1s" }}>
          {selected?.menu?.map(({ name, description }, index) => (
            <MenuItem
              name={name}
              description={description?.description}
              key={`${index}${name}`}
            />
          ))}
        </div>
      </ul>
      <div className="flex justify-center">
        <a href="/#contact" className="my-20">
          <button className="cta ">Reserve now</button>
        </a>
      </div>
    </div>
  );
};

export default Menu;
