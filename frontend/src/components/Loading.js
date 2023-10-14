import React from "react";

export default function Loading() {
  return (
    <div className="w-[80%] bg-superdark h-6 rounded-md border-2 border-purple">
      <div className="h-6 rounded-md bg-stripes relative top-0 -left-[100%] animate-progress"></div>
    </div>
  );
}
