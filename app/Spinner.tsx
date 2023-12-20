"use client";
import React, { useState, useEffect } from "react";
import { reviewList } from "./page";
import { Review } from "./ReviewProps";
import { SliderButton } from "./SliderButton";

export function Spinner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goNext = () => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % reviewList.length);
  };

  useEffect(() => {
    const interval = setInterval(goNext, 20000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="mx-10 justify-center items-center my-20 w-[75%] overflow-hidden">
      <div className="w-full bg-gradient-to-r z-20 from-white via-slate-50/0 to-white">
        <div
          className="flex flex-row animate-rotate"
          style={{
            transform: `translateX(-${currentIndex}%)`,
            //transition: "transform duration-[10000ms] ease-in-out",
          }}
        >
          {reviewList.map((item, index) => (
            <div className="min-w-[33%] max-w-[33%] mx-4" key={index}>
              <Review reviewObj={item} styles={""} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
