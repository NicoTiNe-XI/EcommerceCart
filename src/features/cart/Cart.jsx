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
const Cart = ({ onClose, isCartOpen }) => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <aside className={`cart-sidebar ${isCartOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>
        ×
      </button>
      <div className="cart-header">
        <h2>Items</h2>
        <button className="clear-btn" onClick={() => dispatch(clearCart())}>
          Clear
        </button>
      </div>
      <ul>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <li key={`${item.id}-${nanoid()}`} className="cart-item">
              <div className="row">
                <img src={item.image} alt={item.title} />
                <div className="product-data">
                  <h3>{item.title}</h3>
                  <p>{item.price} EGP</p>
                </div>
              </div>
              <div className="increment-controls">
                <button
                  onClick={() =>
                    dispatch(incrementQuantity({ productId: item.id }))
                  }>
                  +
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch(decrementQuantity({ productId: item.id }))
                  }
                  disabled={item.quantity === 1}>
                  -
                </button>
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
          <p className="empty">Your cart is empty</p>
        )}
      </ul>
      <div className="cart-footer">
        <button className="checkout-btn">Pay {(totalPrice).toFixed(2)} EGP</button>
      </div>
    </aside>
  );
};

export default Cart;
