"use client";
import React from "react";
import {Boxes} from "./Boxes";
import {cn} from "../../utils/cn";

export function BackgroundBoxesDemo({categoryName, categoryDescription}) {
  return (
    <div className="h-96 z-10 relative w-full overflow-hidden bg-slate-900 flex flex-col text-wrap">
      <div className="absolute inset-0 w-full h-full bg-slate-900 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className={cn("mt-28 z-10 justify-between flex flex-col space-y-4")}>
        <h2
          style={{
            marginLeft: "30px",
            textTransform: "uppercase",
          }}
          className={cn("lg:text-5xl sm:text-xl font-bold text-white z-20")}>
          {categoryName}
        </h2>
        {categoryDescription && (
          <p
            style={{
              marginLeft: "30px",
            }}
            className={cn("text-base text-white z-20 text-opacity-75")}>
            {categoryDescription}
          </p>
        )}
      </div>
    </div>
  );
}
