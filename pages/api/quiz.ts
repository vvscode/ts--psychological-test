// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  getQuiz,
  getQuizResults,
  isQuizCompleted,
} from "../../utils/server/quizService";
import { withApiErrorHandler } from "../../utils/server/withApiErrorHandler";

export default withApiErrorHandler(async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "GET") {
    const quiz = await getQuiz();
    res.status(200).json({ data: quiz });
    return;
  }
  if (req.method === "POST") {
    const quizData = req.body;
    const isQuizDataValid = await isQuizCompleted(quizData);
    if (!isQuizDataValid) {
      res.status(400).json({ error: "Invalid quiz data" });
      return;
    }
    const quizResult = await getQuizResults(quizData);
    res.status(200).json({ data: quizResult });
    return;
  }
  res.status(405).json({ error: "Method not allowed" });
});
