import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/">
            <img src="/assets/main-logo.jpeg" alt="Logo" />
          </Link>
        </div>
        <div className={`links ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            {/* هذه الروابط ستكون فقط في الـ Sidebar */}
            <li><Link to="">الصفحة الرئيسية</Link></li>
            <li><Link to="">قائمة الصالونات</Link></li>
            <li><Link to="">عن الخدمة</Link></li>
            <li><Link to="">تواصل معنا</Link></li>
            <li><Link to="">طلباتى</Link></li>
            <li><Link to="">تسجيل الخروج</Link></li>
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
            <li><Link to="">الصفحة الرئيسية</Link></li>
            <li><Link to="">قائمة الصالونات</Link></li>
            <li><Link to="">عن الخدمة</Link></li>
            <li><Link to="">تواصل معنا</Link></li>
            <li><Link to="">طلباتى</Link></li>
            <li><Link to="">تسجيل الخروج</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
