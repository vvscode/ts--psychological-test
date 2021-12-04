import { FormEvent } from "react";

type QuestionCardProps = {
  question: string;
  answers: string[];
  onAnswer: (data: {
    question: string;
    answers: [string, ...string[]];
  }) => void;
};

export const QuestionCard = function QuestionCard({
  question,
  answers,
  onAnswer,
}: QuestionCardProps) {
  const onSubmit = (event: FormEvent) => {
    const form = event.target as HTMLFormElement;
    event.preventDefault();
    onAnswer({
      question,
      answers: [form.answer.value],
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <p>{question}</p>
      {answers.map((answer, index) => (
        <label key={`${answer}_${index.toString()}`} htmlFor={`answer${index}`}>
          <input
            type="radio"
            name="answer"
            value={answer}
            id={`answer${index}`}
            required
          />
          {answer}
        </label>
      ))}
      <button type="submit">Answer</button>
    </form>
  );
};
