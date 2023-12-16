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
      className={`hover:w-72 hover:mx-0 hover:h-96 hover:text-xl w-[100%] h-60 mx-10 rounded-xl ${styles} `}
    >
      <q>{review}</q>
      <h1 className="float-right mr-10 font-bold">-{name}</h1>
    </div>
  );
};
