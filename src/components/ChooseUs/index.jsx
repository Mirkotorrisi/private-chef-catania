import * as React from "react";
import "./index.scss";
import { useRef } from "react";
import { useOnScreen } from "../../hooks/useOnScreen";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { useNav } from "../../hooks/useNav";

const ChooseUs = ({
  allGooglePlacesReview,
  contentfulDescrizioneInizialeSottoIlVideo,
  imageForReviews,
}) => {
  const refForNav = useNav("/#choose_us");
  const ref = useRef(null);
  const isOnScreen = useOnScreen(ref);
  return (
    <div className={`py-20 lg:py-32 choose_us `} id="choose_us" ref={ref}>
      <p className={`choose_us__bio p-22 p-0:lg animation_in`} ref={refForNav}>
        {
          contentfulDescrizioneInizialeSottoIlVideo.first_description
            .first_description
        }
      </p>
      <p className={`choose_us__bio mt-5 p-22 p-0:lg animation_in`}>
        {
          contentfulDescrizioneInizialeSottoIlVideo.second_description
            .second_description
        }
      </p>

      <div className="reviews">
        <h1
          className={`choose_us__title my-20 animation_${isOnScreen && "in"}`}
        >
          Reviews
        </h1>
        <div className="flex justify-between flex-col lg:flex-row">
          <div>
            {allGooglePlacesReview?.edges.map(
              (
                {
                  node: {
                    profile_photo_url,
                    author_name,
                    author_url,
                    rating,
                    text,
                    relative_time_description,
                  },
                },
                index
              ) => (
                <li className="flex my-3" key={`review${index}`}>
                  <img
                    src={profile_photo_url}
                    alt="review's author profile pic"
                  />{" "}
                  <div className="px-6">
                    <div className="flex">
                      <a href={author_url}>
                        <h3 className="font-bold mb-3 mr-3">{author_name}</h3>
                      </a>
                      {[...Array(rating)].map((_, i) => (
                        <FaStar key={`star${i}`} />
                      ))}
                    </div>
                    <p>{text}</p>
                    <p className="my-3 italic">{relative_time_description}</p>
                  </div>
                </li>
              )
            )}
          </div>
          <img
            src={imageForReviews}
            alt="some guests with our head chef"
            className="choose_us__img mt-10 lg:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
