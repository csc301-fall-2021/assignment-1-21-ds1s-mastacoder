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

export default function ItemCard(props) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container spacing={0}>
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
          <Grid item xs={8} mt="auto" textAlign="right">
            <Box ml="auto" mr={2} mb={2}>
              <Button size="medium" variant="contained" color="primary">
                Add to cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  )
}