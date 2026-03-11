import React from "react";
import clsx from "clsx";
import { useSubscriptions } from "./useSubscription";

const SubscriptionCard = () => {
  const { subscriptions, loading, error } = useSubscriptions();

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
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 md:mt-16">
        {subscriptions.map((item, index) => (
          <li key={index} className="flex items-center justify-center">
            <div className="">
              <img src={item.image} alt={item.title} className="" />
              <h4 className="font-teko font-medium text-3xl text-dark-secondary">
                {item.title}
              </h4>
              <p
                className={clsx(
                  "font-normal text-base md:text-xl text-dark-secondary",
                  " mx-auto mb-4",
                )}
              ></p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SubscriptionCard;
