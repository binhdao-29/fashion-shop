import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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

  const headerRef = useRef(null);
  const navRef = useRef(null);
  const headerMenuRef = useRef(null);

  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex(item => item.path === pathname);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('shrink');
      } else {
        headerRef.current.classList.remove('shrink');
      }
    });
    return () => {
      window.removeEventListener('scroll');
    }
  }, [])

  const toggleMenu = () => {
    navRef.current.classList.toggle('nav-open');
    headerMenuRef.current.classList.toggle('header__menu--open');
  }

  return (
    <div className="header" ref={headerRef}>
      <div className="header-container container">
        <div className="header__logo">
          <Link to="/"> 
            <strong>coca</strong>
            <span>store</span>
          </Link>
        </div>
        <div className="header__menu" ref={headerMenuRef}>
          {
            mainNav.map((item, index) => (
              <div onClick={toggleMenu} key={index} className={`header__item ${index === activeNav ? 'active': ''}`}>
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))
          }
        </div>
        <div className="header__icon">
          <div className="icon">
            <i class="fas fa-search"></i>
          </div>
          <div className="icon">
            <Link to="/cart">
              <i class="fas fa-shopping-cart"></i>
            </Link>
          </div>
          <div className="icon">
            <i class="far fa-user"></i>
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
  )
}

export default Header
