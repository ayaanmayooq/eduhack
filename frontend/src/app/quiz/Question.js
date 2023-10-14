"use client";
import React, { useState } from "react";

export default function Question({ num, ques, setAnswer }) {
  const type = ques.type;
  return (
    <div id={num} className="">
      {type === "MCQ" ? (
        <MCQ num={num} ques={ques} update={(val) => setAnswer(num, val)} />
      ) : type === "TF" ? (
        <TF num={num} ques={ques} update={(val) => setAnswer(num, val)} />
      ) : (
        <FR num={num} ques={ques} update={(val) => setAnswer(num, val)} />
      )}
    </div>
  );
  // <div className="p-4 my-4 shadow-lg">
  //   <p className="text-lg font-semibold mb-2">{questionText}</p>
  //   <div>
  //     {questionType === "true-false" ? (
  //       <div>
  //         <Option text="True" />
  //         <Option text="False" />
  //       </div>
  //     ) : questionType === "mcq" ? (
  //       options.map((option, index) => <Option key={index} text={option} />)
  //     ) : questionType === "free-response" ? (
  //       <textarea
  //         className="w-full p-2 border rounded"
  //         placeholder="Type your response here..."
  //       ></textarea>
  //     ) : null}
  //   </div>
  // </div>
}

function MCQ({ num, ques, update }) {
  const { text, options } = ques;
  return (
    <div>
      <h2>{text}</h2>
      {options.map((optionText, index) => {
        return (
          <div>
            <input
              type="radio"
              name={num}
              onChange={() => update(String.fromCharCode(index))}
              className="border-purple bg-purple shadow-hover checked:border-yellow checked:shadow-focus"
            />
            <label className="text-gray w-20 h-20">{optionText}</label>
          </div>
        );
      })}
    </div>
  );
}

function TF({ num, ques, update }) {
  const { text } = ques;
  return (
    <div>
      <h2>{text}</h2>
      {["True", "False"].map((optionText, index) => {
        return (
          <div>
            <input
              type="radio"
              name={num}
              onChange={() => update(optionText.toLowerCase)}
              className="text-gray w-40 h-20"
            />
            <label className="text-gray w-20 h-20">{optionText}</label>
          </div>
        );
      })}
    </div>
  );
}

function FR({ num, ques, update }) {
  const { text } = ques;
  const [textResponse, setTextResponse] = useState("");

  const handleResponseChange = (e) => {
    setTextResponse(e.target.value);
  };
  return (
    <div>
      <h2>{text}</h2>
      <textarea
        value={textResponse}
        onChange={handleResponseChange}
        placeholder="Your response here"
        rows="10"
        className="mb-4 p-2 w-[60%] border border-2 rounded bg-superdark text-gray border-purple focus:border-yellow focus:outline-none focus:shadow-focus"
      />
      <button onClick={() => update(textResponse)}>Save</button>
    </div>
  );
}
