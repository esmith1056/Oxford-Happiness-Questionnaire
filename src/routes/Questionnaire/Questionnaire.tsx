import { useState } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Question, { TQuestion } from "../../components/Question/Question";
import content from "../../prop/content.json";

const Questionnaire = () => {
  const [totalQuestions] = useState(
    () => Object.keys(content.questions).length
  );
  const [selections, setSelections] = useState({});
  const [numAnswered, setNumAnswered] = useState(0);

  const handleSelection = (qid: string, value: string) => {
    setSelections((prevValue: any) => {
      const newValue = { ...prevValue, [qid]: value };
      setNumAnswered(() => Object.keys(newValue).length);
      return newValue;
    });
  };

  return (
    <Paper component="main" sx={{ padding: 1.5 }}>
      {Object.entries(content.questions).map(
        ([qid, question]: [string, TQuestion]) => (
          <Question
            key={qid}
            qid={qid}
            text={question.text}
            flip={question.flip}
            scale={content.scale}
            handleSelection={handleSelection}
          />
        )
      )}
      <p>
        {totalQuestions - numAnswered} out of {totalQuestions} questions
        remaining to calculate your score.
      </p>
      <Button variant="contained" disabled={true}>
        Calculate Your Happiness Score
      </Button>
    </Paper>
  );
};

export default Questionnaire;
