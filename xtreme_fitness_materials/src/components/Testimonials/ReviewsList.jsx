import React, { useState } from "react";
import apostrophy from "../../assets/icons/testimonials_apostrophy.png";
import clsx from "clsx";
import { useReviews } from "./useTestimonials";
import Pagination from "../Pagination/Pagination";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const ReviewsList = () => {
  const { reviews, loading, error } = useReviews();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(1);

  // Pagination logic, method Math ceil rounds up to the nearest integer
  const totalPage = Math.ceil(reviews.length / itemsPerPage);

  // Calculate the reviews to display based on current page and items per page
  const paginatedReviews = reviews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  if (loading)
    return (
      <p className="font-normal text-2xl text-sky-800">Loading reviews...</p>
    );

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;

  return (
    <>
      <ul
        className={`grid gap-8 mt-10 md:mt-12 grid-cols-${itemsPerPage} min-h-50 md:min-h-65 transition-all duration-500`}
      >
        {paginatedReviews.map((item, index) => (
          <li key={index} className="font-normal text-center relative">
            <div className="">
              <img
                src={apostrophy}
                alt="apostrophy"
                className="absolute -left-10 -top-6"
              />
              <p
                className={clsx(
                  "font-normal text-base md:text-xl text-secondary",
                  "max-w-[290px] md:min-w-[390px] mx-auto mb-4",
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
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        setCurrentPage={setCurrentPage}
        leftIcon={<IoIosArrowDropleft className="text-[52px] md:text-[62px]" />}
        rightIcon={
          <IoIosArrowDropright className="text-[52px] md:text-[62px]" />
        }
        buttonClass="rounded disabled:opacity-50 cursor-pointer"
        setDirection={() => {}}
      />
    </>
  );
};

export default ReviewsList;
