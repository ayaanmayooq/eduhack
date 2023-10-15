"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function Input() {
  const [file, setFile] = useState(null);
  const [fileData, setFileData] = useState("");
  const [text, setText] = useState("");
  const [numMCQ, setNumMCQ] = useState(1);
  const [numTF, setNumTF] = useState(1);
  const [numFreeResponse, setNumFreeResponse] = useState(1);
  const router = useRouter();
  let answer = "1";

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    //console.log(selectedFile);
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.length === 0 && fileData.length === 0) {
      return;
    }
    const postData = {
      text: text + "\n" + fileData,
      numMCQ: numMCQ,
      numTF: numTF,
      numFreeResponse: numFreeResponse,
    };
    localStorage.setItem("exAImination-input", JSON.stringify(postData));
    router.push("/quiz");
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleNumMCQChange = (e) => {
    setNumMCQ(parseInt(e.target.value));
  };

  const handleNumTFChange = (e) => {
    setNumTF(parseInt(e.target.value));
  };

  const handleNumFreeResponse = (e) => {
    setNumFreeResponse(e.target.value);
  };

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileText = event.target.result;
        setFileData(fileText);
      };
      const result = reader.readAsText(file);
    }
  }, [file]);

  return (
    <div className="p-4 flex flex-col justify-center h-screen w-screen absolute z-0 bg-superdark min-h-fit overflow-y-auto">
      <h1 className="text-2xl font-bold self-center mb-4 text-yellow">Input</h1>
      <div className="flex flex-row justify-center min-h-fit my-10">
        <div className="w-1/2 pr-4 flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col my-10">
            <label
              for="formFile"
              className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
            >
              Upload .txt
            </label>
            <input
              className="relative mb-4 block w-full min-w-0 flex-auto rounded border border-solid border-purple border-2 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-white  file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-purple file:px-3 file:py-[0.32rem] file:text-superdark  file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:outline-none focus:border-yellow file:focus:bg-yellow focus:shadow-focus
              hover:border-yellow file:hover:bg-yellow hover:shadow-focus"
              type="file"
              accept=".txt"
              id="formFile"
              onChange={handleFileChange}
            />
          </div>
          <div className="mb-4 ">
            <label>MCQ: </label>
            <input
              type="number"
              value={numMCQ}
              onChange={handleNumMCQChange}
              min="0"
              max="20"
              className="w-16 border border-2 p-1 rounded bg-superdark border-purple focus:border-yellow focus:outline-none focus:shadow-focus"
            />
          </div>
          <div className="mb-4">
            <label>True/False: </label>
            <input
              type="number"
              value={numTF}
              onChange={handleNumTFChange}
              min="0"
              max="20"
              className="w-16 border border-2 p-1 rounded bg-superdark border-purple focus:border-yellow focus:outline-none focus:shadow-focus"
            />
          </div>
          <div className="mb-4">
            <label>Free Response: </label>
            <input
              type="number"
              value={numFreeResponse}
              onChange={handleNumFreeResponse}
              className="w-16 border border-2 p-1 rounded bg-superdark border-purple focus:border-yellow focus:outline-none focus:shadow-focus"
              min="0"
              max="20"
            />
          </div>
        </div>
        <div className="w-1/2 flex items-center">
          <textarea
            value={text}
            onChange={handleTextChange}
            placeholder="Or paste your text here..."
            rows="20"
            className="mb-4 p-2 w-[90%] border border-2 rounded bg-superdark text-gray border-purple focus:border-yellow focus:outline-none focus:shadow-focus"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mx-auto px-4 py-2 rounded-md w-32 h-12 my-10 border-solid border-2 text-purple border-purple hover:scale-105 hover:border-yellow hover:text-yellow hover:shadow-focus font-bold"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}
