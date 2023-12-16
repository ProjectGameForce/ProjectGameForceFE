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
    setCurrentIndex((currentCurrentIndex) => {
      return currentCurrentIndex === reviewList.length - 1
        ? 0
        : currentCurrentIndex + 1;
    });
  };

  useEffect(() => {
    let interval: any;
    const startAutoScroll = () => {
      interval = setInterval(goNext, 3000);
    };
    startAutoScroll();
    /* const stopScroll = () => {
      clearInterval(interval);
    }; */

    /* const spinnerElement = document.getElementById("spinnerId");
    spinnerElement?.addEventListener("mouseenter", stopScroll);
    spinnerElement?.addEventListener("mouseleave", startAutoScroll); */
    return () => {
      clearInterval(interval);
      /* spinnerElement?.removeEventListener("mouseenter", stopScroll);
      spinnerElement?.removeEventListener("mouseleave", startAutoScroll); */
    };
  }, [reviewList, goNext]);
  return (
    <div className="flex flex-row mx-10 justify-center items-center my-20 w-[70%] overflow-hidden ">
      <div
        className="flex flex-col md:flex-row justify-center h-72 transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex}%)` }}
      >
        <Review
          reviewObj={
            reviewList[
              currentIndex === 0 ? reviewList.length - 1 : currentIndex - 1
            ]
          }
          styles={""}
        />
        <Review reviewObj={reviewList[currentIndex]} styles={""} />
        <Review
          reviewObj={
            reviewList[
              currentIndex === reviewList.length - 1 ? 0 : currentIndex + 1
            ]
          }
          styles={""}
        />
      </div>
    </div>
  );
}
