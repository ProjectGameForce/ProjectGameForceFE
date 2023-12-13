"use client";
import React, { useState } from "react";
import { reviewList } from "./page";
import { Review } from "./ReviewProps";
import { SliderButton } from "./SliderButton";

export function Spinner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const buttonStyles = "b-2 bg-gray-200 border-gray-700 mx-5";
  const goToPrev = () => {
    setCurrentIndex((currentCurrentIndex) => {
      return currentCurrentIndex === 0
        ? reviewList.length - 1
        : currentCurrentIndex - 1;
    });
  };

  const goNext = () => {
    setCurrentIndex((currentCurrentIndex) => {
      return currentCurrentIndex === reviewList.length - 1
        ? 0
        : currentCurrentIndex + 1;
    });
  };
  return (
    <div className="flex flex-row mx-10 justify-center items-center my-20 w-[70%]">
      <SliderButton onClick={goToPrev}>Previous</SliderButton>
      <div className="flex flex-col md:flex-row justify-center h-60">
        <Review
          reviewObj={
            reviewList[
              currentIndex === 0 ? reviewList.length - 1 : currentIndex - 1
            ]
          }
          styles={" -z-10"}
        />
        <Review reviewObj={reviewList[currentIndex]} styles={" mt-10"} />
        <Review
          reviewObj={
            reviewList[
              currentIndex === reviewList.length - 1 ? 0 : currentIndex + 1
            ]
          }
          styles={"-z-10 "}
        />
      </div>
      <SliderButton onClick={goNext}>Next</SliderButton>
    </div>
  );
}
