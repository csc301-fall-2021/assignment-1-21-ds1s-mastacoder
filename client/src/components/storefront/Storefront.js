import { Grid } from "@mui/material";
import ItemCard from "./cards/ItemCard";

export default function Storefront() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ItemCard name={"Apple iPad"} description={"Lorem ipsum"} image={"https://u.mkn.cx/misc/csc301p1/ipad.jpg"} />
      </Grid>
    </Grid>
  );
}