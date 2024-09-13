import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} from "./CartSlice";
import { nanoid } from "@reduxjs/toolkit";
import "./Cart.css";

// eslint-disable-next-line react/prop-types
export default function Cart({ onClose, isCartOpen }) {
  // Access the cartItems array and totalPrice from the Redux store
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    // Render the cart sidebar based on the isCartOpen state
    <aside className={`cart-sidebar ${isCartOpen ? "open" : ""}`}>
      {/* Close button to hide the cart, triggering the onClose function */}
      <button className="close-btn" onClick={onClose}>
        ×
      </button>
      <div className="cart-header">
        <h2>Items</h2>
        {/* Clear all items from the cart by dispatching the clearCart action */}
        <button className="clear-btn" onClick={() => dispatch(clearCart())}>
          Clear
        </button>
      </div>
      <ul>
        {/* Render cart items if there are any; otherwise, display an empty message */}
        {cartItems.length > 0 ? (
          // Map through products passed data and create JSX for each cartItems
          cartItems.map((item) => (
            // Use nanoid alongside item.id to ensure unique keys for each list item
            <li key={`${item.id}-${nanoid()}`} className="cart-item">
              <div className="row">
                <img src={item.image} alt={item.title} />
                <div className="product-data">
                  <h3>{item.title}</h3>
                  <p>{item.price} EGP</p>
                </div>
              </div>
              <div className="increment-controls">
                {/* Decrease the item quantity by dispatching the decrementQuantity action */}
                <button
                  onClick={() =>
                    dispatch(decrementQuantity({ productId: item.id }))
                  }
                  disabled={item.quantity === 1}>
                  -
                </button>
                <span>{item.quantity}</span>
                {/* Increase the item quantity by dispatching the incrementQuantity action */}
                <button
                  onClick={() =>
                    dispatch(incrementQuantity({ productId: item.id }))
                  }>
                  +
                </button>
                {/* Remove the item from the cart by dispatching the removeFromCart action */}
                <button
                  onClick={() =>
                    dispatch(removeFromCart({ productId: item.id }))
                  }>
                  Remove
                </button>
              </div>
            </li>
          ))
        ) : (
          // Display a message if the cart is empty
          <p className="empty">Your cart is empty</p>
        )}
      </ul>
      <div className="cart-footer">
        {/* Display the total price with two decimal points and a checkout button */}
        <button className="checkout-btn">
          Pay {totalPrice.toFixed(2)} EGP
        </button>
      </div>
    </aside>
  );
}
