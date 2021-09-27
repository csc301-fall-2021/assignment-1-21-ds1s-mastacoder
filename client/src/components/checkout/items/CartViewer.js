import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Typography } from "@mui/material";

export default function CartViewer(props) {
  function updateQuantity(itemId, newQuantity) {
    let oldQuantity = props.cartItems[itemId];
    if (newQuantity < oldQuantity)
      props.removeFromCart(itemId, oldQuantity - newQuantity);
    else
      props.addToCart(itemId, newQuantity - oldQuantity);
  }

  return (
    <Paper elevation={2}>
      <Box p={3}>
        {Object.keys(props.cartItems).length === 0 && (
          <Typography variant="body1" component="div">
            Your cart is empty, try adding some items to it!
          </Typography>
        )}

        {Object.keys(props.cartItems).map((e) => (
          <Box py={2} borderTop={"1px solid grey"} borderBottom={"1px solid grey"}>
            <Grid container spacing={4}>
              <Grid item xs={5} m="auto">
                <Typography variant="h5" component="div">
                  <b>{props.storeItems[e].name}</b>
                </Typography>
                <Typography variant="body1" component="div">
                  Each: ${props.storeItems[e].price} | Total: <b>${(props.storeItems[e].price * props.cartItems[e]).toFixed(2)}</b>
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 70 }}>
                  <InputLabel>Quantity</InputLabel>
                  <Select
                    value={props.cartItems[e]}
                    label="Quantity"
                    onChange={(_, v) => updateQuantity(e, v.props.value)}
                  >
                    {[...Array(99)].map((_, i) => (
                      <MenuItem value={i + 1} key={i + 1}>{i + 1}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4} m="auto">
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={() => props.removeFromCart(e, -1)}
                >
                  Remove
                </Button>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}