import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import post1 from "../assets/images/post/post1.jpg";
import post2 from "../assets/images/post/post2.jpg";
import post3 from "../assets/images/post/post3.jpg";
import post4 from "../assets/images/post/post4.jpg";
import post5 from "../assets/images/post/post5.jpg";
import post6 from "../assets/images/post/post6.jpg";
import { AppContext } from "../context/AppProvider";
import CartDrawer from "./CartDrawer";

const mainNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Products",
    path: "/catalog",
  },
  {
    display: "Blog",
    path: "/blog",
  },
  {
    display: "About",
    path: "/about",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const gallery = [
  {
    img: post1,
  },
  {
    img: post2,
  },
  {
    img: post3,
  },
  {
    img: post4,
  },
  {
    img: post5,
  },
  {
    img: post6,
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const headerMenuRef = useRef(null);
  const { cart } = useContext(AppContext);
  const [cartDrawerVisible, setCartDrawerVisible] = useState(false);

  const handleClickCart = (visible) => setCartDrawerVisible(visible);

  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((item) => item.path === pathname);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    });
    return () => {
      window.removeEventListener("scroll", window);
    };
  }, []);

  const toggleMenu = () => {
    navRef.current.classList.toggle("nav-open");
    headerMenuRef.current.classList.toggle("header__menu--open");
  };

  return (
    <>
      <div className="header" ref={headerRef}>
        <div className="header-container container">
          <div className="header__logo">
            <Link to="/">
              <strong>coca</strong>
              <span>store</span>
            </Link>
          </div>
          <div className="header__menu" ref={headerMenuRef}>
            {mainNav.map((item, index) => (
              <div
                onClick={toggleMenu}
                key={index}
                className={`header__item ${
                  index === activeNav ? "active" : ""
                }`}
              >
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}

            <div className="header-info">
              <span className="name">@ CocaStore</span>
              <div className="gallery">
                {gallery.map((item, index) => (
                  <div key={index} className="wrap-item-gallery">
                    <img src={item.img} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="header__icon">
            <div className="icon">
              <i className="fas fa-search"></i>
            </div>
            <div className="icon" onClick={() => setCartDrawerVisible(true)}>
              <i className="fas fa-shopping-cart"></i>
              {cart.length > 0 && (
                <span className="cart-number">{cart.length}</span>
              )}
            </div>
            <div className="icon">
              <i className="far fa-user"></i>
            </div>

            <div onClick={toggleMenu} className="nav-icons" ref={navRef}>
              <div className="bars">
                <span></span>
                <span></span>
                <span></span>
                <div className="other-bar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CartDrawer
        isVisible={cartDrawerVisible}
        handleClickCart={handleClickCart}
      />
    </>
  );
};

export default Header;
