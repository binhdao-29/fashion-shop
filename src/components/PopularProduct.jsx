import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { AppContext } from "../context/AppProvider";

const PopularProduct = () => {
  const { getPopularProducts } = useContext(AppContext);

  return (
    <div className="popular-product container">
      <h3 className="popular-product__title">Popular products</h3>
      <div className="row">
        {getPopularProducts(12).map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
      <Link to="/catalog">
        <div className="load-more">
          <button className="cb-btn">Load more</button>
        </div>
      </Link>
    </div>
  );
};

export default PopularProduct;
