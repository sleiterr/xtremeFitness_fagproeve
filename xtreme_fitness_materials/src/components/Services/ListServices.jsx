import React from "react";
import { useServices } from "./useServices";
import clsx from "clsx";

const ListServices = () => {
  const { services, loading, error } = useServices();

  if (loading)
    return (
      <p className="font-normal text-2xl text-sky-800">
        Loading list services...
      </p>
    );

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;

  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 -mt-8 md:-mt-16">
        {services.map((item) => {
          return (
            <li
              key={item._id}
              className="relative overflow-hidden text-center mx-auto w-full max-w-[320px] md:max-w-90"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover"
              />

              {/* Overlay */}
              <div
                className={clsx(
                  "absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-black/80 via-black/30 to-transparent",
                  "flex flex-col items-start justify-end",
                  "pb-4 md:pb-6 px-4 text-left",
                )}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="mb-1 md:mb-2 w-8.75 md:w-10"
                />

                <h4 className="font-teko font-semibold text-xl md:text-2xl text-secondary mb-1 md:mb-2">
                  {item.title}
                </h4>

                <p className="font-normal text-xs md:text-base text-white max-w-52 md:max-w-90">
                  {item.teaser}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListServices;
