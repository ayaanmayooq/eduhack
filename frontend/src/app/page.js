"use client";
import { JetBrains_Mono } from "next/font/google";
import Intro from "../components/Intro";
import Loading from "./quiz/loading";
import QuestionPage from "./quiz/page";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="w-screen h-fit">
      <Intro router={router}></Intro>
    </div>
  );
}
