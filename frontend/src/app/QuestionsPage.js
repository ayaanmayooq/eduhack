import React from 'react';
import Question from '../components/Question';

const QuestionPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Questions</h1>
      <Question
        questionType="true-false"
        questionText="Is the sky blue?"
      />
      <Question
        questionType="mcq"
        questionText="What is the capital of France?"
        options={['London', 'Berlin', 'Paris', 'Madrid']}
      />
      <Question
        questionType="free-response"
        questionText="Share your thoughts on the topic:"
      />
    </div>
  );
};

export default QuestionPage;
