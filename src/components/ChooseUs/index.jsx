import * as React from "react";
import "./index.scss";
import { useRef } from "react";
import { useOnScreen } from "../../hooks/useOnScreen";

const ChooseUs = () => {
  const ref = useRef(null);
  const isOnScreen = useOnScreen(ref);

  return (
    <div className={`pb-44 choose_us `} id="choose_us" ref={ref}>
      <h1
        className={`choose_us__title mt-20 mb-20 animation_${
          isOnScreen && "in"
        }`}
      >
        Why choose us
      </h1>
      <div className="choose_us__container">
        <p
          className={`choose_us__bio p-22 p-0:lg animation_${
            isOnScreen && "in"
          }`}
        >
          We are one of the best solutions in Sicily that guarantees a high
          quality home chef service. Our decades of experience allows us to
          satisfy the most refined and elaborate needs.{" "}
        </p>
        <p
          className={`choose_us__bio p-22 p-0:lg animation_${
            isOnScreen && "in"
          }`}
        >
          Whether it's a dinner for two or a special event with dozens of
          guests, we will offer a unique and high-level experience. Ours is a
          360-degree service, we take care of the customer from the moment he
          chooses the menu to table service.
        </p>
      </div>
    </div>
  );
};

export default ChooseUs;
