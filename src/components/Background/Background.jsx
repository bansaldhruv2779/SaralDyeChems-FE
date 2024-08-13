"use client";
import React from "react";
import {Boxes} from "./Boxes";
import {cn} from "../../utills/cn";

export function BackgroundBoxesDemo({categoryId}) {
  return (
    <div className="h-96 z-10 relative w-full overflow-hidden bg-slate-900 flex flex-col  justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h2
        style={{
          marginLeft: "30px",
          textTransform: "uppercase",
        }}
        className={cn("md:text-4xl text-xl text-white z-20")}>
        {categoryId}
      </h2>
    </div>
  );
}
