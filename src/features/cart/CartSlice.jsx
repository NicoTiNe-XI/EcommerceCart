import { createSlice } from "@reduxjs/toolkit";
// Initializing the state with an empty array for cart items, and setting total price and quantity to 0
const initialState = {
  cartItems: [],
  totalPrice: 0,
  quantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add the product to the cart
    // Make variable to check for if the item already exists array.prototype.find method
    // If it's existing it will add its quantity by 1
    // If it's not it will add a new item to the cart with quantity of one
    // And then it update the global total price inside the initial state and quantity
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }

      state.totalPrice += product.price;
      state.quantity += 1;
    },
    // Remove the product from the cart
    // Extract the product id to be used
    // Finding the product in the cart based on its ID
    // If the product exists in the cart, proceed with removing it
    // Remove the product from the cartItems array by filtering it out
    // And then it update the global total price inside the initial state and quantity
    removeFromCart: (state, action) => {
      const { productId } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === productId
      );

      if (existingItem) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== productId
        );
        state.totalPrice -= existingItem.price * existingItem.quantity;
        state.quantity -= existingItem.quantity;
      }
    },
    // Resetting the cartItems array to an empty array, effectively clearing the cart
    // Resetting the total price and total quantity to 0
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.quantity = 0;
    },
    // Increase quantity by one and update the totalPrice
    // And then it updates the global total price inside the initial state and quantity
    incrementQuantity: (state, action) => {
      const { productId } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === productId
      );

      if (existingItem) {
        existingItem.quantity += 1;
        state.totalPrice += existingItem.price;
        state.quantity += 1;
      }
    },
    // Decrease quantity by one and update the totalPrice
    // And then it update the global total price inside the initial state and quantity
    decrementQuantity: (state, action) => {
      const { productId } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === productId
      );

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.totalPrice -= existingItem.price;
        state.quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
