import type { NextPage } from "next";
import React from "react";
import { Navbar } from "../components/Navbar";
import { useQuizData } from "../utils/client/useQuizData";
import { QuestionCard } from "../components/QuestionCard";

const TakeTest: NextPage = function TakeTest() {
  const {
    quizState,
    quizData,
    nextQuestion,
    addAnswer,
    progress,
    quizResult,
    retakeTest,
  } = useQuizData();

  return (
    <>
      <Navbar />
      {quizState === "LOADING" ? <p aria-busy="true">Loading...</p> : null}

      {nextQuestion ? (
        <>
          <progress value={progress} max={quizData.length} />
          <QuestionCard
            question={nextQuestion.question}
            answers={nextQuestion.answers}
            onAnswer={addAnswer}
          />
        </>
      ) : null}

      {quizResult ? (
        <>
          <p role="note">{quizResult}</p>
          <button onClick={retakeTest} type="button">
            Retake
          </button>
        </>
      ) : null}
    </>
  );
};

export default TakeTest;
