import * as React from "react";
import "./index.scss";
import { useRef } from "react";
import { useOnScreen } from "../../hooks/useOnScreen";
import reviewsPic from "../../../public/images/reviews_pic.jpeg";
import { FaStar } from "@react-icons/all-files/fa/FaStar";

const ChooseUs = ({ data }) => {
  const ref = useRef(null);
  const isOnScreen = useOnScreen(ref);

  return (
    <div className={`py-20 lg:py-32 choose_us `} id="choose_us" ref={ref}>
      <p className={`choose_us__bio p-22 p-0:lg animation_in`}>
        We are one of the best solutions in Sicily that guarantees a high
        quality home chef service. Our decades of experience allows us to
        satisfy the most refined and elaborate needs.{" "}
      </p>
      <p className={`choose_us__bio p-22 p-0:lg animation_in`}>
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
        <div className="flex justify-between flex-col lg:flex-row">
          <div>
            {data?.allGooglePlacesReview?.edges.map(
              ({ node: { profile_photo_url, author_name, rating, text } }) => (
                <li className="flex my-3">
                  <img src={profile_photo_url} />{" "}
                  <div className="px-6">
                    <div className="flex">
                      <h3 className="font-bold mb-3 mr-3">{author_name}</h3>{" "}
                      {[...Array(rating)].map(() => (
                        <FaStar />
                      ))}
                    </div>
                    <p>{text}</p>
                  </div>
                </li>
              )
            )}
          </div>
          <img src={reviewsPic} className="choose_us__img mt-10 lg:mt-0" />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
