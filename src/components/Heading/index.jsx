import * as React from "react";
import "./index.scss";
import { useNav } from "../../hooks/useNav";
import { useOnScreen } from "../../hooks/useOnScreen";
import videoFusione from "../../../public/images/videofusione.mp4";

const Heading = () => {
  const ref = useNav("/#home");

  return (
    <>
      <video className="videoBackground" autoPlay muted loop>
        <source src={videoFusione} type="video/mp4" />
      </video>
      <header className="header w-screen h-screen" ref={ref}>
        <h1 className="header__title my-12">
          <span>Food &amp; beverage</span> <span>experience</span>{" "}
          <span>at home</span>
        </h1>
        <div className="flex items-center flex-col justify-center px-6 my-5">
          <h1 className="subtitle">
            We will provide you the{" "}
            <span className="font-bold">best experiences</span> in your{" "}
            <span className="font-bold">preferred location</span>.
          </h1>
          <div className="flex center my-10">
            <a href="#contact">
              <button className="cta primary mr-10">Contact us</button>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Heading;
