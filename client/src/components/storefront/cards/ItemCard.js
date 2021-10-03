import {
  Box, Button, Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from "@mui/material";
import { useState } from "react";

export default function ItemCard(props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <b>{props.name}</b> (${props.price})
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 70 }}>
              <InputLabel>Quantity</InputLabel>
              <Select
                value={quantity}
                label="Quantity"
                onChange={(e, v) => setQuantity(v.props.value)}
              >
                {[...Array(99)].map((e, i) => (
                  <MenuItem value={i + 1} key={i + 1}>{i + 1}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={8} mt="auto" textAlign="right">
            <Box ml="auto" mr={2} mb={2}>
              <Button
                size="medium"
                variant="contained"
                color="primary"
                onClick={() => props.addToCart(props.id, quantity)}
                disabled={props.cartItems[props.id] === 99}
              >
                Add to cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  )
}