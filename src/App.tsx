import "fontsource-roboto";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Question, { TQuestion } from "./components/question/Question";

import questions from "./prop/questions.json";
import "./App.css";
import { useState } from "react";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "1.6rem",
    },
  },
});

function App() {
  const [selections, setSelections] = useState({});

  const updateSelections = (qid: string, value: string) => {
    setSelections(() => ({ ...selections, [qid]: value }));
  };

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
          <Paper component="main" sx={{ padding: 1.5 }}>
            {Object.entries(questions.questions).map(
              ([qid, value]: [string, TQuestion]) => (
                <Question
                  key={qid}
                  qid={qid}
                  question={value}
                  scale={questions.scale}
                  cb={updateSelections}
                />
              )
            )}
          </Paper>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
