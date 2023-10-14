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

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Questions</h1>
      {arr.map((ques) => Ques)}
      <Question questionType="true-false" questionText="Is the sky blue?" />
      <Question
        questionType="mcq"
        questionText="What is the capital of France?"
        options={["London", "Berlin", "Paris", "Madrid"]}
      />
      <Question
        questionType="free-response"
        questionText="Share your thoughts on the topic:"
      />
    </div>
  );
}
