import Questionnaire from "./routes/Questionnaire/Questionnaire";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Error404 from "./routes/Error404/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<Error404 />} />
          <Route index element={<Questionnaire />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
