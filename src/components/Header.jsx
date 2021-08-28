import React from 'react';
import { Link } from 'react-router-dom';

const mainNav = [
  {
    display: "Home",
    path: "/"
  },
  {
    display: "Products",
    path: "/catalog"
  },
  {
    display: "Blog",
    path: "/blog"
  },
  {
    display: "Contact",
    path: "/contact"
  },

];

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <Link to="/"> 
            <strong>coca</strong>
            <span>store</span>
          </Link>
        </div>
        <div className="header__menu">
          <div class="nav-icons">
            <div class="bars">
              <span></span>
              <span></span>
              <span></span>
              <div class="other-bar"></div>
            </div>
          </div>

          {
            mainNav.map((item, index) => (
              <div key={index} className="header__item">
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Header
