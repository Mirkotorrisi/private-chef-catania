import * as React from "react";
import { useMemo } from "react";
import { MenuItem } from "./MenuItem/index";
import "./index.scss";
import { useNav } from "../../hooks/useNav";
import { useOnScreen } from "../../hooks/useOnScreen";

const Menu = ({ menu }) => {
  const ref = useNav("/#menu");
  const isOnScreen = useOnScreen(ref);
  const GenerateDishes = ({ category }) =>
    useMemo(
      () =>
        category?.map(({ name, description }, index) => (
          <MenuItem
            name={name}
            description={description.description}
            key={`${index}${name}`}
          />
        )),
      []
    );
  const GenerateSection = ({ category, categoryName }) =>
    category?.length ? (
      <>
        <h2 className="menu-category__title mb-10 mt-5">{categoryName}</h2>
        <GenerateDishes category={category} />
      </>
    ) : null;
  return (
    <div className="menu_container " id="menu" ref={ref}>
      <h1 className={`menu__title mt-44 mb-20 animation_${isOnScreen && "in"}`}>
        Sample Winter Menu
      </h1>
      <ul className="menu">
        <GenerateSection category={menu.appetizers} categoryName="Appetizers" />
        <GenerateSection
          category={menu.firstCount}
          categoryName="First Count"
        />
        <GenerateSection
          category={menu.secondCount}
          categoryName="Second Count"
        />
        <GenerateSection category={menu.barbecue} categoryName="Barbecue" />
        <GenerateSection category={menu.desserts} categoryName="Desserts" />
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
