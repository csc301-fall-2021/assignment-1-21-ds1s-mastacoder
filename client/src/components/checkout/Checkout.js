import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography
} from "@mui/material";

export default function Checkout() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={8}>
        <Paper elevation={2}>
          <Box p={3}>
            <Box py={2} borderTop={"2px solid grey"} borderBottom={"2px solid grey"}>
              <Grid container spacing={4}>
                <Grid item xs={4} m="auto">
                  <Typography variant="h5" component="h2">
                    Apple iPad
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel>Quantity</InputLabel>
                    <Select
                      value={2}
                      label="Age"
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4} m="auto">
                  <Button size="large" variant="contained" color="primary">
                    Remove
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} lg={4} >
        <Paper elevation={2}>
          <Box p={2}>
            <TextField id="outlined-basic" label="Discount Code" variant="outlined" fullWidth />
            <Box mt={1}>
              <Button size="large" color="primary" variant="contained" fullWidth>Apply</Button>
            </Box>
          </Box>
        </Paper>

        <Box mt={2} />

        <Paper elevation={2}>
          <Box p={2}>
            <Typography variant="h5" component="h2" fontSize={20}>
              Subtotal: <b>$14.99</b>
            </Typography>
            <Typography variant="body1" component="h2">
              Tax: <b>$0.69</b>
            </Typography>
            <Typography variant="body1" component="h2">
              Shipping: <b>$5.00</b>
            </Typography>
            <Typography variant="body1" component="h2">
              Discounts: -<b>$0.00</b>
            </Typography>
            <hr />
            <Typography variant="h5" component="h2" fontSize={30}>
              Total: <b>$20.14</b>
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}