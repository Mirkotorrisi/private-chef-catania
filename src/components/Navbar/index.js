import React from "react";
import "./index.scss";
import NavLink from "./NavLink";
import Logo from "/public/static/svg/logo_black_1.svg";
import ColoredLogo from "/public/static/svg/logo_color_bg_1.svg";
import Logotipo from "/public/static/svg/logotipo.svg";
import { NavContext } from "../../context/NavContext";

const Navbar = ({ customActiveLink }) => {
  const [menuShow, setMenu] = React.useState(false);
  const [logoHover, setLogoHover] = React.useState(false);
  const showMenu = () => setMenu(!menuShow);
  const { activeNavLinkId } = React.useContext(NavContext);
  const shouldHaveBg =
    activeNavLinkId !== "/#home" && customActiveLink !== "menu";
  return (
    <nav
      className={`navbar flex fixed items-center justify-between flex-wrap w-screen px-10 ${
        shouldHaveBg && "background"
      }`}
    >
      <div
        onMouseEnter={() => setLogoHover(true)}
        onMouseLeave={() => setLogoHover(false)}
      >
        <NavLink link="/">
          {logoHover ? (
            <ColoredLogo
              className="navbar__logo hidden lg:inline-block"
              alt="logo"
            />
          ) : (
            <Logo className="navbar__logo hidden lg:inline-block" alt="logo" />
          )}{" "}
          <Logotipo className="navbar__logo--small lg:hidden" alt="logo" />
        </NavLink>
      </div>
      <div className="flex align-center justify-between lg:hidden">
        <button aria-label="menu" className="mr-10 w-0" onClick={showMenu}>
          <div
            id="hamburger"
            className={"hamburglar " + (menuShow ? "is-open" : "is-closed")}
          >
            <div className="burger-icon">
              <div className="burger-container">
                <span className="burger-bun-top"></span>
                <span className="burger-filling"></span>
                <span className="burger-bun-bot"></span>
              </div>
            </div>

            <div className="path-burger">
              <div className="animate-path"></div>
            </div>
          </div>
        </button>
      </div>
      <div
        className={`w-full block lg:flex lg:items-right lg:w-auto ${
          menuShow ? "" : "h-0"
        } lg:h-full`}
      >
        <div
          className={` ${
            !menuShow ? "hidden" : ""
          } lg:flex flex-col lg:flex-row  mt-5 lg:mt-0 lg:px-36`}
        >
          <NavLink customActive={customActiveLink === "menu"} link="/menu">
            Menu & Wines
          </NavLink>
          <NavLink link="/#contact">Reserve now</NavLink>
          <NavLink link="/#about">About</NavLink>
          <NavLink
            customActive={customActiveLink === "gallery"}
            link="/gallery"
          >
            Gallery
          </NavLink>
          <NavLink
            customActive={customActiveLink === "cooking_class"}
            link="/cooking_class"
          >
            Cooking class
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
