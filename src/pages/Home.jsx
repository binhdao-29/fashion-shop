import React from 'react';
import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider';
import PopularProduct from '../components/PopularProduct';

const Home = () => {
  return (
    <Helmet title="Home">
      <HeroSlider />

      {/* Popular Product */}
      <PopularProduct />

    </Helmet>
  )
}

export default Home
