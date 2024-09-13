import { useSelector } from "react-redux";

import cartLogo from "../../assets/Cart-Logo.png";
import "./Header.css";

// eslint-disable-next-line react/prop-types
function Header({ toggleCart, isCartOpen }) {
  const { quantity } = useSelector((state) => state.cart);

  return (
    <header>
      <div className="container">
        <div className="logo">Shop</div>
        <div className="header-cart">
          <button
            className={`cart-button ${isCartOpen ? "active" : ""}`}
            onClick={toggleCart}>
            <div className="cart-increment">{quantity}</div>
            <div className="cart-image">
              <img src={cartLogo} alt="Cart Logo" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
