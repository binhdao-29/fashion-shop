import React, { useContext, useRef } from "react";
import { AppContext } from "../context/AppProvider";

export default function CartDrawer({ isVisible, handleClickCart }) {
  const { cart, setCart } = useContext(AppContext);
  const cartDrawerRef = useRef(null);

  const handleClick = () => {
    handleClickCart(false);
  };

  const handleClickOut = (e) => {
    if (e.target === cartDrawerRef.current) {
      handleClickCart(false);
    }
  };

  const totalPrice = () => {
    const total = cart.reduce((a, b) => {
      return parseFloat(b.price) * b.quantity + a;
    }, 0);

    return total.toFixed(2);
  };

  const deleteItem = (id, color, size) => {
    const newCart = cart.filter(
      (item) => item.id !== id || item.color !== color || item.size !== size
    );
    setCart(newCart);
  };

  return (
    <div className={`cart-drawer ${isVisible ? "is-visible" : ""}`}>
      <div
        className="card-drawer-hidden"
        ref={cartDrawerRef}
        onClick={handleClickOut}
      ></div>
      <div className="header-cart">
        <div className="header-cart__title">
          <span className="title">Your cart</span>
          <div className="btn-cart" onClick={handleClick}>
            <span className="bar"></span>
          </div>
        </div>
        <div className="header-cart__content">
          <ul className="cart__wrap">
            {cart.map((item, index) => (
              <li key={index} className="cart__item">
                <div
                  onClick={() => deleteItem(item.id, item.color, item.size)}
                  className="item__image"
                >
                  <img src={item.image01} alt="" />
                </div>
                <div className="item__info">
                  <span className="item__title">{item.title}</span>
                  <span className="item__price">
                    {item.quantity} x ${item.price}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart__footer">
            <div className="cart__total">{`Total: $${totalPrice()}`}</div>
            <div className="cart__button">
              <button className="cb-btn">View cart</button>
              <button className="cb-btn">Check out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
