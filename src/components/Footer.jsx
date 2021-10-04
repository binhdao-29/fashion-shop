import React, { useState } from "react";
import { Link } from "react-router-dom";

import cardEway from "../assets/images/cards/eway.svg";
import cardCreadit from "../assets/images/cards/credit-card.svg";
import cardWaller from "../assets/images/cards/google-wallet.svg";
import cardPaypal from "../assets/images/cards/paypal.svg";
import cardVisa from "../assets/images/cards/visa.svg";

const categoryLinks = [
  {
    display: "Women",
    path: "/catalog",
  },
  {
    display: "Men",
    path: "/catalog",
  },
  {
    display: "Shoes",
    path: "/catalog",
  },
  {
    display: "Watches",
    path: "/catalog",
  },
];

const helpLinks = [
  {
    display: "Track Order",
    path: "/contact",
  },
  {
    display: "Returns",
    path: "/contact",
  },
  {
    display: "Shipping",
    path: "/contact",
  },
  {
    display: "FAQs",
    path: "/contact",
  },
];

const Footer = () => {
  const [textInput, setTextInput] = useState("");

  const onTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-3 footer-block">
            <h4 className="footer__title">Categories</h4>
            <ul className="footer__content">
              {categoryLinks.map((item, index) => (
                <li key={index} className="footer__link">
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-sm-6 col-lg-3 footer-block">
            <h4 className="footer__title">Help</h4>
            <ul className="footer__content">
              {helpLinks.map((item, index) => (
                <li key={index} className="footer__link">
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-sm-6 col-lg-3 footer-block">
            <h4 className="footer__title">Get in touch</h4>
            <p className="footer__text">
              Any questions? Let us know in store at 8th floor, 379 Lang St, Ha
              Noi, VN 10018 or call us on (+84) 96 716 6879
            </p>
            <ul className="footer__social">
              <li className="icon">
                <a href="https://facebook.com/">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="icon">
                <a href="https://instagram.com/">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="icon">
                <a href="https://youtube.com/">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li className="icon">
                <a href="https://pinterest.com/">
                  <i className="fab fa-pinterest-p"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-sm-6 col-lg-3 footer-block">
            <h4 className="footer__title">Newsletter</h4>
            <form>
              <div className="input-warper">
                <input
                  onChange={onTextInputChange}
                  type="text"
                  name="email"
                  placeholder="email@example.com"
                />
                <div
                  className={`focus-input ${textInput !== "" ? "active" : ""}`}
                ></div>
              </div>
              <button className="footer-btn cb-btn">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="cards">
            <a href="/fashion-shop">
              <img src={cardCreadit} alt="" />
            </a>
            <a href="/fashion-shop">
              <img src={cardEway} alt="" />
            </a>
            <a href="/fashion-shop">
              <img src={cardPaypal} alt="" />
            </a>
            <a href="/fashion-shop">
              <img src={cardVisa} alt="" />
            </a>
            <a href="/fashion-shop">
              <img src={cardWaller} alt="" />
            </a>
          </div>
          <p className="copyright footer__text">
            {`Copyright © ${new Date().getFullYear()} All rights reserved | Made with `}
            <i className="far fa-heart"></i>&nbsp;by
            <a href="https://gracious-tereshkova-96f598.netlify.app/">
              &nbsp;CongBinh
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
