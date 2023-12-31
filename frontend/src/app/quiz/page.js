"use client";
import { useState } from "react";
import Question from "./Question";
import axios from "axios";
import { useRouter } from "next/navigation";
import API_ENDPOINT_BASE from "./../api";

const API_ENDPOINT = API_ENDPOINT_BASE + "/responses";

export default function Quiz({ quesData }) {
  const router = useRouter();
  const [response, setResponse] = useState(
    quesData.map((ques) => {
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
    const responseJSON = { responses: response };
    localStorage.setItem("exaimination-response", JSON.stringify(responseJSON));
    const result = axios
      .post(API_ENDPOINT, responseJSON)
      .then((res) => {
        console.log(res);
        localStorage.setItem("exaimination-result", JSON.stringify(res.data));
        router.push("/result");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="p-4 overflow-y-auto flex flex-col items-center">
      <h1 className="text-2xl font-bold my-4 text-yellow">Questions</h1>
      <div className="w-[80%]">
        {quesData.map((ques, index) => (
          <Question key={index} num={index} ques={ques} setAnswer={setAnswer} />
        ))}
      </div>
      <button
        type="submit"
        className=" my-6 px-auto py-auto rounded-md w-32 h-12 my-10 border-solid border-2 text-purple border-purple  hover:scale-105 hover:border-yellow hover:text-yellow hover:shadow-focus font-bold"
        onClick={handleSubmitResponse}
      >
        Submit
      </button>
    </div>
  );
}
