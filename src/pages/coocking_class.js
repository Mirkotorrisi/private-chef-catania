import React from "react";
import { graphql } from "gatsby";
import { NavProvider } from "../context/NavContext";
import "./gallery.scss";
import "./index.scss";
import "tailwindcss/tailwind.css";
import "../styles/colors.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// markup
const CoockingClassPage = ({ data }) => {
  const {
    contentfulCoockingClassSection: { description, image },
  } = data;
  return (
    <main className="main flex-wrap">
      <title>Coocking Class - Private Chef Catania</title>
      <NavProvider>
        <Navbar customActiveLink={"coocking_class"} />
        <h1 className="gallery__title mt-44" id="coocking_class">
          Coocking Class
        </h1>
        <div className="flex flex-column lg:flex-row justify-between lg:px-44 mt-20">
          <p className="coockingClass_desc">{description.description}</p>
          <img
            src={image[0].file.url}
            className="coockingClass_image lg:ml-20"
            alt="our coocking class"
          />
        </div>
        <div className="flex justify-center">
          <a href="/?coockingClass=true#contact" className="my-20">
            <button className="cta primary">Reserve now</button>
          </a>
        </div>
      </NavProvider>
      <Footer />
    </main>
  );
};

export default CoockingClassPage;

export const query = graphql`
  query CoockingClassQuery {
    contentfulCoockingClassSection {
      description {
        description
      }
      image {
        file {
          url
        }
      }
    }
  }
`;
