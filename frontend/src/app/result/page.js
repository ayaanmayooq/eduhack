"use client";
import { useEffect } from "react";

export default function Result() {
  let score = {"score": 2, };
  useEffect(() => {
    // score = localStorage.getItem("exaimination-score");
    // console.log(score);
  });
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center">
      <h1 className="text-2xl font-bold m-4">Result</h1>

      <h3
        type="submit"
        className="mx-auto px-4 py-2 rounded-md w-32 h-12 my-10 border-solid border-2 text-purple border-purple hover:scale-105 hover:border-yellow hover:text-yellow hover:shadow-focus font-bold"
      >
        You got {score} question{score > 1 ? "s" : ""} right
      </h3>
    </div>
  );
}
