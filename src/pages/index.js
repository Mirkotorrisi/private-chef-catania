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
import pitrudda from "../../public/images/pitrudda.jpg";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import { Helmet } from "react-helmet";
// markup
const IndexPage = ({ data }) => {
  return (
    <main className="main flex-wrap">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Private chef Catania, your private chef at home. We deliver food and beverage experience in your preferred location. Cooking class, wine tasting, catering. Your home chef in Sicily. Restaurant at home."
        />
        <meta name="google-site-verification" content="" />
        <meta
          name="keywords"
          content="food wine beverage experience taste chef cooking restaurant private cook homechef homerestaurant sommelier cousine kitchen quality seafood chefs foodporn food cheflife gourmet foodphotography foodie foodgasm italy foodlover cooking cucina foodies italianfood sicilianfood foodblog foodstyle kitchen cucinaitaliana fooditaly dinner foods cook restaurant culinary"
        />
        <title>Private Chef Catania - Your personal chef</title>
      </Helmet>
      {/* <GatsbySeo
        title="Private Chef Catania - Your personal chef"
        description="Private chef based in Sicily, gourmet dinners at home. Food and beverage experience at home. Wine Tasting, cooking class."
        canonical="https://privatechefcatania.come/"
        openGraph={{
          url: "https://privatechefcatania.come",
          title: "Private Chef Catania - Your personal chef",
          description:
            "Private chef based in Sicily, gourmet dinners at home. Food and beverage experience at home. Wine Tasting, cooking class.",
          images: [
            {
              url: pitrudda,
              width: 800,
              height: 600,
              alt: "Pitrudda da Trizza - Appetizer",
            },
          ],
          locale: "en_GB",
          language: "en",
          site_name: "Private Chef Catania",
        }}
        twitter={{
          handle: "@handle",
          site: "@privatechefcatania",
          cardType: "summary_large_image",
        }}
      /> */}
      <NavProvider>
        <div style={{ zIndex: 1000 }}>
          <Navbar />
          <Heading />

          <ChooseUs
            allGooglePlacesReview={data.allGooglePlacesReview}
            contentfulDescrizioneInizialeSottoIlVideo={
              data.contentfulDescrizioneInizialeSottoIlVideo
            }
            imageForReviews={
              data.contentfulRecensioniImmagineAccantoLeRecensioni.reviews_image
                .file.url
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
    contentfulRecensioniImmagineAccantoLeRecensioni {
      reviews_image {
        file {
          url
        }
      }
    }
  }
`;
