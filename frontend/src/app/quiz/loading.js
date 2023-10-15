import React from "react";

export default function Loading() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center ">
      <h2 className="my-4 text-2xl text-green font-bold">
        Generating questions...
      </h2>
      <div className="w-[80%] bg-superdark h-fit rounded-md border-2 border-purple overflow-hidden">
        <div className="p-0 m-0 h-6 rounded-md bg-stripes relative top-0 -left-[100%] animate-progress"></div>
      </div>
    </div>
  );
}

// before:w-20 before:h-6 before:bg-green before:block before:-left-[20] before:relative
