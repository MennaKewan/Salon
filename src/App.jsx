import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Menu from './pages/Menu/Menu';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';
import Login from './pages/1-Login/Login';

function App() {
  return (
    <div > 
      <Navbar /> 
      <Routes>
       <Route path="/home" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/menu" element={<Menu />} />
       <Route path="/gallery" element={<Gallery />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/login" element={<Login />} />




      </Routes>
      <Footer />
    </div>
  );
}

export default App;
