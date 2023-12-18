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
		const interval = setInterval(goNext, 10000);

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
	}, []);
	return (
		<div className="mx-10 justify-center items-center my-20 w-[70%] overflow-hidden ">
			<div className="flex flex-row">
				{reviewList.map((item, index) => (
					<div
						className="min-w-full max-w-full transition-transform duration-[10000ms] ease-in-out"
						key={index}
						style={{ transform: `translateX(-${currentIndex * 100}%)` }}
					>
						<Review reviewObj={item} styles={""} />
					</div>
				))}
			</div>
		</div>
	);
}
