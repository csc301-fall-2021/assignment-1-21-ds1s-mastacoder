import { Box, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Calculator(props) {
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    let calculatedSubtotal = 0;
    let calculatedDiscount = 0;
    Object.keys(props.cartItems).map((e) => {
      calculatedSubtotal += props.storeItems[e].price * props.cartItems[e];
    });

    if (props.discount !== null) {
      if (props.discount.discountType === "percent")
        calculatedDiscount = calculatedSubtotal * props.discount.amount;
      else
        calculatedDiscount = Math.min(calculatedSubtotal, props.discount.amount);
    }

    setSubtotal(calculatedSubtotal - calculatedDiscount);
    setDiscount(calculatedDiscount);
  }, [props.cartItems, props.discount]);

  return (
    <Paper elevation={2}>
      <Box p={2}>
        <Typography variant="body1" component="h2">
          Discounts: <b>${discount.toFixed(2)}</b>
        </Typography>
        <hr />
        <Typography variant="h5" component="h2" fontSize={20}>
          Subtotal: <b>${subtotal.toFixed(2)}</b>
        </Typography>
        <Typography variant="body1" component="h2">
          Tax: <b>${(subtotal * 0.13).toFixed(2)}</b>
        </Typography>
        <Typography variant="body1" component="h2">
          Shipping: <b>${subtotal < 50 ? "5.00" : "0.00"}</b>
        </Typography>
        <hr />
        <Typography variant="h5" component="h2" fontSize={30}>
          Total: <b>${((subtotal) * 1.13 + (subtotal < 50 ? 5 : 0)).toFixed(2)}</b>
        </Typography>
      </Box>
    </Paper>
  );
}