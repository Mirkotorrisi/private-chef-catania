import * as React from "react";
import "./index.scss";
import { useNav } from "../../hooks/useNav";
import { useOnScreen } from "../../hooks/useOnScreen";
import videoFusione from "../../../public/images/videofusione2.mp4";

const Heading = () => {
  const ref = useNav("/#home");

  return (
    <>
      <video className="videoBackground" autoPlay muted loop playsInline>
        <source src={videoFusione} type="video/mp4" />
      </video>
      <header className="header w-screen h-screen" ref={ref}>
        <h1 className="header__title my-12 px-3 lg:p-0">
          <span>Food &amp; beverage</span> <span>experience</span>{" "}
          <span>at home</span>
        </h1>
        <div className="flex items-center flex-col justify-center px-6 my-5">
          <h1 className="subtitle">
            We will provide you the{" "}
            <span className="font-bold">best experiences</span> in your{" "}
            <span className="font-bold">preferred location</span>.
          </h1>
          <div className="flex justify-center w-full my-10">
            <a href="#contact" className="w-full lg:w-44">
              <button className="cta primary w-full lg:w-44 p-3">
                Reserve now
              </button>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Heading;
