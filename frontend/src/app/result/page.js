"use client";
import { useEffect } from "react";

export default function Result() {
  let score = undefined;
  useEffect(() => {
    score = localStorage.getItem("score");
  });
  return (
    <>
      <h3
        type="submit"
        className="mx-auto px-4 py-2 rounded-md w-32 h-12 my-10 border-solid border-2 text-purple border-purple hover:scale-105 hover:border-yellow hover:text-yellow hover:shadow-focus font-bold"
      >
        {score}
      </h3>
    </>
  );
}
