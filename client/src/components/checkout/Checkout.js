import {
  Box,
  Grid,
} from "@mui/material";
import CartViewer from "./items/CartViewer";
import Discounter from "./discount/Discounter";
import Calculator from "./calculator/Calculator";
import { useState } from "react";

export default function Checkout(props) {
  const [discount, setDiscount] = useState(null); // percent | flat

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={8}>
        <CartViewer
          storeItems={props.storeItems}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
          cartItems={props.cartItems}
        />
      </Grid>
      <Grid item xs={12} lg={4}>
        <Discounter
          setDiscount={setDiscount}
        />

        <Box mt={2} />
        <Calculator
          storeItems={props.storeItems}
          cartItems={props.cartItems}
          discount={discount}
        />
      </Grid>
    </Grid>
  );
}