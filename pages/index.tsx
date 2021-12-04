import type { NextPage } from "next";
import React from "react";
import { Navbar } from "../components/Navbar";

const Home: NextPage = function () {
  return (
    <div>
      <Navbar />
      <h1>About our test</h1>
      <p>
        In 1947, a psychologist named Ross Stagner asked a number of personnel
        managers to take a personality test. After they had taken the test,
        Stagner, presented each of them with feedback. Each of the managers was
        then asked how accurate the assessment of him or her was. More than half
        described the assessment as accurate, and almost none described it as
        wrong. On average, the students rated its accuracy as 4.30 on a scale of
        0 (very poor) to 5 (excellent).
      </p>
    </div>
  );
};

export default Home;
