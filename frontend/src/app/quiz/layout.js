"use client";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
import Quiz from "./page";
import { useRouter } from "next/navigation";
import axios from "axios";

const API_ENDPOINT = "http://localhost:6969/api/inputtext";

export default function Layout() {
  const router = useRouter();
  const [quesData, setQuesData] = useState(undefined);

  useEffect(() => {
    if (quesData !== undefined) {
      return;
    }
    const postData = localStorage.getItem("exAImination-input");
    if (postData == undefined) {
      router.push("/");
      return;
    }
    async function load() {
      console.log("Posting to backend", postData);
      return await axios
        .post(API_ENDPOINT, JSON.parse(postData))
        .then((res) => {
          console.log(res);
          setQuesData(res.data);
        })
        .catch((err) => console.log(err));
    }
    load();
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      {quesData !== undefined ? <Quiz quesData={quesData} /> : <Loading />}
    </Suspense>
  );
}
