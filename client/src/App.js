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
import { useEffect, useState } from "react";
import { getProductsInfo } from "./api/productsApi";

function App() {
  const [cartItems, setCartItems] = useState({});
  const [storeItems, setStoreItems] = useState([]);
  
  /**
   * Add <itemId> of <quantity> to cart.
   * @param itemId
   * @param quantity
   */
  function addToCart(itemId, quantity) {
    setCartItems(prevState => {
      let cart = { ...prevState };
      if (itemId in cart){
        if (cart[itemId] + quantity <= 99)
          cart[itemId] += quantity;
        else
          cart[itemId] = 99;
      }
      else{
        cart[itemId] = quantity;
      }
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
  
  useEffect(() => {
    getProductsInfo()
      .then(res => {
        if (res.status === 200 && res.data){
          setStoreItems(res.data.products);
        }
      })
      .catch(() => {
        setStoreItems([]);
      })
  }, []);

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
          <Box mt={3} mb={2}>
            <Alert severity="info">
              A maximum quanitiy of 99 can be purchased for each select item.
            </Alert>
          </Box>

          

          <Typography variant="h3" component="h1">
            Storefront
          </Typography>

          <Box mt={1} mb={4}>
            <Storefront
              items={storeItems}
              addToCart={addToCart}
              cartItems={cartItems}
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