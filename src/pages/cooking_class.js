import { graphql } from "gatsby";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import React from "react";
import { Helmet } from "react-helmet";
import "tailwindcss/tailwind.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { NavProvider } from "../context/NavContext";
import { CITY, uppercaseCity } from "../resources";
import "../styles/colors.scss";
import "./gallery.scss";
import "./index.scss";
// markup
const CookingClassPage = ({ data }) => {
  const {
    contentfulCoockingClassSection: { description, image },
  } = data;
  return (
    <main className="main flex-wrap">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Cooking lessons from a high experienced chef. Learn to cook the most advanced gourmet dishes."
        />
        <meta
          name="keywords"
          content="cooking class lessons chef teacher cousine kitchen quality seafood chefs foodporn food cheflife gourmet foodphotography foodie foodgasm italy foodlover cooking cucina foodies italianfood sicilianfood foodblog foodstyle kitchen cucinaitaliana fooditaly dinner foods cook restaurant culinary"
        />
        <title>Cooking Class - Private Chef {uppercaseCity}</title>
      </Helmet>
      <GatsbySeo
        title={`Cooking Class - Private Chef ${uppercaseCity}`}
        description="Cooking lessons from a high experienced chef. Learn to cook the most advanced gourmet dishes."
        canonical={`https://privatechef${CITY}.com/cooking_class`}
        openGraph={{
          url: `https://privatechef${CITY}.com/cooking_class`,
          title: `Cooking Class - Private Chef ${uppercaseCity}`,
          description:
            "Cooking lessons from a high experienced chef. Learn to cook the most advanced gourmet dishes.",
          images: [
            {
              url: image[0].file.url,
              width: 800,
              height: 600,
              alt: "Cooking class preview",
            },
          ],
          locale: "en_GB",
          language: "en",
          site_name: `Private Chef ${uppercaseCity}`,
        }}
        twitter={{
          handle: "@handle",
          site: "@privatechefcatania",
          cardType: "summary_large_image",
        }}
      />
      <NavProvider>
        <Navbar customActiveLink={"cooking_class"} />
        <h1 className="gallery__title mt-20 lg:mt-44" id="cooking_class">
          Cooking Class
        </h1>
        <div className="flex flex-col lg:flex-row justify-between px-5 lg:px-44 mt-5 lg:mt-20">
          <p>{description.description}</p>
          <img
            src={image[0].file.url}
            className="max-w-lg mt-5 lg:mt-0 lg:ml-20"
            alt="our cooking class"
          />
        </div>
        <div className="flex justify-center">
          <a href="/?cookingClass=true#contact" className="my-20">
            <button className="cta primary">Reserve now</button>
          </a>
        </div>
      </NavProvider>
      <Footer />
    </main>
  );
};

export default CookingClassPage;

export const query = graphql`
  query CookingClassQuery {
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
