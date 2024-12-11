import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/assets/main-logo.jpeg" alt="Logo" />
          </Link>
        </div>
        <div className="links">
          <ul>
          <li><a href="#about">عن الخدمة</a></li>
          <li><a href="#register">التسجيل</a></li>
          <li><a href="#login">تسجيل الدخول</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




