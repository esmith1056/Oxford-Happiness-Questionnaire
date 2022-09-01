import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const Error404 = () => {
  return (
    <Paper component="main" sx={{ padding: 1.5 }}>
      <Typography variant="h1">404 File Not Found</Typography>
      <Typography>The page you were looking for does not exist.</Typography>
    </Paper>
  );
};

export default Error404;
