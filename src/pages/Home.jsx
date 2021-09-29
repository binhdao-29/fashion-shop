import React from "react";
import Category from "../components/Category";
import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import PopularProduct from "../components/PopularProduct";

const Home = () => {
  return (
    <Helmet title="Home">
      <HeroSlider />

      {/* Category */}
      <Category />

      {/* Popular Product */}
      <PopularProduct />
    </Helmet>
  );
};

export default Home;
