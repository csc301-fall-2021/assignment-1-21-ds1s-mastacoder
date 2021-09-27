import './App.css';
import Navbar from "./components/navigation/Navbar";
import {
  Alert,
  Box,
  Container,
  ThemeProvider,
  Typography
} from "@mui/material";
import Theme from "./components/Theme";
import Storefront from "./components/storefront/Storefront";
import Checkout from "./components/checkout/Checkout";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState({0: 1});
  const [storeItems] = useState([
    { name: 'Apple iPad', price: 129.99, description: "This is an item description, ahsbahsbasdvdcd", image: "https://u.mkn.cx/misc/csc301p1/ipad.jpg"},
    { name: 'Apple iPad 2', price: 129.99, description: "This is another ipad", image: "https://u.mkn.cx/misc/csc301p1/ipad.jpg"},
  ]);

  /**
   * Add <itemId> of <quantity> to cart.
   * @param itemId
   * @param quantity
   */
  function addToCart(itemId, quantity) {
    setCartItems(prevState => {
      let cart = { ...prevState };
      cart[itemId] = itemId in cart ? cart[itemId] + quantity : quantity;
      return cart;
    })
  }

  /**
   * Remove an <itemId> of <quantity> from the cart. If <quantity> is -1, remove all items.
   * @param itemId
   * @param quantity
   */
  function removeFromCart(itemId, quantity) {
    if (!(itemId in cartItems))
      return;

    let removeAll = quantity === -1 || cartItems[itemId] <= quantity;
    setCartItems(prevState => {
      let cart = { ...prevState };
      if (removeAll)
        delete cart[itemId];
      else
        cart[itemId] = cart[itemId] - quantity;

      return cart;
    });
  }

  return (
    <ThemeProvider theme={Theme}>
      <Navbar />

      <Box mt={2} mb={2}>
        <Container maxWidth="xl">
          <Box mt={3} mb={2}>
            <Alert severity="info">
              Orders over $50 before taxes and after discounts come with free shipping! (Otherwise we charge a flat $5 fee for shipping)
            </Alert>
          </Box>

          <Typography variant="h3" component="h1">
            Storefront
          </Typography>

          <Box mt={1} mb={4}>
            <Storefront
              items={storeItems}
              addToCart={addToCart}
            />
          </Box>

          <Typography variant="h3" component="h1">
            Checkout
          </Typography>

          <Box mt={1}>
            <Checkout
              cart={cartItems}
              removeFromCart={removeFromCart}
              addToCart={addToCart}
              cartItems={cartItems}
              storeItems={storeItems}
            />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;