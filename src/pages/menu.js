import React from "react";
import { NavProvider } from "../context/NavContext";
import "./gallery.scss";
import "./index.scss";
import "tailwindcss/tailwind.css";
import "../styles/colors.scss";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { GatsbySeo } from "gatsby-plugin-next-seo";

// markup
const MenuPage = ({ data }) => {
  return (
    <main className="main flex-wrap">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Private chef Catania menu and wines, take a loot at some of the best dishes that our private chef could prepare for you in your home!"
        />
        <meta
          name="keywords"
          content="menu wines chef cousine kitchen quality seafood chefs foodporn food cheflife gourmet foodphotography foodie foodgasm italy foodlover cooking cucina foodies italianfood sicilianfood foodblog foodstyle kitchen cucinaitaliana fooditaly dinner foods cook restaurant culinary"
        />
        <title>Menu &and; Wines - Private Chef Catania</title>
      </Helmet>
      <GatsbySeo
        title="Menu - Private Chef Catania"
        description="Private chef Catania menu and wines, take a loot at some of the best dishes that our private chef could prepare for you in your home!"
        canonical="https://privatechefcatania.com/menu"
        openGraph={{
          url: "https://privatechefcatania.com/menu",
          title: "Menu - Private Chef Catania",
          description:
            "Private chef Catania menu and wines, take a loot at some of the best dishes that our private chef could prepare for you in your home!",
          images: [
            {
              url: data.contentfulGallery.gallery_images[1].file.url,
              width: 800,
              height: 600,
              alt: "Menu preview",
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
      />
      <NavProvider>
        <Navbar customActiveLink={"menu"} />
        <Menu menu={data.contentfulMenu} />
      </NavProvider>
      <Footer />
    </main>
  );
};

export default MenuPage;

//change this query with menu query

export const query = graphql`
  query MenuQuery {
    contentfulMenu {
      wineTasting {
        name
        description {
          description
        }
      }
      appetizers {
        name
        description {
          description
        }
      }
      barbecue {
        description {
          description
        }
        name
      }
      firstCount {
        name
        description {
          description
        }
      }
      dessert {
        description {
          description
        }
        name
      }
      secondCount {
        description {
          description
        }
        name
      }
      name
    }
  }
`;
