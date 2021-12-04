export const getQuizData = async () => fetch("/api/quiz").then((response) => response.json());

export const getQuizResult = async (
  quizData: { question: string; answers: string[] }[]
) => fetch(`/api/quiz`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(quizData),
  }).then((response) => response.json());
