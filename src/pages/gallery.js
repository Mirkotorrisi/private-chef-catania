import React, { useState } from "react";
import { graphql } from "gatsby";
import { NavProvider } from "../context/NavContext";
import { FaWindowClose } from "@react-icons/all-files/fa/FaWindowClose";
import "./gallery.scss";
import "./index.scss";
import "tailwindcss/tailwind.css";
import "../styles/colors.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// markup
const GalleryPage = ({ data }) => {
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
          {data.contentfulGallery.gallery_images.map(
            ({ file: { url } }, index) => (
              <img
                src={url}
                className="gallery__thumbnail"
                onClick={() => setselectedImage(index + 1)}
              />
            )
          )}
        </div>
        <div className="flex justify-center">
          <a href="/#contact" className="my-20">
            <button className="cta primary">Reserve now</button>
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

export const query = graphql`
  query GalleryQuery {
    contentfulGallery {
      gallery_images {
        file {
          url
        }
      }
    }
  }
`;
