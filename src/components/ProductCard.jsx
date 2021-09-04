import React from 'react'
import PropTypes from 'prop-types'

const ProductCard = props => {
  return (
    <div className="product-card col-sm-6 col-md-4 col-lg-3">
      <div className="card-wrapper">
        <div className="card__image">
          <img src={props.image01} alt="" />
          <button className="card-btn cb-btn">Quick View</button>
        </div>
        <div className="card__content">
          <div className="card__title">
            <a href="/">{props.title}</a>
          </div>
          <div className="card__price">
            <span className="price__old"><del>290.3</del>&nbsp;</span>
            <span>${props.price}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  image01: PropTypes.string.isRequired,
  image02: PropTypes.string,
  image03: PropTypes.string,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired
}

export default ProductCard
