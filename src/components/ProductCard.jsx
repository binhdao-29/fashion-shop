import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductView from './ProductView';

const ProductCard = props => {

  const [isActive, setActive]= useState(false);

  const product = props.product;

  const activeProductView = () => setActive(true);

  const setDisplay = (childData) => {
    setActive(childData);
  }

  return (
    <div className="product-card col-sm-6 col-md-4 col-lg-3">
      <ProductView display={isActive} product={product} setDisplay={setDisplay} />
      <div className="card-wrapper">
        <div className="card__image">
          <img src={product.image01} alt="" />
          <button 
            className="card-btn cb-btn"
            onClick={activeProductView}
          >
              Quick View
          </button>
        </div>
        <div className="card__content">
          <div className="card__title">
            <a href="/">{product.title}</a>
          </div>
          <div className="card__price">
            <span className="price__old"><del>290.3</del>&nbsp;</span>
            <span>${product.price}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductCard
