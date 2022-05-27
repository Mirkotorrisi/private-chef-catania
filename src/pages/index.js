import * as React from "react";
import Heading from "../components/Heading";
import ChooseUs from "../components/ChooseUs";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import About from "../components/About";
import { NavProvider } from "../context/NavContext";
import { menu } from "../resources";
import { Helmet } from "react-helmet";
import "./index.scss";
import "tailwindcss/tailwind.css";
import "../styles/colors.scss";
import Navbar from "../components/Navbar";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectFade, Autoplay, Pagination } from "swiper";

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
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        className="fadeSwiper"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={2000}
        loop={true}
        modules={[EffectFade, Autoplay]}
      >
        {menu.map(({ image }) => (
          <SwiperSlide key={image}>
            <img src={`/images/${image}.jpg`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <NavProvider>
        <div style={{ zIndex: 1000 }}>
          <Navbar />
          <Heading />

          <ChooseUs />
          <Menu menu={menu} />
          <ContactForm />
          <About />
          <Footer />
        </div>
      </NavProvider>
    </main>
  );
};

export default IndexPage;
