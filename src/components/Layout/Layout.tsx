import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";

import defaultTheme from "./defaultTheme";

const Layout = (): JSX.Element => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth="md" className="App">
        <Header />
        <Outlet />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
