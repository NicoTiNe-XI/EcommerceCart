import { useSelector } from "react-redux";

import cartLogo from "../../assets/Cart-Logo.png";
import "./Header.css";

// eslint-disable-next-line react/prop-types
function Header({ toggleCart }) {
  const { quantity } = useSelector((state) => state.cart);

  return (
    <header>
      <div className="container">
        <div className="logo">Shop</div>
        <div className="header-cart">
          {/* passing a toggle viability function that switch between true or false based on the prev value */}
          <button onClick={toggleCart}>
            {/* Displays the total number of items currently in the cart. 
                This number reflects the cumulative quantity of all items, 
                meaning if there are two of the same item, the cart number will show 2. 
                The quantity value is obtained from the cartSlice state and is updated 
                whenever items are added or removed from the cart.  */}
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
