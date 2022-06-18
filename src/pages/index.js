import * as React from "react";
import Heading from "../components/Heading";
import ChooseUs from "../components/ChooseUs";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import About from "../components/About";
import { NavProvider } from "../context/NavContext";
import { PHONE_NUMBER_CLEAN } from "../resources";
import "./index.scss";
import "tailwindcss/tailwind.css";
import "../styles/colors.scss";
import Navbar from "../components/Navbar";
import { graphql } from "gatsby";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import { Helmet } from "react-helmet";
import { helmetJsonLdProp } from "react-schemaorg";
import battuta from "../../public/images/battuta.jpg";
import basket from "../../public/images/basket.jpg";
import pitrudda from "../../public/images/pitrudda.jpg";
// markup
const IndexPage = ({ data }) => {
  const reviewCount = data.allGooglePlacesReview.edges.length;
  const ratingValue = data.googlePlacesPlace.rating;
  const ratingCount = data.googlePlacesPlace.user_ratings_total;
  const { author_name, rating, text } =
    data.allGooglePlacesReview.edges[0].node;
  const snippet = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    image: [basket, pitrudda, battuta],
    name: "Private Chef Catania",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Sicily",
      addressLocality: "Catania",
      addressCountry: "Italy",
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: rating,
        bestRating: "5",
      },
      name: text,
      author: {
        "@type": "Person",
        name: author_name,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      ratingCount,
      reviewCount,
    },
    url: "http://www.privatechefcatania.com",
    telephone: PHONE_NUMBER_CLEAN,
    servesCuisine: "Sicilian, Gourmet, Italian, European",
    menu: "http://www.privatechefcatania.com/menu",
    acceptsReservations: "True",
  };
  const script = helmetJsonLdProp(snippet);
  return (
    <main className="main flex-wrap">
      <Helmet script={[script]}>
        <meta charSet="utf-8" />
        <meta lang="en-GB" />
        <meta
          name="description"
          content="Private chef Catania, your private chef at home. We deliver food and beverage experience in your preferred location. Cooking class, wine tasting, catering. Your home chef in Sicily. Restaurant at home."
        />

        <meta
          name="keywords"
          content="food wine beverage experience taste chef cooking restaurant private cook homechef homerestaurant sommelier cousine kitchen quality seafood chefs foodporn food cheflife gourmet foodphotography foodie foodgasm italy foodlover cooking cucina foodies italianfood sicilianfood foodblog foodstyle kitchen cucinaitaliana fooditaly dinner foods cook restaurant culinary"
        />
        <title>Private Chef Catania - Your personal chef</title>
      </Helmet>
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
    googlePlacesPlace {
      rating
      user_ratings_total
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
