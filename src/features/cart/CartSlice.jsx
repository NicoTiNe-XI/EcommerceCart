import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
  quantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      if (!product) {
        console.error("Product is undefined:", action.payload);
        return;
      }
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
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.quantity = 0;
    },
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
    decrementQuantity: (state, action) => {
      const { productId } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === productId
      );

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.totalPrice -= existingItem.price;
        state.quantity -= 1;
      } else if (existingItem && existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== productId
        );
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
