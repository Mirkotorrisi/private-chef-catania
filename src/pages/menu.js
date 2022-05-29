import React, { useState } from "react";
import { menu } from "../resources";
import { NavProvider } from "../context/NavContext";
import { FaWindowClose } from "@react-icons/all-files/fa/FaWindowClose";
import "./gallery.scss";
import "./index.scss";
import "tailwindcss/tailwind.css";
import "../styles/colors.scss";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// markup
const GalleryPage = () => {
  return (
    <main className="main flex-wrap">
      <title>Sample Menu - Private Chef Catania</title>
      <NavProvider>
        <Navbar customActiveLink={"menu"} />
        <Menu menu={menu} />
      </NavProvider>
      <Footer />
    </main>
  );
};

export default GalleryPage;

//change this query with menu query

// export const query = graphql`
//   query MyQuery {
//     allGooglePlacesReview {
//       edges {
//         node {
//           author_name
//           rating
//           text
//           profile_photo_url
//         }
//       }
//     }
//   }
// `;
