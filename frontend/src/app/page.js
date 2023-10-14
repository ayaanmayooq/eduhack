"use client";
import { JetBrains_Mono } from "next/font/google";
import Intro from "../components/Intro";
import Loading from "@/components/Loading";
import QuestionPage from "./QuestionsPage";

export default function Home() {
  return (
    <div className="w-screen h-fit">
      {/* <Loading></Loading> */}
      <QuestionPage></QuestionPage>
      {/* <Intro></Intro> */}
      {/* <Input></Input> */}
    </div>
  );
}
