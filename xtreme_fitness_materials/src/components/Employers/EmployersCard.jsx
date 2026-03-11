import React from "react";
import clsx from "clsx";
import { useEmployers } from "./useEmployers";

const EmployersCard = () => {
  const { employers, loading, error } = useEmployers();

  // Define the areas we want to include in the filtered list
  const filteredAreas = ["Crossfit", "Kardio & Kondition", "Fitness"];
  // Filter employers to include only those in the specified areas
  const filteredEmployers = employers
    ? employers.filter((item) => filteredAreas.includes(item.area))
    : [];

  // Remove duplicates while ensuring only one "SOFIE MADSEN" for "Kardio & Kondition"
  const uniqueEmployers = filteredEmployers.filter((item, index, arr) => {
    if (item.area === "Kardio & Kondition") {
      // return only one Sofie Madsen for 'Kardio & Kondition'
      return (
        item.name === "SOFIE MADSEN" &&
        arr.findIndex(
          (sub) => sub.name === item.name && sub.area === item.area,
        ) === index
      );
    }
    // for other areas, return the first unique name+area combination
    return (
      arr.findIndex(
        (sub) => sub.name === item.name && sub.area === item.area,
      ) === index
    );
  });

  if (loading)
    return <p className="font-normal text-2xl text-sky-800">Loading list...</p>;

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;

  return (
    <>
      <ul
        className={clsx(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 md:mt-16",
        )}
      >
        {uniqueEmployers.map((item) => (
          <li key={item._id} className="text-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-55 h-auto md:w-65 md:h-auto object-contain mx-auto"
            />
            <div className="mt-4 md:mt-6">
              <h4 className="font-teko font-medium text-4xl text-primary">
                {item.name}
              </h4>
              <p className="font-normal text-2xl text-secondary">{item.area}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EmployersCard;
