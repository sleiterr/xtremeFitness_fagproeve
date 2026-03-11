import React from "react";
import clsx from "clsx";
import aboutUs from "../../assets/Reviews/reviews_background.jpg";
import riviewsUsMobile from "../../assets/Reviews/reviews.png";
import ReviewsList from "./ReviewsList";

const reviewsText = [
  {
    id: 1,
    subject: "Udtelelser",
    title: "Det siger vores kunder om os",
    subjectClass:
      "font-teko font-normal text-base md:text-3xl text-text-slogan tracking-[2.55px] uppercase mb-4",
    titleClass:
      "font-teko font-medium text-primary text-3xl md:text-5xl tracking-[1.2px] uppercase md:w-90 md:tracking-[1.4px] mx-auto w-70 md:w-90",
    imageMobile: riviewsUsMobile,
  },
];

const Testimonials = () => {
  return (
    <section
      className="relative w-full min-w-[320px] md:h-screen min-h-screen lg:h-auto bg-no-repeat bg-left md:bg-center bg-length:[200%_100%] md:bg-cover md:aspect-8/5"
      id="about"
      style={{ backgroundImage: `url(${aboutUs})` }}
    >
      <div
        className={clsx(
          "w-full md:w-1/2 md:mr-auto px-0 md:px-6 py-10 md:py-32 md:max-w-7xl min-h-full",
          "flex flex-col text-center justify-center items-center md:items-center md:justify-center",
        )}
      >
        <ReviewsItem />
        <ReviewsList />
        <img
          src={riviewsUsMobile}
          alt="about us mobile"
          className="block md:hidden w-75.25 h-auto object-cover mt-14"
        />
      </div>
    </section>
  );
};

export default Testimonials;

const ReviewsItem = () => {
  return (
    <>
      {reviewsText.map((item) => (
        <div
          key={item.id}
          className="flex flex-col-reverse items-center justify-center mx-auto"
        >
          <div className="">
            <h4 className={item.subjectClass}>{item.subject}</h4>
            <h2 className={item.titleClass}>{item.title}</h2>
          </div>
        </div>
      ))}
    </>
  );
};
