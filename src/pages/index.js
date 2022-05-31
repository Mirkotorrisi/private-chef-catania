import * as React from "react";
import Heading from "../components/Heading";
import ChooseUs from "../components/ChooseUs";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import About from "../components/About";
import { NavProvider } from "../context/NavContext";

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

          <ChooseUs
            allGooglePlacesReview={data.allGooglePlacesReview}
            contentfulDescrizioneInizialeSottoIlVideo={
              data.contentfulDescrizioneInizialeSottoIlVideo
            }
          />
          <ContactForm />
          <About contentfulBiografiaDiFabio={data.contentfulBiografiaDiFabio} />
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
          rating
          relative_time_description
          text
          author_url
          author_name
          profile_photo_url
        }
      }
    }

    contentfulDescrizioneInizialeSottoIlVideo {
      first_description {
        first_description
      }
      second_description {
        second_description
      }
    }
    contentfulBiografiaDiFabio {
      bio {
        bio
      }
      bio_picture {
        file {
          url
        }
      }
    }
  }
`;
