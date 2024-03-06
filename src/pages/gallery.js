import { FaWindowClose } from "@react-icons/all-files/fa/FaWindowClose";
import { graphql } from "gatsby";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import React, { useState } from "react";
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
const GalleryPage = ({ data }) => {
  const [selectedImage, setselectedImage] = useState();
  const closeModal = () => {
    setselectedImage(undefined);
  };

  return (
    <main className="main flex-wrap">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={`Private chef ${uppercaseCity} gallery page`}
        />
        <meta
          name="keywords"
          content="cousine kitchen quality seafood chefs foodporn food cheflife gourmet foodphotography foodie foodgasm italy foodlover cooking cucina foodies italianfood sicilianfood foodblog foodstyle kitchen cucinaitaliana fooditaly dinner foods cook restaurant culinary"
        />
        <title>Gallery - Private Chef {uppercaseCity}</title>
      </Helmet>
      <GatsbySeo
        title={`Gallery - Private Chef ${uppercaseCity}`}
        description={`Some of the dishes prepared from Private Chef ${uppercaseCity} for his guests`}
        canonical={`https://privatechef${CITY}.com/gallery`}
        openGraph={{
          url: `https://privatechef${CITY}.com/gallery`,
          title: `Gallery - Private Chef ${uppercaseCity}`,
          description: `Some of the dishes prepared from Private Chef ${uppercaseCity} for his guests`,
          images: [
            {
              url: data.contentfulGallery.gallery_images[2].file.url,
              width: 800,
              height: 600,
              alt: "Gallery preview",
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
        <Navbar customActiveLink={"gallery"} />
        <div className="h-full flex flex-col justify-between">
          <h1 className="gallery__title w-full mt-20 lg:mt-44" id="gallery">
            Gallery
          </h1>
          <div className="gallery h-1/2 my-5 lg:my-20 ">
            {data.contentfulGallery.gallery_images.map(
              ({ file: { url } }, index) => (
                <img
                  src={url}
                  className="gallery__thumbnail m-5"
                  onClick={() => setselectedImage(url)}
                  alt={`gallery food number ${index}`}
                />
              )
            )}
          </div>
          <div className="flex justify-center">
            <a href="/#contact" className="my-20">
              <button className="cta primary">Reserve now</button>
            </a>
          </div>
        </div>
      </NavProvider>
      {selectedImage && (
        <div className="modal">
          <button onClick={closeModal}>
            <FaWindowClose />
          </button>
          <img
            src={selectedImage}
            className="modal__img"
            alt="modal selected food"
          />
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
