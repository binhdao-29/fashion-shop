import React, { useState } from "react";
import productData from "../assets/test-data/products";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [categoryName, setCategoryName] = useState("");
  const [cart, setCart] = useState([]);
  const allProducts = productData.getAllProducts();

  return (
    <AppContext.Provider
      value={{ categoryName, setCategoryName, allProducts, cart, setCart }}
    >
      {children}
    </AppContext.Provider>
  );
}
