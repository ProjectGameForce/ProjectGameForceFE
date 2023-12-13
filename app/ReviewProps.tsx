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
    <div
      className={`-mx-10  w-64 h-80 border-2 rounded-xl ${styles} border-gray-600 bg-gray-200`}
    >
      <div className="m-5">
        <q>{review}</q>
        <h1 className="float-right mr-10 font-bold">-{name}</h1>
      </div>
    </div>
  );
};
