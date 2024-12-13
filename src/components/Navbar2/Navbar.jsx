import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // استخدام NavLink بدلاً من Link
import './Navbar2.css';

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // حالة القائمة
  const [isDashboardOpen, setIsDashboardOpen] = useState(false); // حالة الـ Dashboard
  const [isScrolled, setIsScrolled] = useState(false); // حالة التمرير

  // تغيير حالة التمرير عندما يتغير التمرير في الصفحة
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // عندما ينزل التمرير أكثر من 50px
      } else {
        setIsScrolled(false); // إذا كان التمرير أعلى من 50px
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDashboardOpen(!isDashboardOpen); // فتح الـ Dashboard عند فتح القائمة
  };

  const closeDashboard = () => {
    setIsDashboardOpen(false); // غلق الـ Dashboard عند الضغط على "X"
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'open' : ''}`}>
      <div className="container">
        <div className="logo">
          <NavLink to="/">
            <img src="/assets/main-logo.jpeg" alt="Logo" />
          </NavLink>
        </div>
        <div className={`links ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            {/* استخدم NavLink بدلاً من Link هنا */}
            <li><NavLink to="" activeClassName="active">الصفحة الرئيسية</NavLink></li>
            <li><NavLink to="menu" activeClassName="active">قائمة الصالونات</NavLink></li>
            <li><NavLink to="service" activeClassName="active"> خدمات صالوناتي </NavLink></li>
            <li><NavLink to="order" activeClassName="active">طلباتى</NavLink></li>
            <li><NavLink to="contact" activeClassName="active">تواصل معنا</NavLink></li>
            <li><NavLink to="LogOut" activeClassName="active">تسجيل الخروج</NavLink></li>
          </ul>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>} {/* شاشة التعتيم عند فتح القائمة */}

      {/* Sidebar (Dashboard) */}
      {isDashboardOpen && (
        <div className="sidebar">
          <ul>
            <li><NavLink to="home" activeClassName="active">الصفحة الرئيسية</NavLink></li>
            <li><NavLink to="menu" activeClassName="active">قائمة الصالونات</NavLink></li>
            <li><NavLink to="service" activeClassName="active">عن الخدمة</NavLink></li>
            <li><NavLink to="order" activeClassName="active">طلباتى</NavLink></li>
            <li><NavLink to="contact" activeClassName="active">تواصل معنا</NavLink></li>
            <li><NavLink to="Logout" activeClassName="active">تسجيل الخروج</NavLink></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
