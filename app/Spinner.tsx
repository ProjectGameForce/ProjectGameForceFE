"use client";
import React, { useState, useEffect } from "react";
import { reviewList } from "./page";
import { Review } from "./ReviewProps";
import { SliderButton } from "./SliderButton";

export function Spinner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  /* const goToPrev = () => {
    setCurrentIndex((currentCurrentIndex) => {
      return currentCurrentIndex === 0
        ? reviewList.length - 1
        : currentCurrentIndex - 1;
    });
  }; */
  const goNext = () => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % reviewList.length);
  };

  useEffect(() => {
    const interval = setInterval(goNext, 5000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div className="mx-10 my-20 w-[70%] overflow-hidden ">
      <div
        className="flex flex-row transition-transform duration-[5000ms]  ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {reviewList.map((item, index) => (
          <div className=" min-w-full max-w-full" key={index}>
            <Review reviewObj={item} styles={"w-full"} />
          </div>
        ))}
      </div>
    </div>
  );
}
