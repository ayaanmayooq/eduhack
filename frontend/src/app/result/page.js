"use client";
import { useEffect, useState } from "react";

export default function Result() {
  const [result, setResult] = useState(undefined);

  useEffect(() => {
    let res = JSON.parse(localStorage.getItem("exaimination-score"));
    if (res !== undefined) {
      setResult(res);
    }
    console.log(res);
  }, []);
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center overflow-y-auto">
      <h1 className="text-2xl font-bold mt-10">Result</h1>
      {result !== undefined ? (
        <>
          <h3
            type="submit"
            className="mx-auto px-4 py-2 rounded-md w-fit h-fit my-10 border-solid border-2 text-yellow border-yellow font-bold"
          >
            You got {result.assessment.score} questions right
          </h3>
          {result.quiz.map((ques, index) => {
            return (
              <div className="my-4 w-[90%]">
                <p className="text-purple my-2">{ index + 1}. {ques.text}</p>
                <p className="text-gray ml-6">{result.assessment.responses[index].explanation}</p>
              </div>
            );
          })}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
