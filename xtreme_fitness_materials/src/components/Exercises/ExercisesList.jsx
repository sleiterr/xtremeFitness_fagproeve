import React, { useState } from "react";
import clsx from "clsx";
import { useExercises } from "./useExercises";
import Pagination from "../Pagination/Pagination";

import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

const ExercisesList = () => {
  const { exercises, loading, error } = useExercises();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(1);

  const totalPage = Math.ceil(exercises.length / itemsPerPage);

  // Calculate the exercises to display based on current page and items per page
  const paginatedExercises = exercises.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  if (loading)
    return <p className="font-normal text-2xl text-sky-800">Loading list...</p>;

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;
  return (
    <>
      <ul className={clsx("grid grid-cols-1 mt-10 md:mt-16")}>
        {paginatedExercises.map((item) => (
          <li
            key={item._id}
            className="font-normal text-lg text-dark-secondary text-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-21.5 h-auto md:w-20 md:h-auto object-contain mx-auto mb-4 md:mb-6"
            />
            <div className="">
              <h4 className="font-medium text-2xl text-dark-secondary mb-2">
                {item.title}
              </h4>
              <p
                className={clsx(
                  "font-normal text-xs md:text-base text-dark-slider",
                  "max-w-58.25 md:max-w-90 mx-auto",
                )}
              >
                {item.teaser}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        setCurrentPage={setCurrentPage}
        leftIcon={
          <IoIosArrowDropleftCircle className="text-[52px] md:text-[62px] text-black" />
        }
        rightIcon={
          <IoIosArrowDroprightCircle className="text-[52px] md:text-[62px] text-black" />
        }
        buttonClass="rounded disabled:opacity-50 cursor-pointer"
        setDirection={() => {}}
      />
    </>
  );
};

export default ExercisesList;
