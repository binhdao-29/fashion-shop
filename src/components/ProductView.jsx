import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import SuccessModal from "./SuccessModal";

const ProductView = ({ product, display, setDisplay }) => {
  const [imageCurrent, setImageCurrent] = useState(product.image01);

  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);

  const [quantity, setQuantity] = useState(1);

  const [isAddSuccess, setSuccess] = useState(false);

  const productViewRef = useRef(null);

  const checkClickOut = (e) => {
    if (e.target === productViewRef.current) {
      setDisplay(!display);
    }
  };

  const toggleProductView = () => {
    setDisplay(!display);
  };

  const toggleSuccessModal = (isToggle) => {
    setSuccess(isToggle);
  };

  useEffect(() => {
    setImageCurrent(product.image01);
    setQuantity(1);
    setColor(undefined);
    setSize(undefined);
  }, [product]);

  const checkUndefined = () => {
    if (color === undefined) {
      alert("You haven't chosen a color yet!");
      return false;
    }
    if (size === undefined) {
      alert("You haven't chosen a size yet!");
      return false;
    }

    return true;
  };

  const addToCart = () => {
    if (checkUndefined()) {
      setSuccess(true);
    }
  };

  return (
    <div className={`product-view ${display ? "active" : ""}`}>
      {/* Add to cart success */}
      <SuccessModal
        isAddSuccess={isAddSuccess}
        title={product.title}
        toggleSuccessModal={toggleSuccessModal}
      />

      <div
        ref={productViewRef}
        onClick={checkClickOut}
        className="product-view-overlay"
      ></div>
      <div className="container">
        <div className="product-view__wrapper">
          <div onClick={toggleProductView} className="btn-close">
            <i className="fas fa-times"></i>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-7">
              <div className="wrapper__image">
                <ul className="image__list">
                  <li
                    onClick={() => setImageCurrent(product.image01)}
                    className="image__list__item"
                  >
                    <img src={product.image01} alt="" />
                    <div className="overlay"></div>
                  </li>
                  <li
                    onClick={() => setImageCurrent(product.image02)}
                    className="image__list__item"
                  >
                    <img src={product.image02} alt="" />
                    <div className="overlay"></div>
                  </li>
                  <li
                    onClick={() => setImageCurrent(product.image03)}
                    className="image__list__item"
                  >
                    <img src={product.image03} alt="" />
                    <div className="overlay"></div>
                  </li>
                </ul>
                <div className="image__current">
                  <img src={imageCurrent} alt="" />
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-5">
              <div className="wrapper__info">
                <h4 className="title">{product.title}</h4>
                <span className="price">${product.price}</span>
                <p className="description">{product.des}</p>
                <div className="product-variant">
                  <div className="product-variant__wrap">
                    <div className="variant__title">Size</div>
                    <div className="variant__content">
                      {product.size.map((s, i) => (
                        <div
                          key={i}
                          onClick={() => setSize(s)}
                          className={`variant ${size === s ? "active" : ""}`}
                        >
                          <div className="variant__info">{s}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="product-variant__wrap">
                    <div className="variant__title">Color</div>
                    <div className="variant__content">
                      {product.colors.map((c, i) => (
                        <div
                          key={i}
                          onClick={() => setColor(c)}
                          className={`variant ${color === c ? "active" : ""}`}
                        >
                          <div
                            className="variant__info"
                            style={{ backgroundColor: `${c}` }}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="product-variant__wrap">
                    <div className="variant__content">
                      <div className="wrap__num">
                        <div
                          onClick={() => setQuantity(Math.max(quantity - 1, 0))}
                          className="btn-num"
                        >
                          -
                        </div>
                        <div className="product-num">{quantity}</div>
                        <div
                          onClick={() => setQuantity(quantity + 1)}
                          className="btn-num"
                        >
                          +
                        </div>
                      </div>
                      <div onClick={addToCart} className="cb-btn">
                        Add to cart
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-social">
                  <a href="https://facebook.com/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://pinterest.com/">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                  <a href="https://twitter.com/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://google.com/">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object.isRequired,
  display: PropTypes.bool,
  setDisplay: PropTypes.func,
};

export default ProductView;
