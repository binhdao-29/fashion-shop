import React, { useState, useEffect } from "react";
import { client } from "../lib/client";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [categoryName, setCategoryName] = useState("");
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [banners, setBaners] = useState([]);

  const handleLoadData = async () => {
    const bannerQuery = '*[_type == "banner"]';
    const banners = await client.fetch(bannerQuery);
    setBaners(banners);

    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
    setProducts(products);
  };

  const getPopularProducts = (count) => {
    if (products.length > 0) {
      const end = products.length - count;
      const start = Math.floor(Math.random() * end);
      return products.slice(start, start + count);
    }
    return [];
  };

  useEffect(() => {
    handleLoadData();
  }, []);

  useEffect(() => {
    const localCart = localStorage.getItem("cart");

    localCart ? setCart(JSON.parse(localCart)) : setCart([]);
  }, []);

  return (
    <AppContext.Provider
      value={{
        categoryName,
        setCategoryName,
        allProducts: products,
        banners,
        cart,
        setCart,
        getPopularProducts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
