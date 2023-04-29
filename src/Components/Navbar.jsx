import { AppBar, Avatar, ThemeProvider, Toolbar, createTheme } from "@mui/material";

const Navbar = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#fafafa",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="relative">
        <Toolbar>
          <Avatar
            alt="Big Floppa"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Big_Floppa_and_Justin_2_%28cropped%29.jpg/1200px-Big_Floppa_and_Justin_2_%28cropped%29.jpg"
          />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
