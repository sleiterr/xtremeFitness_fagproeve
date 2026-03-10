import React from "react";
import apostrophy from "../../assets/icons/testimonials_apostrophy.png";
import clsx from "clsx";
import { useReviews } from "./useTestimonials";

const ReviewsList = () => {
  const { reviews, loading, error } = useReviews();

  if (loading)
    return (
      <p className="font-normal text-2xl text-sky-800">Loading reviews...</p>
    );

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;

  return (
    <>
      <ul
        className={clsx(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10 md:mt-12",
        )}
      >
        {reviews.map((item, index) => (
          <li key={index} className="font-normal text-center relative">
            <img
              src={apostrophy}
              alt="apostrophy"
              className="absolute -left-8 -top-6"
            />
            <div className="">
              <p
                className={clsx(
                  "font-normal text-base md:text-xl text-secondary",
                  "max-w-60 md:max-w-80 mx-auto mb-4",
                )}
              >
                {item.content}
              </p>
              <h4 className="font-teko font-medium text-3xl text-secondary">
                {item.author}
              </h4>
              <span className="font-light text-sm md:text-2xl text-secondary">
                {item.position}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReviewsList;
