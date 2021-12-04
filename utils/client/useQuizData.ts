import { useEffect, useState } from "react";
import { getQuizData, getQuizResult } from "./quizApi";

enum QUIZ_STATE {
  LOADING = "LOADING",
  LOADED = "LOADED",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}

type Answer = { question: string; answers: [string, ...string[]] };

type Question = { question: string; answers: string[] };

export const useQuizData = () => {
  const [quizState, setQuizState] = useState<QUIZ_STATE>(QUIZ_STATE.LOADING);
  const [quizData, setQuizData] = useState<Question[]>([]);
  const [quizAnswersData, setQuizAnswersData] = useState<Answer[]>([]);
  const [quizResult, setQuizResult] = useState<string | null>(null);
  const isQuizCompleted =
    quizAnswersData.length && quizAnswersData.length === quizData.length;

  useEffect(() => {
    (async () => {
      setQuizState(QUIZ_STATE.LOADING);
      const data = await getQuizData();
      setQuizData(data.data);
      setQuizState(QUIZ_STATE.LOADED);
    })();
  }, []);

  useEffect(() => {
    if (isQuizCompleted) {
      setQuizState(QUIZ_STATE.LOADING);

      (async () => {
        const fetchedQuizResult = await getQuizResult(quizAnswersData);
        setQuizState(QUIZ_STATE.COMPLETED);
        setQuizResult(fetchedQuizResult.data);
      })();
    }
  }, [isQuizCompleted]);

  const addAnswer = (answerData: Answer) => {
    setQuizAnswersData([...quizAnswersData, answerData]);
  };

  const retakeTest = () => {
    setQuizAnswersData([]);
    setQuizResult(null);
  };

  const nextQuestion = quizData[quizAnswersData.length];
  const progress = quizAnswersData.length;

  return {
    quizState,
    quizData,
    addAnswer,
    nextQuestion,
    quizResult,
    progress,
    retakeTest,
  };
};
