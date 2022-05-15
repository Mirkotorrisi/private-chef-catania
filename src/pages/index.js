import * as React from "react";
import Heading from "../components/Heading";
import ChooseUs from "../components/ChooseUs";
import ContactForm from "../components/ContactForm";
import Logo from "/public/static/svg/logowhite_notext.svg";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import About from "../components/About";
import { useScroll } from "../hooks/useScroll";
import { menu } from "../resources";
import { Helmet } from "react-helmet";
import "./index.scss";
import "tailwindcss/tailwind.css";
import "../styles/colors.scss";
// markup
const IndexPage = () => {
  return (
    <main className="main flex-wrap">
      <title>Private Chef Catania</title>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossorigin="anonymous"
        />
      </Helmet>
      <nav className="navbar flex fixed items-center justify-between flex-wrap w-screen p-3 lg:px-60">
        <div className="flex-shrink-0 ml-3">
          <Logo
            style={{
              width: "20%",
              height: "20%",
            }}
          />
        </div>
        <div className="flex align-center lg:hidden">
          <button className="mr-10">
            <div id="hamburger" className={"hamburglar is-closed"}>
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
          className={
            "w-full ml-6 block flex-grow lg:flex lg:items-right lg:w-auto h-0"
          }
        >
          <div className="flex items-center justify-between lg:flex-grow w-full">
            <a href="#menu" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
              Menu
            </a>
            <a href="#contact" class="block mt-4 lg:inline-block lg:mt-0">
              Contact
            </a>
            <a href="#about" class="block mt-4 lg:inline-block lg:mt-0 mr-4">
              About me
            </a>
          </div>
        </div>
      </nav>
      <Heading />

      <ChooseUs />
      <Menu menu={menu} />
      <ContactForm />
      <About />
      <Footer />
    </main>
  );
};

export default IndexPage;
