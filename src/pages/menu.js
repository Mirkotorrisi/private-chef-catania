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
// markup
const MenuPage = ({ data }) => {
  return (
    <main className="main flex-wrap">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Private chef Catania menu and wines, take a look at some of the best dishes that our private chef could prepare for you in your home!"
        />
        <meta
          name="keywords"
          content="menu wines chef cousine kitchen quality seafood chefs foodporn food cheflife gourmet foodphotography foodie foodgasm italy foodlover cooking cucina foodies italianfood sicilianfood foodblog foodstyle kitchen cucinaitaliana fooditaly dinner foods cook restaurant culinary"
        />
        <title>Menu and Wines - Private Chef Catania</title>
      </Helmet>
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
      appetizers {
        name
        description {
          description
        }
      }
      firstCount {
        name
        description {
          description
        }
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
