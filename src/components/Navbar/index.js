import React from "react";
import "./index.scss";
import NavLink from "./NavLink";
import Logo from "/public/static/svg/logo_color_bg_1.svg";
import Logotipo from "/public/static/svg/logotipo.svg";

const Navbar = () => {
  const [menuShow, setMenu] = React.useState(false);
  const showMenu = () => setMenu(!menuShow);

  return (
    <nav className="navbar flex fixed items-center justify-between flex-wrap w-screen px-10 ">
      <NavLink link="/#home">
        <Logo className="navbar__logo hidden lg:inline-block" />
        <Logotipo className="navbar__logo--small lg:hidden" />
      </NavLink>

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
          <NavLink link="/#menu">Sample Menu</NavLink>
          <NavLink link="/#contact">Contact us</NavLink>
          <NavLink link="/#about">About</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
