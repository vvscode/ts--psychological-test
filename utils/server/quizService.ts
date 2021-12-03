export const getQuiz = async () => [
    {
      question:
        "You’re really busy at work and a colleague is telling you their life story and personal woes. You:",
      type: "single",
      answers: [
        "Don’t dare to interrupt them",
        "Think it’s more important to give them some of your time; work can wait",
        "Listen, but with only with half an ear",
        "Interrupt and explain that you are really busy at the moment",
      ],
    },
    {
      question:
        "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:",
      type: "single",
      answers: [
        "Look at your watch every two minutes",
        "Bubble with inner anger, but keep quit",
        "Explain to other equally impatient peopl in the room that the doctor is always running late",
        "Complain in a loud voice, while tapping your foot impatiently",
      ],
    },
    {
      question:
        "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:",
      type: "single",
      answers: [
        "Don’t dare contradict them",
        "Think that they are obviously right",
        "Defend your own point of view, tooth and nail",
        "Continuously interrupt your colleague",
      ],
    },
    {
      question: "You are taking part in a guided tour of a museum. You:",
      type: "single",
      answers: [
        "Are a bit too far towards the back so don’t really hear what the guide is saying",
        "Follow the group without question",
        "Make sure that everyone is able to hear properly",
        "Are right up the front, adding your own comments in a loud voice",
      ],
    },
  ];

export const getQuizResults = async (_data: {
  question: string;
  answers: string[];
  type: "single";
}) => 
  // https://en.wikipedia.org/wiki/Barnum_effect
   [
    "You have a great need for other people to like and admire you.",
    "You have a tendency to be critical of yourself.",
    "You have a great deal of unused capacity which you have not turned to your advantage.",
    "While you have some personality weaknesses, you are generally able to compensate for them.",
    "Your sexual adjustment has presented problems for you.",
    "Disciplined and self-controlled outside, you tend to be worrisome and insecure inside.",
    "At times you have serious doubts as to whether you have made the right decision or done the right thing.",
    "You prefer a certain amount of change and variety and become dissatisfied when hemmed in by restrictions and limitations.",
    "You pride yourself as an independent thinker and do not accept others' statements without satisfactory proof.",
    "You have found it unwise to be too frank in revealing yourself to others.",
    "At times you are extroverted, affable, sociable, while at other times you are introverted, wary, reserved.",
    "Some of your aspirations tend to be pretty unrealistic.",
    "Security is one of your major goals in life.",
  ]
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.floor(Math.random() * 4 + 1))
    .join("\n")
;
