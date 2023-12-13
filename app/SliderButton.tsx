"use client";
import React from "react";

export function SliderButton({ onClick, children }: any) {
  return (
    <div>
      <button
        onClick={onClick}
        className="border-2 p-2 bg-gray-200 border-gray-700 mx-20 font-bold items-center h-5"
      >
        {children}
      </button>
    </div>
  );
}
