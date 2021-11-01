import React, { useState, useEffect } from "react";
import productData from "../assets/test-data/products";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [categoryName, setCategoryName] = useState("");
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const allProducts = productData.getAllProducts();

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const localCart = localStorage.getItem("cart");

    localCart ? setCart(JSON.parse(localCart)) : setCart([]);
  }, []);

  return (
    <AppContext.Provider
      value={{
        products,
        categoryName,
        setCategoryName,
        allProducts,
        cart,
        setCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
