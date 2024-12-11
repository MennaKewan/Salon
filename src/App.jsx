import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Menu from './pages/Menu/Menu';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
       <Route path="/home" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/menu" element={<Menu />} />
       <Route path="/gallery" element={<Gallery />} />
       <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
