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
  text,
  scale,
  flip,
  handleSelection,
}: {
  qid: string;
  text: string;
  scale: Record<string, string>;
  handleSelection: any;
  flip?: boolean;
}): JSX.Element => {
  const [selected, setSelected] = useState("");

  const handleChange =
    (qid: string) => (event: ChangeEvent<HTMLInputElement>) => {
      const value = (event.target as HTMLInputElement).value;
      setSelected(value);
      handleSelection(qid, value);
    };

  return (
    <Box sx={{ marginBottom: 5 }}>
      <FormLabel>
        {qid}. {text} {flip === true ? "(X)" : ""} {selected}
      </FormLabel>
      <RadioGroup value={selected} onChange={handleChange(qid)}>
        {Object.entries(scale).map(([v, l]) => (
          <FormControlLabel key={v} value={v} control={<Radio />} label={l} />
        ))}
      </RadioGroup>
    </Box>
  );
};

export default Question;
