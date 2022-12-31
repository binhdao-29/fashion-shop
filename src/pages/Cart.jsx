import React, { useContext, useState, useEffect, useRef } from "react";
import Helmet from "../components/Helmet";
import { useHistory } from "react-router";
import { AppContext } from "../context/AppProvider";
import { urlFor } from "../lib/client";
import { toast } from "react-hot-toast";

const shippingUnits = [
  {
    name: "Economical delivery",
    cost: 50,
  },
  {
    name: "Fast delivery",
    cost: 100,
  },
];

const CartItem = ({ item, updateItem, index, deleteItem, discount }) => {
  const [currentQuantity, setCurrentQuantity] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);

  useEffect(() => {
    setCurrentQuantity(item.quantity);
    setDiscountPrice((item.price - (item.price * discount) / 100).toFixed(2));
  }, [item, discount]);

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
        <div onClick={() => deleteItem(item)} className="product__image">
          <img src={urlFor(item.image[0])} alt="" />
        </div>
        <span className="title">{item.name}</span>
      </td>
      <td>
        {discount > 0 ? (
          <div>
            <div className="discount-price">$ {item.price}</div>
            <div>$ {discountPrice}</div>
          </div>
        ) : (
          <div>$ {item.price}</div>
        )}
      </td>
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
      <td>{`$ ${priceItem(item.quantity, discountPrice)}`}</td>
    </tr>
  );
};

export default function Cart() {
  const { cart, setCart } = useContext(AppContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalInvoice, setTotalInvoice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const history = useHistory();
  const inpVoucherRef = useRef(null);
  const selectShippingRef = useRef(null);

  useEffect(() => {
    const total = cart
      .reduce((a, b) => parseFloat(b.price) * b.quantity + a, 0)
      .toFixed(2);
    if (discount > 0) {
      setTotalPrice((total - (total * discount) / 100).toFixed(2));
      setTotalInvoice((total - (total * discount) / 100).toFixed(2));
    } else {
      setTotalPrice(total);
      setTotalInvoice(total);
    }
  }, [cart, discount]);

  const backToCatalog = () => {
    history.push("/catalog");
  };

  const updateItem = (item, index) => {
    const newCart = [...cart.slice(0, index), item, ...cart.slice(index + 1)];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const deleteItem = (item) => {
    const newCart = cart.filter(
      (i) => i.id !== item.id || i.color !== item.color || i.size !== item.size
    );
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const applyVoucher = () => {
    if (inpVoucherRef.current.value === "COCA-VOUCHER") {
      setDiscount(20);
    } else {
      setDiscount(0);
      alert("You haven't any voucher!");
    }
  };

  const handleChangeShipping = () => {
    setDeliveryCharge(selectShippingRef.current.value);
  };

  const updateTotals = () => {
    if (deliveryCharge > 0) {
      if (totalInvoice <= totalPrice) {
        setTotalInvoice(
          (parseFloat(totalInvoice) + parseFloat(deliveryCharge)).toFixed(2)
        );
      } else {
        alert("You have chose a company shipping!");
      }
    } else {
      alert("Please choose a company shipping!");
    }
  };

  const handleCheckout = async () => {
    const response = await fetch("http://localhost:5000/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    });

    const data = await response.json();

    if (data?.url) {
      toast.loading("Redirecting...");
      window.location.assign(data.url);
    } else {
      toast.error("Checkout Failed. Please check again");
    }
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
                        index={index}
                        discount={discount}
                        updateItem={updateItem}
                        deleteItem={deleteItem}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="cart-footer">
                <div className="voucher-form">
                  <input
                    ref={inpVoucherRef}
                    type="text"
                    placeholder="Voucher Code"
                  />
                  <div onClick={applyVoucher} className="cb-btn">
                    apply voucher
                  </div>
                </div>
                <div onClick={backToCatalog} className="cb-btn">
                  continue shopping
                </div>
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
                    <select
                      ref={selectShippingRef}
                      className="shipping-select"
                      onChange={handleChangeShipping}
                    >
                      <option value={0}>Select a company shipping</option>
                      {shippingUnits.map((shipping, index) => (
                        <option key={index} value={shipping.cost}>
                          {shipping.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-input">
                    <input type="text" placeholder="Phone Number" />
                  </div>
                  <div className="form-input">
                    <input type="text" placeholder="Address" />
                  </div>
                  <div onClick={updateTotals} className="cb-btn">
                    Update totals
                  </div>
                </div>
              </div>
              <div className="shipping-footer">
                <div className="invoice-block--end invoice-block">
                  <span className="title">Total:</span>
                  <div className="total-price">{`$ ${totalInvoice}`}</div>
                </div>
                <div className="cb-btn" onClick={handleCheckout}>
                  proceed to checkout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
}
