"use client";

import { useState } from "react";

export default function Intro({ router }) {
  const [showIntro, setShowIntro] = useState(false);

  const toggleShowIntro = () => {
    setShowIntro(!showIntro);
  };

  return (
    <div
      className={
        "w-screen h-screen flex flex-col items-center justify-center top-0 absolute z-10 bg-superdark" +
        (showIntro ? " animate-slide-up" : "")
      }
    >
      <h1 className="w-fit h-fit text-4xl my-4">
        ex<b className="text-purple">AI</b>mination
      </h1>
      <h2 className="w-fit h-fit text-xl my-4">
        Generate mock tests using <b className="text-purple text-bold">AI</b>!
      </h2>
      <button
        className="my-10 w-44 h-11 border-solid border-darkgray border-2 rounded-lg text-gray hover:scale-102 hover:border-purple hover:text-purple hover:shadow-hover"
        onClick={() => {
          toggleShowIntro();
          setTimeout(() => {
            router.push("/input");
          }, 500);
        }}
      >
        <p className="text-lg">Get started</p>
      </button>
    </div>
  );
}
