/* eslint-disable react/prop-types */
import "./Products.css";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { addToCart } from "../../features/cart/CartSlice";

// Function to fetch product data from an API
async function fetchProducts() {
  const PRODUCTS_API = "https://fakestoreapi.com/products";
  const response = await axios.get(PRODUCTS_API); // requesting the data
  return response.data; // Returning the data
}

export default function Products({ onAddItem }) {
  const [products, setProducts] = useState([]); // State to store fetched products
  const dispatch = useDispatch(); // Hook to access Redux dispatch function

  // useEffect hook to fetch data and handle side effects
  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await fetchProducts(); // Fetch products data
      setProducts(fetchedProducts); // Update state with fetched products
    };
    fetchData(); // Call the async function to fetch data
  }, []); // Empty dependency array

  let content;
  // Check if products data is available and not empty
  if (products && products.length > 0) {
    // Map through products data and create JSX for each product
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
              // Trigger the function to open the cart when an item is added
              onAddItem();
              // Dispatch action to add the product to the cart
              dispatch(addToCart(product));
            }}>
            Add to Cart
          </button>
        </div>
      </div>
    ));
  } else {
    // Display a message while products data is loading or if an error occurs
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
