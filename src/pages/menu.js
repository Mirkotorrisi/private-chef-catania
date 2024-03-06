import { graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import "tailwindcss/tailwind.css";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import { NavProvider } from "../context/NavContext";
import { uppercaseCity } from "../resources";
import "../styles/colors.scss";
import "./gallery.scss";
import "./index.scss";
// markup
const MenuPage = ({ data }) => {
  return (
    <main className="main flex-wrap">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={`Private chef ${uppercaseCity} menu and wines, take a look at some of the best dishes that our private chef could prepare for you in your home!`}
        />
        <meta
          name="keywords"
          content="menu wines chef cousine kitchen quality seafood chefs foodporn food cheflife gourmet foodphotography foodie foodgasm italy foodlover cooking cucina foodies italianfood sicilianfood foodblog foodstyle kitchen cucinaitaliana fooditaly dinner foods cook restaurant culinary"
        />
        <title>Menu and Wines - Private Chef {uppercaseCity}</title>
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
