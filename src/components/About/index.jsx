import React, { useRef } from "react";
import "./index.scss";
import { useNav } from "../../hooks/useNav";
import { useOnScreen } from "../../hooks/useOnScreen";

const About = ({ contentfulBiografiaDiFabio }) => {
  const ref = useNav("/#about");
  const refForAnim = useRef(null);
  const isOnScreen = useOnScreen(refForAnim);

  return (
    <div className="about pb-20 lg:pb-44" id="about" ref={ref}>
      <h1
        className={`about__title mt-20 mb-20 animation_${isOnScreen && "in"}`}
        ref={refForAnim}
      >
        About
      </h1>
      <div className="w-full flex flex-col lg:flex-row justify-between">
        <img
          src={contentfulBiografiaDiFabio.bio_picture?.file?.url}
          alt="fabio simone"
          className="about__pic mb-10 lg:mb-0"
        />
        <p
          className={`about__bio lg:pl-20 p-0:lg animation_${
            isOnScreen && "in"
          }`}
        >
          {contentfulBiografiaDiFabio.bio.bio}
        </p>
      </div>
      <a href="/gallery/">
        <button className="cta mt-20">Go to the gallery</button>
      </a>
    </div>
  );
};

export default About;
