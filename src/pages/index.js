import * as React from "react";
import Heading from "../components/Heading";
import ChooseUs from "../components/ChooseUs";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import About from "../components/About";
import { NavProvider } from "../context/NavContext";

import { Helmet } from "react-helmet";
import "./index.scss";
import "tailwindcss/tailwind.css";
import "../styles/colors.scss";
import Navbar from "../components/Navbar";
import { graphql } from "gatsby";

// markup
const IndexPage = ({ data }) => {
  return (
    <main className="main flex-wrap">
      <title>Private Chef Catania</title>
      <NavProvider>
        <div style={{ zIndex: 1000 }}>
          <Navbar />
          <Heading />

          <ChooseUs data={data} />
          <ContactForm />
          <About />
          <Footer />
        </div>
      </NavProvider>
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query MyQuery {
    allGooglePlacesReview {
      edges {
        node {
          author_name
          rating
          text
          profile_photo_url
        }
      }
    }
  }
`;
