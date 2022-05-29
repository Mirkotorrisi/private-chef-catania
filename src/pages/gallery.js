import React, { useState } from "react";
import { menu } from "../resources";
import { NavProvider } from "../context/NavContext";
import { FaWindowClose } from "@react-icons/all-files/fa/FaWindowClose";
import "./gallery.scss";
import "./index.scss";
import "tailwindcss/tailwind.css";
import "../styles/colors.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// markup
const GalleryPage = () => {
  const [selectedImage, setselectedImage] = useState();
  const closeModal = () => {
    setselectedImage(undefined);
  };

  return (
    <main className="main flex-wrap">
      <title>Gallery - Private Chef Catania</title>
      <NavProvider>
        <Navbar customActiveLink={"gallery"} />
        <h1 className="gallery__title mt-44" id="gallery">
          Gallery
        </h1>
        <div className="gallery mt-20">
          {menu.map(({ image }) => (
            <img
              src={`/images/${image}.jpg`}
              className="gallery__thumbnail"
              onClick={() => setselectedImage(image)}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <a href="/#contact" className="my-20">
            <button className="cta primary">Contact us</button>
          </a>
        </div>
      </NavProvider>
      {selectedImage && (
        <div className="modal">
          <button onClick={closeModal}>
            <FaWindowClose />
          </button>
          <img src={`/images/${selectedImage}.jpg`} className="modal__img" />
        </div>
      )}
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
