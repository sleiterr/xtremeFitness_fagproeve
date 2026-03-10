import React from "react";

const servicesStats = [
  { id: 1, value: "600K", label: "Arbejdstimer" },
  { id: 2, value: "790K", label: "Programmer" },
  { id: 3, value: "2560K", label: "Glade kunder" },
  { id: 4, value: "2560K", label: "Sundere kroppe" },
];

const StatsSection = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-6 mt-6 mb-8 md:mb-10 md:gap-8 md:mt-12 text-center max-w-5xl mx-auto">
        <Statsitem />
      </div>
    </>
  );
};

export default StatsSection;

const Statsitem = () => {
  return (
    <>
      {servicesStats.map((stat) => (
        <div key={stat.id}>
          <h3 className="font-bold text-3xl md:text-4xl text-text-slogan">
            {stat.value}
          </h3>
          <p className="font-semibold text-xl md:text-2xl text-secondary uppercase">
            {stat.label}
          </p>
        </div>
      ))}
    </>
  );
};
