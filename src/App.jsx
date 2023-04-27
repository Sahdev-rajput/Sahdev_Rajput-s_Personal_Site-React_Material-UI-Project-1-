import React from "react";
import Sidebar from "./Components/Sidebar.jsx";
import Rightbar from "./Components/Rightbar.jsx";
import Feed from "./Components/Feed.jsx";
import Stack from "@mui/joy/Stack";
import Navbar from "./Components/Navbar.jsx";
import Addbtn from "./Components/Addbtn.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

function App() {
  const [modem, setmode] = React.useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: modem
    }
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack
          spacing={{ xs: 2, md: 0 }}
          direction="row"
          justifyContent="space-between"
        >
          <Sidebar setMode={setmode} mode={modem} />
          <Feed />
          <Rightbar />
        </Stack>
        <Addbtn />
      </Box>
    </ThemeProvider>
  );
}
export default App;
