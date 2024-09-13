import "./index.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "./features/cart/Cart";
import { useState } from "react";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false); // State to manage the visibility of the cart

  // Function to toggle the cart's visibility
  const toggleCart = () => {
    setIsCartOpen((prevState) => !prevState); // Inverts the current state to show/hide the cart
  };

  // Function to open the cart when an item is added
  const onAddItem = () => {
    setIsCartOpen(true); // Sets the cart visibility to true, ensuring the cart opens and displays the newly added item
  };

  return (
    <>
      <Header toggleCart={toggleCart} />
      <Products onAddItem={onAddItem} />
      <Cart onClose={toggleCart} isCartOpen={isCartOpen} />
    </>
  );
}

export default App;
