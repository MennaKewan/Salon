import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Menu from './pages/Menu/Menu';
import Gallery from './pages/Gallery/Gallery';
import Login from './pages/1-Login/Login';
import Navbar2 from './components/Navbar2/Navbar';
import Service from './pages/Service/Service';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div > 
      <Navbar2 /> 
      <Routes>
       <Route path="/home" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/menu" element={<Menu />} />
       <Route path="/gallery" element={<Gallery />} />
       <Route path="/login" element={<Login />} />
       <Route path="/Service" element={<Service/>} />
       <Route path="/Contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
