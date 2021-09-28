import { Alert, Box, Button, Paper, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { getDiscountsInfo } from "../../../api/productsApi"

export default function Discounter(props) {
  const [code, setCode] = useState("");
  const [codes, setCodes] = useState([]);
  const [status, setStatus] = useState(0);

  function discountSubmit(e) {
    e.preventDefault();

    let foundMatch = false;
    codes.forEach(el => {
      if (el.discount_code === code){
        props.setDiscount({ discountType: el.reduction_type, amount: el.amount_off});
        foundMatch = true;
        setStatus(2);
        return;
      }
    });

    if (!foundMatch) setStatus(1);
  }

  useEffect(() => {
    getDiscountsInfo()
      .then(res => {
        if (res.status === 200 && res.data){
          setCodes(res.data.discounts);
        }
      })
      .catch(() => {
        setCodes([])
      });
  }, []);

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