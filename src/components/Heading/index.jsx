import * as React from "react";
import { useNav } from "../../hooks/useNav";
import videoFusione from "../../static/videofusione2.mp4";
import "./index.scss";
const Heading = () => {
  const ref = useNav("/#home");

  return (
    <>
      <video className="videoBackground" autoPlay muted loop playsInline>
        <source src={videoFusione} type="video/mp4" />
      </video>
      <header className="header w-screen h-screen" ref={ref}>
        <h1 className="header__title my-12 px-3 lg:p-0">
          <span>Your</span> <span>personal</span> <span>chef</span>{" "}
          <span>at home</span>
        </h1>
        <div className="flex items-center flex-col justify-center px-6 my-5">
          <h1 className="subtitle">
            Food and beverage experience for your private event
          </h1>
          <div className="flex justify-center w-full my-10">
            <a href="#contact" className="w-full lg:w-44">
              <button className="cta primary w-full lg:w-44 p-3">
                Reserve now
              </button>
            </a>
          </div>
          <div className="w-full h-20 flex items-center justify-center animate-pulse">
            <div className="px-4 py-2 rounded-sm bg-red-300">
              <h2 className="text-3xl text-whte font-bold">
                20% off on August and September reservations
              </h2>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Heading;
