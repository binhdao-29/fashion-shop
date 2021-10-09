import React, { useContext, useState, useEffect } from "react";
import Helmet from "../components/Helmet";
import { AppContext } from "../context/AppProvider";

const CartItem = ({ item, updateItem, index }) => {
  const [currentQuantity, setCurrentQuantity] = useState(0);

  useEffect(() => {
    setCurrentQuantity(item.quantity);
  }, [item]);

  const priceItem = (quantity, price) => {
    const result = quantity * parseFloat(price);

    return result.toFixed(2);
  };

  const updateQuantity = (opt) => {
    if (opt === "+") {
      updateItem({ ...item, quantity: currentQuantity + 1 }, index);
      setCurrentQuantity(currentQuantity + 1);
    }
    if (opt === "-") {
      updateItem(
        {
          ...item,
          quantity: currentQuantity - 1 === 0 ? 1 : currentQuantity - 1,
        },
        index
      );
      setCurrentQuantity(Math.max(currentQuantity - 1, 1));
    }
  };

  return (
    <tr className="table__row">
      <td>
        <div className="product__image">
          <img src={item.image01} alt="" />
        </div>
        <span className="title">{item.title}</span>
      </td>
      <td>$ {item.price}</td>
      <td>
        <div className="wrap-num-product">
          <div className="btn-num-product" onClick={() => updateQuantity("-")}>
            -
          </div>
          <div className="product-quantity btn-num-product">
            {currentQuantity}
          </div>
          <div className="btn-num-product" onClick={() => updateQuantity("+")}>
            +
          </div>
        </div>
      </td>
      <td>{`$ ${priceItem(item.quantity, item.price)}`}</td>
    </tr>
  );
};

export default function Cart() {
  const { cart, setCart } = useContext(AppContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      cart.reduce((a, b) => parseFloat(b.price) * b.quantity + a, 0).toFixed(2)
    );
  }, [cart]);

  const updateItem = (item, index) => {
    const newCart = [...cart.slice(0, index), item, ...cart.slice(index + 1)];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <Helmet title="Your Cart">
      <div className="cart__banner"></div>
      <div className="cart-container container">
        <div className="cart__link">
          <a href="/fashion-shop">
            Home <i className="fas fa-chevron-right"></i>
          </a>
          <span className="text">Shopping cart</span>
        </div>
        <div className="cart-row row">
          <div className="col-xl-7">
            <div className="cart-wrapper">
              <div className="wrapper-table">
                <table className="table-cart">
                  <tbody>
                    <tr className="table__head">
                      <th style={{ width: "40%" }}>Product</th>
                      <th style={{ width: "15%" }}>Price</th>
                      <th style={{ width: "30%" }}>Quantity</th>
                      <th style={{ width: "15%" }}>Total</th>
                    </tr>
                    {cart.map((item, index) => (
                      <CartItem
                        key={index}
                        item={item}
                        updateItem={updateItem}
                        index={index}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="cart-footer">
                <div className="voucher-form">
                  <input type="text" placeholder="Voucher Code" />
                  <div className="cb-btn">apply voucher</div>
                </div>
                <div className="cb-btn">update cart</div>
              </div>
            </div>
          </div>
          <div className="col-lg-10 col-xl-5">
            <div className="cart-invoice">
              <h4 className="cart-total__title">Cart totals</h4>
              <div className="invoice-block--dash invoice-block">
                <div className="title">Subtotal:</div>
                <div className="total-price">{`$${totalPrice}`}</div>
              </div>
              <div className="invoice-block--dash invoice-block">
                <div className="title">Shipping:</div>
                <div className="shipping__info">
                  <span className="text">company shipping</span>
                  <div className="form-select">
                    <select className="shipping-select">
                      <option>Select a company shipping</option>
                      <option>Economical delivery</option>
                      <option>Fast delivery</option>
                    </select>
                  </div>
                  <div className="form-input">
                    <input type="text" placeholder="Phone Number" />
                  </div>
                  <div className="form-input">
                    <input type="text" placeholder="Address" />
                  </div>
                  <div className="cb-btn">Update totals</div>
                </div>
              </div>
              <div className="shipping-footer">
                <div className="invoice-block--end invoice-block">
                  <span className="title">Total:</span>
                  <div className="total-price">{`$ ${totalPrice}`}</div>
                </div>
                <div className="cb-btn">proceed to checkout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
}
