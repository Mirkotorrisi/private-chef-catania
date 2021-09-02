import * as React from "react";
import { useState, useEffect } from "react";
import Heading from "../components/Heading";
import ContactForm from "../components/ContactForm";
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
  const scroll = useScroll();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    scroll.y > 0 && index < 20 && setIndex((i) => i + 1);
  }, [scroll]);
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
      {index <= 10 && <Heading index={index} />}
      {index > 10 && (
        <div className="main__container grid">
          {/* <Menu menu={menu} /> */}
          <ContactForm />
          <About />
          <Footer />
        </div>
      )}
    </main>
  );
};

export default IndexPage;
