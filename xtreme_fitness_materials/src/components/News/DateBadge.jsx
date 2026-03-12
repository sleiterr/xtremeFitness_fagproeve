import React from "react";
import clsx from "clsx";

const badgeText = [{ id: 1, date: "23", month: "Jan" }];

const DateBadge = () => {
  return (
    <>
      <BadgeItem />
    </>
  );
};

export default DateBadge;

const BadgeItem = () => {
  return (
    <>
      {badgeText.map((item) => (
        <span
          key={item.id}
          className={clsx(
            "flex flex-col items-center justify-center",
            "w-30 h-30 rounded-full",
            "font-teko font-semibold text-primary text-4xl md:text-5xl",
            "absolute -bottom-20 md:-bottom-28 left-1/2 -translate-x-1/2",
          )}
          style={{ background: "var(--gradient-price-badge)" }}
        >
          {item.date}
          <span className="font-ubuntu font-light text-lg md:text-xl">
            {item.month}
          </span>
        </span>
      ))}
    </>
  );
};
