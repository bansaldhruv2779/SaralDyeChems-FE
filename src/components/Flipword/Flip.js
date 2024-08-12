import React from "react";
import {FlipWords} from "./FlipWords";

export default function Flip({categoryId}) {
  const words = [categoryId];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}
