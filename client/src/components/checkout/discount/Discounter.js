import { Alert, Box, Button, Paper, TextField } from "@mui/material";
import { useState } from "react";

export default function Discounter(props) {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState(0);

  function discountSubmit(e) {
    e.preventDefault();
    if (code === "FIFTYOFF")
      props.setDiscount({ discountType: "percent", amount: 0.5 });
    else if (code === "FIVEOFF")
      props.setDiscount({ discountType: "flat", amount: 5 });
    else {
        setStatus(1);
        return;
    }

    setStatus(2);
  }

  return (
    <Paper elevation={2}>
      <Box p={2}>
        {status !== 0 && (
          <Box mb={2}>
            <Alert severity={status === 1 ? "error" : "success"}>
              {status === 1 ? "The code entered is not valid" : "Code applied successfully!"}
            </Alert>
          </Box>
        )}
        <form onSubmit={discountSubmit}>
          <TextField
            id="outlined-basic"
            label="Discount Code (Limit 1)"
            variant="outlined"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            fullWidth
          />
          <Box mt={1}>
            <Button
              size="large"
              color="primary"
              variant="contained"
              type="submit"
              fullWidth
            >
              Apply
            </Button>
          </Box>
        </form>
      </Box>
    </Paper>
  );
}