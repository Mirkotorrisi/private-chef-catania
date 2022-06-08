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
