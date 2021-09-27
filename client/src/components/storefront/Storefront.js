import { Grid } from "@mui/material";
import ItemCard from "./cards/ItemCard";

export default function Storefront(props) {
  return (
    <Grid container spacing={2}>
      {props.items.map((e, i) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ItemCard
            id={i}
            key={i}
            name={e.name}
            description={e.description}
            image={e.image}
            price={e.price}
            addToCart={props.addToCart}
          />
        </Grid>
      ))}
    </Grid>
  );
}