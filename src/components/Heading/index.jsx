import * as React from "react";
import "./index.scss";
import { useNav } from "../../hooks/useNav";
import { useOnScreen } from "../../hooks/useOnScreen";

const Heading = () => {
  const ref = useNav("/#home");

  return (
    <>
      <header className="header w-screen h-screen" ref={ref}>
        <h1 className="header__title my-12">
          <span>FOOD &amp; BEVERAGE</span> <span>EXPERIENCE</span>{" "}
          <span>AT HOME</span>
        </h1>
        <div className="flex items-center flex-col justify-center px-6 my-5">
          <h1>
            We will provide you the{" "}
            <span className="font-bold">best experiences</span> in your{" "}
            <span className="font-bold">preferred location</span>.
          </h1>
          <div className="flex justify-between my-10">
            <button className="cta primary mr-10">Contact us</button>
            <button className="cta ">Sample menu</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Heading;
