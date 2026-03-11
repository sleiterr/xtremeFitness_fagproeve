import React from "react";
import gym from "../../assets/icons/tilmeld_gym.svg";
import CradBtn from "../Button/CradBtn";
import clsx from "clsx";
import { useSubscriptions } from "./useSubscription";
import { IoMdCheckmark } from "react-icons/io";

const SubscriptionCard = () => {
  // Fetch subscriptions using the custom hook
  const { subscriptions, loading, error } = useSubscriptions();

  // Remove duplicate subscriptions based on title
  const uniqueSubscriptions = subscriptions
    ? subscriptions.filter(
        (item, index, arr) =>
          arr.findIndex((sub) => sub.title === item.title) === index,
      )
    : [];

  if (loading)
    return (
      <p className="font-normal text-2xl text-sky-800">
        Loading subscriptions...
      </p>
    );

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 place-items-center md:mt-16">
        {uniqueSubscriptions.map((item) => (
          <div
            key={item._id}
            className="flex flex-col items-center justify-center w-full max-w-[420px] h-auto"
          >
            <div className="relative w-full md:w-auto h-[260px]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[220px] md:h-[260px] object-cover"
              />
              <span
                className={clsx(
                  "flex flex-col items-center justify-center",
                  "w-[120px] h-[120px] rounded-full",
                  "font-teko font-semibold text-primary text-3xl md:text-3xl",
                  "absolute -bottom-6 md:-bottom-16 left-1/2 -translate-x-1/2",
                )}
                style={{ background: "var(--gradient-price-badge)" }}
              >
                {item.price} DKK
                <span className="font-ubuntu font-light text-xl">Mdr</span>
              </span>
            </div>
            <div className=" mt-12 md:mt-24">
              <h4 className="font-teko font-medium text-3xl text-dark-secondary text-center">
                {item.title}
              </h4>
              <ul className="mt-4 space-y-2">
                {item.list.map((feature, i) => (
                  <li
                    key={i}
                    className={clsx(
                      "flex items-center gap-2",
                      "font-light text-xs md:text-2xs text-dark-secondary",
                    )}
                  >
                    <IoMdCheckmark className="text-text-slogan text-xl md:text-2xl" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <CradBtn>
                Tilmeld dig nu{" "}
                <img
                  src={gym}
                  alt="Gym icon"
                  className={clsx(
                    "flex items-center",
                    "w-10 h-6 bg-white rounded-[2rem] p-1 shadow-md",
                  )}
                />
              </CradBtn>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SubscriptionCard;
