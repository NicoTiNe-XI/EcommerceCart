/* eslint-disable react/prop-types */
import "./Products.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/CartSlice";

export default function Products({ products, onAddItem }) {
  const dispatch = useDispatch();

  let content;
  if (products && products.length > 0) {
    content = products.map((product) => (
      <div key={product.id} className="product-item">
        <img src={product.image} alt={product.title} />
        <div className="product-info">
          <p className="title">{product.title}</p>
          <p className="price">{product.price} EGP</p>
        </div>
        <div className="product-footer">
          <button
            onClick={() => {
              console.log(product);
              onAddItem();
              dispatch(addToCart(product));
            }}>
            Add to Cart
          </button>
        </div>
      </div>
    ));
  } else {
    content = <h2>The products are loading... please wait</h2>;
  }

  return (
    <section className="products">
      <div className="container">
        <h2>Our Products</h2>
        <div className="product-list">{content}</div>
      </div>
    </section>
  );
}
