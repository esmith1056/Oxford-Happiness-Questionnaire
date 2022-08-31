import "fontsource-roboto";
import { AppBar, Toolbar, Container, Typography, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import questions from "./prop/questions.json";
import "./App.css";

type TQuestion = {
  text: string;
  flip?: boolean;
};

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "1.6rem",
    },
  },
});

const Question = ({
  qid,
  question,
}: {
  qid: string;
  question: TQuestion;
}): JSX.Element => {
  return (
    <p>
      {qid}. {question.text} {question.flip === true ? "(X)" : ""}
    </p>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Container maxWidth="md">
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="h1">
                Oxford Happiness Questionnaire
              </Typography>
            </Toolbar>
          </AppBar>
          <Box component="main" sx={{ padding: 1.5 }}>
            {Object.entries(questions.questions).map(
              ([qid, value]: [string, TQuestion]) => (
                <Question key={qid} qid={qid} question={value} />
              )
            )}
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
