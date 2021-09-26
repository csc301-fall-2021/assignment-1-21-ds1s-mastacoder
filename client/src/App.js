import './App.css';
import Navbar from "./components/navigation/Navbar";
import {
  Box, Button,
  Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select,
  ThemeProvider,
  Typography
} from "@mui/material";
import Theme from "./components/Theme";
import Storefront from "./components/storefront/Storefront";
import Checkout from "./components/checkout/Checkout";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Navbar />

      <Box mt={2} mb={2}>
        <Container maxWidth="xl">
          <Typography variant="h3" component="h1">
            Storefront
          </Typography>

          <Box mt={1} mb={4}>
            <Storefront />
          </Box>

          <Typography variant="h3" component="h1">
            Checkout
          </Typography>

          <Box mt={1}>
            <Checkout />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;