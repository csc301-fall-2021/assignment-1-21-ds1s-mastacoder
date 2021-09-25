import './App.css';
import Navbar from "./components/navigation/Navbar";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    h6: {
      fontFamily: ["Manrope"]
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
