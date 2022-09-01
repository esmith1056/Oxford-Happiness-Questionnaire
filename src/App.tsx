import Questionnaire from "./routes/Questionnaire/Questionnaire";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Questionnaire />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
