"use client";
import { useState } from "react";
import Question from "./Question";

export default function Quiz() {
  let arr = [
    {
      num: 1,
      type: "MCQ",
      text: "Who are you?",
      options: ["Ayaan", "Ketan", "Avi", "B"],
    },
    {
      num: 2,
      type: "MCQ",
      text: "Food?",
      options: ["Burger", "Steak", "Cheesecake", "Tenders"],
    },
    {
      num: 3,
      type: "TF",
      text: "KSI beats Fury?",
    },
    {
      num: 4,
      type: "FR",
      text: "Describe what you would if a clown attacked you.",
    },
  ];

  const [response, setResponse] = useState(
    arr.map((ques) => {
      return {
        id: ques.num,
        ans: "",
      };
    })
  );

  const setAnswer = (id, newVal) => {
    const updatedState = response.map((val, index) => {
      if (id === index) {
        val.ans = newVal;
      }
      return val;
    });
    setResponse(updatedState);
  };

  const handleSubmitResponse = () => {
    console.log(response);
  };

  return (
    <div className="p-4 overflow-y-auto">
      <h1 className="text-2xl font-bold ml-4">Questions</h1>
      <div>
        {arr.map((ques, index) => (
          <Question key={index} num={index} ques={ques} setAnswer={setAnswer} />
        ))}
      </div>
      <button
        type="submit"
        className="ml-4 my-6 px-auto py-auto rounded-md w-32 h-12 my-10 border-solid border-2 text-purple border-purple hover:scale-105 hover:border-yellow hover:text-yellow hover:shadow-focus font-bold"
        onClick={handleSubmitResponse}
      >
        Submit
      </button>
    </div>
  );
}
