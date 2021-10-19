import { useState } from "react";
import Statistics from "./components/statistic/Statistics";
import Section from "./components/section/Section";
import FeedbackOptions from "./components/feedbackOptions/FeedbackOptions";

export default function App() {
  const [good, setGood] = useState(0);

  const [neutral, setNeutral] = useState(0);

  const [bad, setBad] = useState(0);

  const title = {
    feedback: "Please leave feedback",
    statistic: "Statistic",
  };

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    return (good / countTotalFeedback()) * 100;
  }

  function onLeafFeedback(e) {
    switch (e.target.name) {
      case "Good":
        setGood((prevState) => prevState + 1);
        break;
      case "Bad":
        setBad((prevState) => prevState + 1);
        break;
      case "Neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      default:
        return;
    }
  }
  return (
    <div>
      <Section title={title.feedback}>
        <FeedbackOptions
          options={["Good", "Neutral", "Bad"]}
          onLeaveFeedback={onLeafFeedback}
        />
        <Section title={title.statistic}>
          {good || bad || neutral > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positive={countPositiveFeedbackPercentage()}
            />
          ) : (
            <p>No feedback given</p>
          )}
        </Section>{" "}
      </Section>
    </div>
  );
}
