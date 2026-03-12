import React from "react";
import { Link } from "react-router-dom";
import DateBadge from "./DateBadge";
import clsx from "clsx";
import { useBlogs } from "./useNews";

const NewsEvent = () => {
  const { blogs, loading, error } = useBlogs();

  // Define the target ID for the specific event we want to display
  const targetId = "69aea7781108ea7a04055457";
  const uniqueEvent = blogs.find((item) => item._id === targetId);

  if (loading)
    return (
      <p className="font-normal text-2xl text-sky-800">
        Loading list services...
      </p>
    );

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;

  // return null if the specific event is not found to avoid rendering issues
  if (!uniqueEvent) return null;

  return (
    <>
      {uniqueEvent && (
        <div
          key={uniqueEvent._id}
          className="flex flex-col items-center justify-center w-full max-w-105 h-auto mx-auto mt-7 md:mt-8"
        >
          <div className="relative w-full md:w-auto h-65">
            <img
              src={uniqueEvent.image}
              alt={uniqueEvent.title}
              className="w-full h-70 md:h-80 object-cover"
            />
            <DateBadge />
          </div>
          <div className=" mt-32 md:mt-36">
            <h4 className="font-teko font-medium text-3xl text-dark-secondary text-center">
              {uniqueEvent.title}
            </h4>
            <p className="font-light text-lg text-dark-slider text-center mt-4">
              {uniqueEvent.teaser}
            </p>
          </div>
          <div className="mt-6">
            <Link to="#" className="font-normal text-base md:text-lg text-link">
              Læs mere
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsEvent;
