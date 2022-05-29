import * as React from "react";
import "./index.scss";
import { useRef } from "react";
import { useOnScreen } from "../../hooks/useOnScreen";

const ChooseUs = ({ data }) => {
  console.log("🚀 ~ file: index.jsx ~ line 7 ~ ChooseUs ~ data", data);
  const ref = useRef(null);
  const isOnScreen = useOnScreen(ref);

  return (
    <div className={`py-32 choose_us `} id="choose_us" ref={ref}>
      <p
        className={`choose_us__bio p-22 p-0:lg animation_${isOnScreen && "in"}`}
      >
        We are one of the best solutions in Sicily that guarantees a high
        quality home chef service. Our decades of experience allows us to
        satisfy the most refined and elaborate needs.{" "}
      </p>
      <p
        className={`choose_us__bio p-22 p-0:lg animation_${isOnScreen && "in"}`}
      >
        Whether it's a dinner for two or a special event with dozens of guests,
        we will offer a unique and high-level experience. Ours is a 360-degree
        service, we take care of the customer from the moment he chooses the
        menu to table service.
      </p>

      <div className="reviews">
        <h1
          className={`choose_us__title my-20 animation_${isOnScreen && "in"}`}
        >
          Reviews
        </h1>
        {data?.allGooglePlacesReview?.edges.map(
          ({ node: { profile_photo_url, author_name, rating, text } }) => (
            <li className="flex my-3">
              <img src={profile_photo_url} />{" "}
              <div className="px-6">
                <div className="flex">
                  <h3 className="font-bold mb-3 mr-3">{author_name}</h3>{" "}
                  {rating}
                </div>
                <p>{text}</p>
              </div>
            </li>
          )
        )}
      </div>
    </div>
  );
};

export default ChooseUs;
