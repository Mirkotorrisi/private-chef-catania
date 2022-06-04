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

// markup
const MenuPage = ({ data }) => {
  return (
    <main className="main flex-wrap">
      <title>Sample Menu - Private Chef Catania</title>
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
      barbecue {
        description {
          description
        }
        name
      }
      appetizers {
        description {
          description
        }
        name
      }
      dessert {
        description {
          description
        }
        name
      }
      firstCount {
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
    }
  }
`;
