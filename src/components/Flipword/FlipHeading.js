import React from "react";
import {FlipWords} from "./FlipWords";

export default function FlipHeading({word, emoji = ""}) {
  const words = [word];

  return (
    <div className="flex justify-left items-left px-2">
      <div className="text-3xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 font-Lato">
        <FlipWords words={words} emoji={emoji} /> <br />
      </div>
    </div>
  );
}
