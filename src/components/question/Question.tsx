import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

export type TQuestion = {
  text: string;
  flip?: boolean;
};

const Question = ({
  qid,
  question,
  scale,
}: {
  qid: string;
  question: TQuestion;
  scale: Record<string, string>;
}): JSX.Element => {
  return (
    <Box sx={{ marginBottom: 5 }}>
      <FormLabel>
        {qid}. {question.text} {question.flip === true ? "(X)" : ""}
      </FormLabel>
      <RadioGroup>
        {Object.entries(scale).map(([v, l]) => (
          <FormControlLabel key={v} value={v} control={<Radio />} label={l} />
        ))}
      </RadioGroup>
    </Box>
  );
};

export default Question;
