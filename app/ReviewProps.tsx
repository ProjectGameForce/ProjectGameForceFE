"use client";
import React from "react";
import { ReviewObj } from "./page";

type ReviewProps = {
	reviewObj: ReviewObj;
	styles: string;
};
export const Review = ({ reviewObj, styles }: ReviewProps) => {
	const { name, review } = reviewObj;
	return (
		<div className={`hover:text-xl w-full  mx-10 ${styles} `}>
			<q>{review}</q>
			<h1 className="float-right mr-10 font-bold">-{name}</h1>
		</div>
	);
};
