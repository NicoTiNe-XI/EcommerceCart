import "./index.css";
import axios from "axios";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "./features/cart/Cart";
import { useState, useEffect } from "react";

async function fetchProducts() {
  const PRODUCTS_API = "https://fakestoreapi.com/products";
  const response = await axios.get(PRODUCTS_API);
  return response.data;
}

function App() {
  const [products, setProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const onAddItem = () => {
    setIsCartOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header toggleCart={toggleCart} isCartOpen={isCartOpen} />
      <Products products={products} onAddItem={onAddItem} />
      <Cart onClose={toggleCart} isCartOpen={isCartOpen} />
    </>
  );
}

export default App;
