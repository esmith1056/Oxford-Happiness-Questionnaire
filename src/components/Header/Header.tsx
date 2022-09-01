import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h1">Oxford Happiness Questionnaire</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
