import React from "react";
import Option from "../../components/Option";

export default function Question() {
  return (
    <div className="p-4 my-4 shadow-lg">
      <p className="text-lg font-semibold mb-2">{questionText}</p>
      <div>
        {questionType === "true-false" ? (
          <div>
            <Option text="True" />
            <Option text="False" />
          </div>
        ) : questionType === "mcq" ? (
          options.map((option, index) => <Option key={index} text={option} />)
        ) : questionType === "free-response" ? (
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Type your response here..."
          ></textarea>
        ) : null}
      </div>
    </div>
  );
}

function MCQ() {
  return {};
}
