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
    <div className={`w-full text-xl mx-10 flex flex-col ${styles} `}>
      <q>{review}</q>
      <h1 className="float-right mx-10 font-bold">-{name}</h1>
    </div>
  );
};
