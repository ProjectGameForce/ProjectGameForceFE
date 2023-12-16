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
		let interval: any;
		const startAutoScroll = () => {
			interval = setInterval(goNext, 1000);
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
	});
	return (
		<div className="mx-10 justify-center items-center my-20 w-[70%] overflow-hidden ">
			<div
				className="transition-transform duration-[10000ms] ease-in-out"
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
				{reviewList.map((item, index) => (
					<div className="" key={index}>
						<Review reviewObj={item} styles={""} />
					</div>
				))}
			</div>
		</div>
	);
}
