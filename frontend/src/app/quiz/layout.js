import { Suspense } from "react";
import Loading from "./loading";
import QuestionPage from "./page";

export default function Quiz() {
  return (
    <Suspense fallback={<Loading />}>
      <QuestionPage />
    </Suspense>
  );
}
