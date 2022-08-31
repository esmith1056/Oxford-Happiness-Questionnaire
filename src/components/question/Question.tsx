import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { useState, ChangeEvent } from "react";

export type TQuestion = {
  text: string;
  flip?: boolean;
};

const Question = ({
  qid,
  question,
  scale,
  cb,
}: {
  qid: string;
  question: TQuestion;
  scale: Record<string, string>;
  cb: any;
}): JSX.Element => {
  const [selected, setSelected] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setSelected(value);
    cb(qid, value);
  };

  return (
    <Box sx={{ marginBottom: 5 }}>
      <FormLabel>
        {qid}. {question.text} {question.flip === true ? "(X)" : ""} {selected}
      </FormLabel>
      <RadioGroup value={selected} onChange={handleChange}>
        {Object.entries(scale).map(([v, l]) => (
          <FormControlLabel key={v} value={v} control={<Radio />} label={l} />
        ))}
      </RadioGroup>
    </Box>
  );
};

export default Question;
