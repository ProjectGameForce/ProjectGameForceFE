"use client";
import React from "react";

export function SliderButton({ onClick, children }: any) {
  return (
    <div>
      <button
        onClick={onClick}
        className="border-2 rounded-[2.5em] p-1 w-32 hover:bg-orange-300 bg-gray-200 border-gray-700 mx-20 font-bold "
      >
        {children}
      </button>
    </div>
  );
}
